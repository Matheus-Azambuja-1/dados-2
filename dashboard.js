// ============================================================================ 
// UTILS 
// ============================================================================ 
const fmt = (v) => v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }); 
const num = (v) => v.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }); 
 
// ============================================================================ 
// CHARTS INSTANCES 
// ============================================================================ 
let mainChart = null; 
let chartInstanceSetor = null; 
let chartInstanceGrupos = null; 
let chartInstanceConvenioParticipacao = null; 
let chartInstanceConvenioBar = null;
let chartInstanceConvenioEvolucao = null;
let chartInstanceGruposConvenio = null;

// ============================================================================ 
// DASHBOARD INITIALIZATION 
// ============================================================================ 
document.addEventListener('DOMContentLoaded', () => { 
    initBackToTop(); 
    renderTable(); 
    updateKPIs(); 
    initPrioritySectors(); 
    initMainCharts(); 
    initSectorDetails(); 
    initGroupEvolution(); 
    initConvenioBreakdown(); 
    initGroupsByConvenio();
    setupToggles(); 
}); 
 
// ============================================================================ 
// TAB SYSTEM
// ============================================================================ 
function switchTab(tabId) {
    // Buttons
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('onclick').includes(tabId)) btn.classList.add('active');
    });
    // Content
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
    });
    document.getElementById(`tab-${tabId}`).classList.add('active');

    // Re-render charts for the active tab to ensure correct sizing
    if (tabId === 'geral') {
        if (mainChart) mainChart.resize();
    } else if (tabId === 'convenio') {
        renderConvenioBreakdown(document.getElementById('filtro-ano-convenio').value);
        renderGroupsByConvenio(document.getElementById('filtro-convenio-detalhe').value);
    }
}

// ============================================================================ 
// BACK TO TOP 
// ============================================================================ 
function initBackToTop() { 
    const backToTopBtn = document.getElementById('backToTop'); 
    window.addEventListener('scroll', () => { 
        if (window.pageYOffset > 300) { 
            backToTopBtn.classList.add('visible'); 
        } else { 
            backToTopBtn.classList.remove('visible'); 
        } 
    }); 
    backToTopBtn.addEventListener('click', () => { 
        window.scrollTo({ top: 0, behavior: 'smooth' }); 
    }); 
} 
 
// ============================================================================ 
// MAIN TABLE & KPIs 
// ============================================================================ 
let totals = { fat24: 0, glosa24: 0, fat25: 0, glosa25: 0, fat26: 0, glosa26: 0, ttaxa25: 0, ttaxa26: 0 }; 
 
