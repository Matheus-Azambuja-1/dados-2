/* ════════════════════════════════════════════════════════════════
   axon-guard.js — porteiro único das páginas do Portal AXON

   Uso (primeira linha dentro do <head> de cada página):
     <script src="axon-guard.js" data-modulo="pacotes"></script>
     <script src="axon-guard.js" data-admin></script>        ← só administradores

   O que faz:
   • Usa a MESMA sessão do login do index.html (Supabase, guardada no sessionStorage).
   • Sem sessão válida, sessão vencida, usuário pendente/bloqueado ou sem o módulo → volta ao index.
   • A página fica invisível até a verificação terminar.
   • Sessão por inatividade: 30 min sem usar a página (cliques, teclas, rolagem) encerra o acesso.
   • Expõe window.AXON  { sb, acesso, pronto, token(), pode(modulo), sair() }.
   A verificação real é feita no servidor (função meu_acesso e regras RLS do banco);
   as chaves axon_portal_* do sessionStorage servem só de apoio para as telas.
   ════════════════════════════════════════════════════════════════ */
(function () {
  'use strict';
  var SUPABASE_URL = 'https://ukijcejmtcdrsxuhklmv.supabase.co';
  var SUPABASE_KEY = 'sb_publishable_U4n-seYKyyFyzEKhQq814g_dWHVpZG9';   // chave pública: pode ficar no front
  var LIB = 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.45.4/dist/umd/supabase.js';
  var LIMITE = 30 * 60 * 1000;
  var CHAVES = ['axon_portal_auth', 'axon_portal_user', 'axon_portal_nome', 'axon_portal_kpi', 'axon_portal_cadastro', 'axon_portal_pacotes_contrato', 'axon_portal_login_ts'];

  var tag = document.currentScript;
  var modulo = (tag && tag.getAttribute('data-modulo')) || '';
  var soAdmin = !!(tag && tag.hasAttribute('data-admin'));   // página só para administradores
  var html = document.documentElement;
  html.style.visibility = 'hidden';

  var cli = null, resolver, rejeitar;
  var pronto = new Promise(function (ok, no) { resolver = ok; rejeitar = no; });
  pronto.catch(function () { });   // evita aviso de "rejeição não tratada" nas páginas que não esperam
  var AXON = { sb: null, acesso: null, pronto: pronto };
  window.AXON = AXON;

  var ss = {
    get: function (k) { try { return sessionStorage.getItem(k); } catch (e) { return null; } },
    set: function (k, v) { try { sessionStorage.setItem(k, v); } catch (e) { } },
    del: function (k) { try { sessionStorage.removeItem(k); } catch (e) { } }
  };
  function limpar() { CHAVES.forEach(ss.del); }

  function aoIndex() { location.replace('index.html'); }

  function encerrar() {           // sai de verdade (a sessão do Supabase também) e volta ao login
    var fim = function () { limpar(); aoIndex(); };
    try { if (cli) { cli.auth.signOut({ scope: 'local' }).then(fim, fim); return; } } catch (e) { }
    fim();
  }

  function tela(titulo, texto, botoes) {
    html.style.visibility = '';
    var d = document.createElement('div');
    d.style.cssText = 'position:fixed;inset:0;z-index:2147483647;background:#0e1520;display:flex;align-items:center;justify-content:center;padding:24px;font-family:system-ui,Segoe UI,sans-serif';
    d.innerHTML = '<div style="max-width:420px;background:#151e2c;border:1px solid #263449;border-radius:8px;padding:28px;color:#e6ebf2">' +
      '<h2 style="margin:0 0 8px;font-size:1.25rem">' + titulo + '</h2><p style="margin:0 0 20px;color:#b0bccd;line-height:1.5">' + texto + '</p>' +
      '<div style="display:flex;gap:10px;flex-wrap:wrap">' + botoes + '</div></div>';
    (document.body || html).appendChild(d);
  }
  var BTN = 'style="padding:10px 16px;border-radius:6px;border:1px solid #6fa6e3;background:#6fa6e3;color:#0e1520;font-weight:600;cursor:pointer;text-decoration:none;font-size:.95rem"';
  var BTN2 = 'style="padding:10px 16px;border-radius:6px;border:1px solid #34465f;background:transparent;color:#e6ebf2;cursor:pointer;text-decoration:none;font-size:.95rem"';

  function carregarLib(cb) {
    if (window.supabase && window.supabase.createClient) { cb(); return; }
    var s = document.createElement('script');
    s.src = LIB; s.onload = cb;
    s.onerror = function () {
      tela('Sem conexão', 'Não foi possível carregar o sistema de acesso. Verifique a internet e tente de novo.', '<button ' + BTN + ' onclick="location.reload()">Tentar de novo</button>');
    };
    (document.head || html).appendChild(s);
  }

  function vigente() {
    var ts = parseInt(ss.get('axon_portal_login_ts') || '0', 10);
    return ss.get('axon_portal_auth') === '1' && ts && (Date.now() - ts) < LIMITE;
  }

  function iniciar() {
    cli = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY, {
      auth: { storage: window.sessionStorage, persistSession: true, autoRefreshToken: true, detectSessionInUrl: false }
    });
    AXON.sb = cli;
    AXON.token = function () { return cli.auth.getSession().then(function (r) { return r.data.session ? r.data.session.access_token : null; }); };
    AXON.pode = function (m) { var a = AXON.acesso; return !!a && (a.papel === 'admin' || (a.modulos || []).indexOf(m) >= 0); };
    AXON.sair = encerrar;

    if (!vigente()) { encerrar(); return; }

    cli.auth.getSession().then(function (r) {
      if (!r.data.session) { limpar(); aoIndex(); return null; }
      return cli.rpc('meu_acesso');
    }).then(function (r) {
      if (!r) return;
      if (r.error) throw r.error;
      var a = r.data || {};
      if (a.status !== 'aprovado') { encerrar(); return; }
      AXON.acesso = a;
      var mods = a.modulos || [], admin = a.papel === 'admin';
      if ((soAdmin && !admin) || (modulo && !admin && mods.indexOf(modulo) < 0)) {
        tela('Sem permissão', 'Seu acesso não inclui esta ferramenta. Peça ao administrador do portal para liberar.',
          '<a ' + BTN + ' href="index.html">Voltar ao portal</a>');
        rejeitar(new Error('sem permissão'));
        return;
      }
      var email = a.email || '';
      ss.set('axon_portal_user', String(email).split('@')[0]);
      ss.set('axon_portal_nome', a.nome || String(email).split('@')[0] || 'Usuário');
      ss.set('axon_portal_kpi', admin || mods.indexOf('kpi') >= 0 ? '1' : '0');
      ss.set('axon_portal_cadastro', admin || mods.indexOf('cadastro') >= 0 ? '1' : '0');
      ss.set('axon_portal_pacotes_contrato', admin || mods.indexOf('pacotes_contrato') >= 0 ? '1' : '0');
      ss.set('axon_portal_login_ts', String(Date.now()));
      vigiar();
      html.style.visibility = '';
      resolver(AXON);
      try { document.dispatchEvent(new CustomEvent('axon:pronto', { detail: AXON })); } catch (e) { }
    }).catch(function (e) {
      tela('Não foi possível verificar o acesso', 'Confira a conexão e tente de novo. Detalhe: ' + String((e && e.message) || e).replace(/</g, '&lt;'),
        '<button ' + BTN + ' onclick="location.reload()">Tentar de novo</button><a ' + BTN2 + ' href="index.html">Voltar ao portal</a>');
      rejeitar(e);
    });
  }

  // Inatividade: qualquer uso da página renova o prazo; passou de 30 min parado, encerra.
  function vigiar() {
    var ultimo = 0;
    function marcar() { var t = Date.now(); if (t - ultimo > 20000) { ultimo = t; ss.set('axon_portal_login_ts', String(t)); } }
    ['click', 'keydown', 'scroll', 'mousemove', 'touchstart'].forEach(function (ev) { window.addEventListener(ev, marcar, { passive: true, capture: true }); });
    setInterval(function () { if (!vigente()) encerrar(); }, 15000);
  }

  carregarLib(iniciar);
})();