function renderTable() { 
    const tbody = document.getElementById("tabela-body"); 
    tbody.innerHTML = ""; 
    totals = { fat24: 0, glosa24: 0, fat25: 0, glosa25: 0, fat26: 0, glosa26: 0, ttaxa25: 0, ttaxa26: 0 }; 
 
    DADOS.forEach(d => { 
        totals.fat24 += d[1]; totals.glosa24 += d[2]; 
        totals.fat25 += d[3]; totals.ttaxa25 += d[4]; totals.glosa25 += d[6]; 
        totals.fat26 += d[7]; totals.ttaxa26 += d[8]; totals.glosa26 += d[10]; 
 
        const pg24 = d[1] > 0 ? (d[2] / d[1] * 100).toFixed(2) + "%" : "0.00%"; 
        const pg25 = d[3] > 0 ? (d[6] / d[3] * 100).toFixed(2) + "%" : "0.00%"; 
        const pg26 = d[7] > 0 ? (d[10] / d[7] * 100).toFixed(2) + "%" : "0.00%"; 
 
        tbody.innerHTML += ` 
        <tr> 
            <td>${d[0].substring(0, 3)}</td> 
            <td class="col-2024" style="color:var(--text-muted)">${fmt(d[1])}</td> 
            <td class="col-2024" style="color:var(--red)">${fmt(d[2])}</td> 
            <td class="border-r col-2024" style="color:var(--gold)">${pg24}</td> 
            <td style="color:var(--text-muted)">${fmt(d[3])}</td> 
            <td style="color:var(--red)">${fmt(d[6])}</td> 
            <td class="border-r" style="color:var(--gold)">${pg25}</td> 
            <td style="color:var(--blue)">${fmt(d[7])}</td> 
            <td style="color:var(--red)">${fmt(d[10])}</td> 
            <td style="color:var(--gold)">${pg26}</td> 
        </tr>`; 
    }); 
 
    const tpg24 = totals.fat24 > 0 ? (totals.glosa24 / totals.fat24 * 100).toFixed(2) + "%" : "0.00%"; 
    const tpg25 = totals.fat25 > 0 ? (totals.glosa25 / totals.fat25 * 100).toFixed(2) + "%" : "0.00%"; 
    const tpg26 = totals.fat26 > 0 ? (totals.glosa26 / totals.fat26 * 100).toFixed(2) + "%" : "0.00%"; 
 
    document.getElementById("tabela-footer").innerHTML = ` 
        <td>TOTAL</td> 
        <td class="col-2024">${fmt(totals.fat24)}</td> 
        <td class="col-2024">${fmt(totals.glosa24)}</td> 
        <td class="border-r col-2024" style="color:var(--gold)">${tpg24}</td> 
        <td>${fmt(totals.fat25)}</td> 
        <td>${fmt(totals.glosa25)}</td> 
        <td class="border-r" style="color:var(--gold)">${tpg25}</td> 
        <td>${fmt(totals.fat26)}</td> 
        <td>${fmt(totals.glosa26)}</td> 
        <td style="color:var(--gold)">${tpg26}</td> 
    `; 
} 
 
function updateKPIs() { 
    document.getElementById("kpi-fat26").innerText = fmt(totals.fat26); 
    document.getElementById("kpi-fat25_base").innerText = fmt(totals.fat25); 
    document.getElementById("kpi-glosa26").innerText = fmt(totals.glosa26); 
    document.getElementById("kpi-taxa").innerText = num((totals.fat26 > 0 ? totals.ttaxa26 : totals.ttaxa25) / DADOS.length) + "%"; 
 
    document.getElementById("hero-value").innerText = fmt(totals.fat26); 
    const pg26_val = totals.fat26 > 0 ? ((totals.glosa26 / totals.fat26) * 100).toFixed(2) : "0.00"; 
    document.getElementById("hero-subtitle").innerText = `Glosas Acumuladas: ${fmt(totals.glosa26)} (${pg26_val}%)`; 
} 
 
// ============================================================================ 
// PRIORITY SECTORS 
// ============================================================================ 
function initPrioritySectors() { 
    const PRIORIDADES = ["Cadastro de regras", "Auditoria", "Comercial ", "Faturamento"]; 
    const container = document.getElementById("priority-container"); 
    container.innerHTML = ""; 
 
    PRIORIDADES.forEach(nome => { 
        const s = DATA_SETOR.setores_geral.find(x => x.SETORES === nome); 
        const total = s ? s.TOTAL : 0; 
        const display = nome.trim().replace('Comercial', 'Comercial/Negócios'); 
 
        container.innerHTML += ` 
            <div class="priority-card"> 
                <h4>${display}</h4> 
                <div class="p-val">${fmt(total)}</div> 
                <small>Glosa Acumulada (2025)</small> 
            </div>`; 
    }); 
} 
 
// ============================================================================ 
// CHARTS 
// ============================================================================ 
function initMainCharts() { 
    Chart.defaults.color = '#94a3b8'; 
    Chart.defaults.borderColor = '#334155'; 
    Chart.defaults.font.family = "'Inter', sans-serif"; 
 
    const ctx = document.getElementById('chartEvolucao').getContext('2d'); 
    mainChart = new Chart(ctx, { 
        type: 'line', 
        data: { 
            labels: DADOS.map(d => d[0].substring(0, 3)), 
            datasets: [ 
                { 
                    label: '2026 (Atual)', 
                    data: DADOS.map(d => d[7]), 
                    borderColor: '#38bdf8', 
                    backgroundColor: 'rgba(56, 189, 248, 0.1)', 
                    borderWidth: 3, 
                    fill: true, 
                    tension: 0.4 
                }, 
                { 
                    label: '2025 (Base)', 
                    data: DADOS.map(d => d[3]), 
                    borderColor: '#94a3b8', 
                    borderWidth: 2, 
                    fill: false, 
                    tension: 0.4 
                }, 
                { 
                    label: '2024', 
                    data: DADOS.map(d => d[1]), 
                    borderColor: '#64748b', 
                    borderWidth: 2, 
                    borderDash: [5, 5], 
                    fill: false, 
                    tension: 0.4 
                } 
            ] 
        }, 
        options: { 
            responsive: true, 
            maintainAspectRatio: false, 
            plugins: { 
                title: { display: true, text: 'Evolução de Faturamento Global', color: '#fff' } 
            }, 
            scales: { 
                y: { beginAtZero: true, grid: { color: '#1e293b' } }, 
                x: { grid: { display: false } } 
            } 
        } 
    }); 
} 
 
// ============================================================================ 
// SECTOR DETAILS 
// ============================================================================ 
function initSectorDetails() { 
    const select = document.getElementById('filtro-setor'); 
    DATA_SETOR.all_setores.sort().forEach(s => { 
        select.innerHTML += `<option value="${s}">${s}</option>`; 
    }); 
 
    select.addEventListener('change', function () { 
        const sector = this.value; 
        const container = document.getElementById('setor-detalhe-container'); 
        if (!sector) { 
            container.classList.add('hidden'); 
            return; 
        } 
        container.classList.remove('hidden'); 
        renderSectorData(sector); 
        container.scrollIntoView({ behavior: 'smooth', block: 'nearest' }); 
    }); 
} 
 
function renderSectorData(sector) { 
    const values = DATA_SETOR.heatmap[sector] || []; 
    const months = DATA_SETOR.months.map(m => m.split('.')[0]); 
    const total = values.reduce((a, b) => a + b, 0); 
 
    document.getElementById('setor-total-glosa').innerText = fmt(total); 
 
    // Table 
    let head = `<tr><th style="min-width: 150px; color: var(--gold)">${sector}</th>`; 
    months.forEach(m => head += `<th>${m}</th>`); 
    head += `</tr>`; 
    document.getElementById('setor-thead-h').innerHTML = head; 
 
    let body = `<tr><td>Glosa</td>`; 
    values.forEach(v => body += `<td>${fmt(v)}</td>`); 
    body += `</tr>`; 
    document.getElementById('setor-tbody-h').innerHTML = body; 
 
    // Chart 
    const ctx = document.getElementById('chartSetor').getContext('2d'); 
    if (chartInstanceSetor) chartInstanceSetor.destroy(); 
    chartInstanceSetor = new Chart(ctx, { 
        type: 'bar', 
        data: { 
            labels: months, 
            datasets: [ 
                { label: 'Glosa', data: values, backgroundColor: '#f87171' }, 
                { type: 'line', label: 'Tendência', data: values, borderColor: '#fbbf24', borderWidth: 2, tension: 0.4, pointRadius: 0 } 
            ] 
        }, 
        options: { 
            responsive: true, 
            maintainAspectRatio: false, 
            plugins: { title: { display: true, text: `Evolução de Glosas: ${sector}`, color: '#fff' } } 
        } 
    }); 
} 
 
// ============================================================================ 
// GROUP EVOLUTION 
// ============================================================================ 
function initGroupEvolution() { 
    const fAno = document.getElementById('filtro-ano-grupos'); 
    const fMet = document.getElementById('filtro-metrica-grupos'); 
 
    const update = () => renderEvolutionGroups(fAno.value, fMet.value); 
    fAno.addEventListener('change', update); 
    fMet.addEventListener('change', update); 
 
    update(); 
} 
 
function renderEvolutionGroups(ano, metrica) { 
    const dataObj = ano === "2025" ? DATA_GRUPOS_2025 : DATA_GRUPOS_2026; 
    const ctx = document.getElementById('chartEvolucaoGrupos').getContext('2d'); 
    if (chartInstanceGrupos) chartInstanceGrupos.destroy(); 
 
    chartInstanceGrupos = new Chart(ctx, { 
        type: 'line', 
        data: { 
            labels: dataObj.labels, 
            datasets: dataObj.grupos.map(g => ({ 
                label: g.nome, 
                data: g[metrica], 
                borderColor: g.cor, 
                borderWidth: 2, 
                fill: false, 
                tension: 0.3 
            })) 
        }, 
        options: { 
            responsive: true, 
            maintainAspectRatio: false, 
            plugins: { 
                legend: { position: 'bottom', labels: { boxWidth: 12, padding: 10, font: { size: 10 } } } 
            }, 
            scales: { 
                y: { 
                    beginAtZero: true, 
                    ticks: { callback: v => metrica === 'valores' ? fmt(v) : (metrica === 'porcentagens' ? v + '%' : v) } 
                } 
            } 
        } 
    }); 
 
    // Tabela 
    let head = '<th>Grupo</th>'; 
    dataObj.labels.forEach(l => head += `<th>${l}</th>`); 
    head += '<th>Total</th><th>% Ano</th>'; 
    document.getElementById('grupos-thead').innerHTML = head; 
 
    const totalGeral = dataObj.grupos.reduce((acc, g) => acc + g[metrica].reduce((a, b) => a + b, 0), 0); 
    let bodyHtml = ""; 
    dataObj.grupos.forEach(g => { 
        const tGrupo = g[metrica].reduce((a, b) => a + b, 0); 
        const pAno = totalGeral > 0 ? (tGrupo / totalGeral * 100).toFixed(2) + "%" : "0.00%"; 
        let row = `<td>${g.nome}</td>`; 
        g[metrica].forEach(v => { 
            let d = v; 
            if (metrica === 'valores') d = fmt(v); 
            else if (metrica === 'porcentagens') d = v.toFixed(2) + "%"; 
            row += `<td>${d}</td>`; 
        }); 
        row += `<td style="color:var(--gold); font-weight:bold">${metrica === 'valores' ? fmt(tGrupo) : tGrupo}</td>`; 
        row += `<td style="color:var(--blue); font-weight:bold">${pAno}</td>`; 
        bodyHtml += `<tr>${row}</tr>`; 
    }); 
    document.getElementById('grupos-tbody').innerHTML = bodyHtml; 
} 
 
// ============================================================================ 
// CONVENIO BREAKDOWN 
// ============================================================================ 
function initConvenioBreakdown() { 
    const fAno = document.getElementById('filtro-ano-convenio'); 
    fAno.addEventListener('change', () => renderConvenioBreakdown(fAno.value)); 
} 
 
function renderConvenioBreakdown(ano) { 
    const data = DATA_CONVENIO[ano]; 

    // 1. Chart Participação (Doughnut)
    const ctxPart = document.getElementById('chartConvenioParticipacao').getContext('2d'); 
    if (chartInstanceConvenioParticipacao) chartInstanceConvenioParticipacao.destroy(); 
    chartInstanceConvenioParticipacao = new Chart(ctxPart, { 
        type: 'doughnut', 
        data: { 
            labels: data.map(d => d.convenio), 
            datasets: [{ 
                data: data.map(d => d.faturamento), 
                backgroundColor: ['#38bdf8', '#34d399', '#8b5cf6', '#fbbf24', '#94a3b8'], 
                borderWidth: 0 
            }] 
        }, 
        options: { 
            responsive: true, 
            maintainAspectRatio: false, 
            plugins: { 
                title: { display: true, text: 'Participação no Faturamento', color: '#fff' },
                legend: { position: 'right', labels: { padding: 15, color: '#94a3b8', font: { size: 11 } } } 
            } 
        } 
    }); 

    // 2. Chart Comparação (Bar)
    const ctxBar = document.getElementById('chartConvenioBar').getContext('2d');
    if (chartInstanceConvenioBar) chartInstanceConvenioBar.destroy();
    chartInstanceConvenioBar = new Chart(ctxBar, {
        type: 'bar',
        data: {
            labels: data.map(d => d.convenio),
            datasets: [
                {
                    label: 'Faturamento',
                    data: data.map(d => d.faturamento),
                    backgroundColor: '#38bdf8'
                },
                {
                    label: 'Glosa',
                    data: data.map(d => d.glosa),
                    backgroundColor: '#f87171'
                }
            ]
        },
        options: {
            responsive: true, 
            maintainAspectRatio: false,
            plugins: {
                title: { display: true, text: 'Faturamento vs Glosa por Convênio', color: '#fff' }
            },
            scales: {
                y: { ticks: { callback: v => fmt(v) } }
            }
        }
    });

    // 3. Chart Evolução (Simulado com dados do ano)
    const ctxEvo = document.getElementById('chartConvenioEvolucao').getContext('2d');
    if (chartInstanceConvenioEvolucao) chartInstanceConvenioEvolucao.destroy();
    chartInstanceConvenioEvolucao = new Chart(ctxEvo, {
        type: 'line',
        data: {
            labels: ['JAN', 'FEV', 'MAR', 'ABR', 'MAI', 'JUN', 'JUL', 'AGO', 'SET', 'OUT', 'NOV', 'DEZ'],
            datasets: data.map((d, i) => ({
                label: d.convenio,
                data: Array(12).fill(0).map(() => d.glosa / 12 * (0.8 + Math.random() * 0.4)), // Mock evolution
                borderColor: ['#38bdf8', '#34d399', '#8b5cf6', '#fbbf24', '#94a3b8'][i],
                tension: 0.4,
                borderWidth: 2
            }))
        },
        options: {
            responsive: true, 
            maintainAspectRatio: false,
            plugins: {
                legend: { position: 'bottom' }
            }
        }
    });
 
    let html = ""; 
    data.forEach(d => { 
        const pGlosa = (d.glosa / d.faturamento * 100).toFixed(2); 
        html += ` 
        <tr> 
            <td>${d.convenio}</td> 
            <td>${fmt(d.faturamento)}</td> 
            <td style="color:var(--red)">${fmt(d.glosa)}</td> 
            <td style="color:var(--gold)">${pGlosa}%</td> 
        </tr>`; 
    }); 
    document.getElementById('convenio-tbody').innerHTML = html; 
} 

// ============================================================================ 
// GROUPS BY CONVENIO
// ============================================================================ 
function initGroupsByConvenio() {
    const select = document.getElementById('filtro-convenio-detalhe');
    select.addEventListener('change', () => renderGroupsByConvenio(select.value));
    renderGroupsByConvenio("UNIMED");
}

function renderGroupsByConvenio(convenio) {
    const data = DATA_GRUPOS_POR_CONVENIO[convenio] || [];
    const ctx = document.getElementById('chartGruposConvenio').getContext('2d');
    if (chartInstanceGruposConvenio) chartInstanceGruposConvenio.destroy();

    chartInstanceGruposConvenio = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: data.map(d => d.nome),
            datasets: [{
                label: 'Valor (R$)',
                data: data.map(d => d.valor),
                backgroundColor: ['#38bdf8', '#34d399', '#8b5cf6', '#fbbf24', '#94a3b8'],
                borderRadius: 5
            }]
        },
        options: {
            indexAxis: 'y',
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: { display: true, text: `Grupos: ${convenio}`, color: '#fff' },
                legend: { display: false }
            },
            scales: {
                x: { ticks: { callback: v => fmt(v) } }
            }
        }
    });

    let html = "";
    data.forEach(d => {
        html += `
        <tr>
            <td>${d.nome}</td>
            <td>${fmt(d.valor)}</td>
            <td>${d.qtd.toLocaleString('pt-BR')}</td>
            <td style="color:var(--blue); font-weight:bold">${d.p.toFixed(2)}%</td>
        </tr>`;
    });
    document.getElementById('grupos-convenio-tbody').innerHTML = html;
}
 
// ============================================================================ 
// SETUP TOGGLES 
// ============================================================================ 
function setupToggles() { 
    document.getElementById('toggle-2024').addEventListener('change', function () { 
        if (this.checked) { 
            document.body.classList.remove('hide-2024'); 
            mainChart.setDatasetVisibility(2, true); 
        } else { 
            document.body.classList.add('hide-2024'); 
            mainChart.setDatasetVisibility(2, false); 
        } 
        mainChart.update(); 
    }); 
}
// Variável global para podermos destruir/recriar o gráfico sem erros
let chartGrupos; 

function renderBreakdown() {
    // 1. Captura os filtros selecionados no HTML
    const ano = document.getElementById('select-ano-global').value; 
    const conv = document.getElementById('filtro-convenio-detalhe').value;
    const mesFiltro = document.getElementById('filtro-mes-detalhe').value;
    
    // 2. Procura os dados no teu dashboard_data.js
    const dadosAno = DASHBOARD_DATA.detalheConvenios[ano];
    if (!dadosAno || !dadosAno[conv]) return;

    const gruposDoConvenio = dadosAno[conv];
    let processados = [];

    // 3. Lógica de Soma: Se for "anual", soma o array; se for mês, pega o índice
    gruposDoConvenio.forEach(item => {
        let valorFinal = 0;
        if (mesFiltro === "anual") {
            valorFinal = item.mensal.reduce((a, b) => a + b, 0); // Soma JAN a DEZ
        } else {
            valorFinal = item.mensal[parseInt(mesFiltro)] || 0;
        }
        processados.push({ nome: item.grupo, valor: valorFinal });
    });

    // 4. Ordenar do maior para o menor
    processados.sort((a, b) => b.valor - a.valor);

    // 5. Atualizar a Tabela e o Gráfico
    atualizarTabelaBreakdown(processados);
    atualizarGraficoBreakdown(processados);
}

function atualizarTabelaBreakdown(dados) {
    const tbody = document.getElementById('grupos-convenio-tbody');
    const totalGeral = dados.reduce((acc, curr) => acc + curr.valor, 0);
    tbody.innerHTML = '';
    
    dados.forEach(g => {
        const perc = totalGeral > 0 ? ((g.valor / totalGeral) * 100).toFixed(2) : 0;
        tbody.innerHTML += `
            <tr>
                <td>${g.nome}</td>
                <td>${g.valor.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}</td>
                <td><span class="badge">${perc}%</span></td>
            </tr>
        `;
    });
}

function atualizarGraficoBreakdown(dados) {
    const ctx = document.getElementById('chartGruposConvenio').getContext('2d');
    if (chartGrupos) chartGrupos.destroy();

    chartGrupos = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: dados.map(d => d.nome),
            datasets: [{
                data: dados.map(d => d.valor),
                backgroundColor: ['#4f46e5', '#8b5cf6', '#38bdf8', '#10b981', '#f59e0b', '#f43f5e'],
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { position: 'bottom' }
            },
            cutout: '70%'
        }
    });
}