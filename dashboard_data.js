const MESES = ["JANEIRO", "FEVEREIRO", "MARÇO", "ABRIL", "MAIO", "JUNHO", "JULHO", "AGOSTO", "SETEMBRO", "OUTUBRO", "NOVEMBRO", "DEZEMBRO"]; 
 
const DADOS_2024 = [ 
    { faturamento: 3871449.40, glosa: 56576.74 }, 
    { faturamento: 3835891.91, glosa: 17869.90 }, 
    { faturamento: 2998816.54, glosa: 73213.03 }, 
    { faturamento: 3864003.91, glosa: 54898.87 }, 
    { faturamento: 3778220.88, glosa: 76002.27 }, 
    { faturamento: 3810112.76, glosa: 70331.32 }, 
    { faturamento: 3735327.95, glosa: 67740.57 }, 
    { faturamento: 3577852.97, glosa: 192640.19 }, 
    { faturamento: 3233048.25, glosa: 67353.41 }, 
    { faturamento: 3565912.71, glosa: 49699.53 }, 
    { faturamento: 1580141.80, glosa: 143541.95 }, 
    { faturamento: 801549.22, glosa: 141372.32 } 
]; 
 
const DADOS_2025 = [ 
    { faturamento: 3420101.44, taxa: 10.12, recuperado: 346114.27, glosa: 122197.09 }, 
    { faturamento: 2794331.59, taxa: 9.44, recuperado: 263784.90, glosa: 119685.86 }, 
    { faturamento: 2939564.42, taxa: 10.08, recuperado: 296308.09, glosa: 125659.10 }, 
    { faturamento: 3013069.36, taxa: 9.09, recuperado: 273888.00, glosa: 87547.12 }, 
    { faturamento: 3058174.55, taxa: 8.97, recuperado: 274318.26, glosa: 98966.31 }, 
    { faturamento: 3101615.44, taxa: 8.07, recuperado: 250300.37, glosa: 110552.72 }, 
    { faturamento: 3560435.50, taxa: 6.46, recuperado: 230004.13, glosa: 85856.77 }, 
    { faturamento: 3031032.01, taxa: 11.61, recuperado: 351902.82, glosa: 153134.09 }, 
    { faturamento: 3741724.05, taxa: 6.87, recuperado: 257056.44, glosa: 4444.29 }, 
    { faturamento: 4002721.40, taxa: 8.41, recuperado: 336628.87, glosa: 23300.44 }, 
    { faturamento: 3862589.20, taxa: 8.09, recuperado: 312483.47, glosa: 0.52 }, 
    { faturamento: 4013619.16, taxa: 8.40, recuperado: 337144.01, glosa: 0.00 } 
]; 
 
const DADOS_2026 = [ 
    { faturamento: 3222238.74, taxa: 0, recuperado: 0, glosa: 0 }, 
    { faturamento: 3562469.21, taxa: 0, recuperado: 0, glosa: 0 }, 
    { faturamento: 3228004.22, taxa: 0, recuperado: 0, glosa: 0 }, 
    { faturamento: 0, taxa: 0, recuperado: 0, glosa: 0 }, 
    { faturamento: 0, taxa: 0, recuperado: 0, glosa: 0 }, 
    { faturamento: 0, taxa: 0, recuperado: 0, glosa: 0 }, 
    { faturamento: 0, taxa: 0, recuperado: 0, glosa: 0 }, 
    { faturamento: 0, taxa: 0, recuperado: 0, glosa: 0 }, 
    { faturamento: 0, taxa: 0, recuperado: 0, glosa: 0 }, 
    { faturamento: 0, taxa: 0, recuperado: 0, glosa: 0 }, 
    { faturamento: 0, taxa: 0, recuperado: 0, glosa: 0 }, 
    { faturamento: 0, taxa: 0, recuperado: 0, glosa: 0 } 
]; 
 
const DATA_SETOR = {"setores_geral":[{"SETORES":"Auditoria","TOTAL":19606.940000000002,"TOTAL GERAL %":0.021072257138081023},{"SETORES":"Ambulatório Especialidades","TOTAL":4565.43,"TOTAL GERAL %":0.004906625659379243},{"SETORES":"Agência transfusional","TOTAL":290.82,"TOTAL GERAL %":0.00031255432111776355},{"SETORES":"Cadastro de regras","TOTAL":291307.25,"TOTAL GERAL %":0.3130779855595648},{"SETORES":"CAF","TOTAL":3169.430000000001,"TOTAL GERAL %":0.003406296134998534},{"SETORES":"CDI","TOTAL":9828.51,"TOTAL GERAL %":0.010563039923833128},{"SETORES":"Central de Guias","TOTAL":10003.810000000001,"TOTAL GERAL %":0.010751440902073773},{"SETORES":"Central de fichas","TOTAL":0.0,"TOTAL GERAL %":0.0},{"SETORES":"Centro Cirúrgico","TOTAL":8296.630000000001,"TOTAL GERAL %":0.008916675459787053},{"SETORES":"CCIH","TOTAL":2620.12,"TOTAL GERAL %":0.002815933662908585},{"SETORES":"Contas Hospitalares","TOTAL":0.0,"TOTAL GERAL %":0.0},{"SETORES":"Comercial ","TOTAL":1868.4099999999999,"TOTAL GERAL %":0.00200804490447576},{"SETORES":"Credenciamento ","TOTAL":217501.88999999998,"TOTAL GERAL %":0.23375681029771156},{"SETORES":"Compras/ Almoxarifado","TOTAL":9.08,"TOTAL GERAL %":9.758590316172523e-06},{"SETORES":"Direção Técnica","TOTAL":115876.59999999999,"TOTAL GERAL %":0.12453659324129922},{"SETORES":"Enfermagem CDI","TOTAL":3020.8700000000003,"TOTAL GERAL %":0.003246633560398248},{"SETORES":"Enfermafem Covid","TOTAL":190.75,"TOTAL GERAL %":0.00020500562806276528},{"SETORES":"Enfermagem P.A","TOTAL":4500.200000000001,"TOTAL GERAL %":0.004836520720356783},{"SETORES":"Enfermagem unidade","TOTAL":11439.98,"TOTAL GERAL %":0.012294942515991997},{"SETORES":"Farmacia","TOTAL":0.0,"TOTAL GERAL %":0.0},{"SETORES":"Faturamento","TOTAL":107917.91,"TOTAL GERAL %":0.11598311359775086},{"SETORES":"Fisioterapia","TOTAL":3673.5,"TOTAL GERAL %":0.003948037613046229},{"SETORES":"Hemodiálise","TOTAL":13.39,"TOTAL GERAL %":1.4390696512505516e-05},{"SETORES":"Hemodinamica ","TOTAL":11090.56,"TOTAL GERAL %":0.011919408746357966},{"SETORES":"Laboratório","TOTAL":8092.000000000002,"TOTAL GERAL %":0.008696752515249788},{"SETORES":"Laura Vicuña","TOTAL":4522.91,"TOTAL GERAL %":0.004860927943493377},{"SETORES":"Oncologia","TOTAL":9609.76,"TOTAL GERAL %":0.10327941726513443},{"SETORES":"PA - Convênio","TOTAL":13153.220000000001,"TOTAL GERAL %":0.014136220850053607},{"SETORES":"PA - Maternidade","TOTAL":339.53,"TOTAL GERAL %":0.00036490464427864057},{"SETORES":"Recepção","TOTAL":63621.93,"TOTAL GERAL %":0.06837669052799626},{"SETORES":"Recurso de Glosa","TOTAL":0.0,"TOTAL GERAL %":0.0},{"SETORES":"Tecnologia da Informação","TOTAL":0.0,"TOTAL GERAL %":0.0},{"SETORES":"Unidade Genny","TOTAL":0.0,"TOTAL GERAL %":0.0},{"SETORES":"UTI COVID","TOTAL":0.0,"TOTAL GERAL %":0.0},{"SETORES":"UTI Geral","TOTAL":4330.83,"TOTAL GERAL %":0.004654492918390908}],"heatmap":{"Agência transfusional":[46.54,0,0,0,0,0,0,0,0,0,0,0],"Ambulatório Especialidades":[126.83,482.05,281.03000000000003,2206.3,248.07,746.57,516.24,100.32000000000001,17.85,0,0,0],"Angência Transfusional":[46.54,0,0,0,0,0,0,0,0,0,0,0],"Auditoria":[3319.84,5596.54,457.09999999999997,3245.86,2120.3,2415.82,1393.53,1057.95,0,0,0,0],"CAF":[36.96,564.3100000000001,1346.4899999999998,810.14,11.440000000000001,360.19,37.17,3.04,0,0,0,0],"CCIH":[0,0,2620.12,0,0,0,0,0,0,0,0,0],"CDI":[1474.1200000000001,970.02,1219.93,1195.99,574.37,865.91,2790.02,2053.9,0,282.17,0,0],"Cadastro Médico":[44480.76,42358.48,24277.68,17814.9,38094.03999999999,25951.34,3032.54,21369.9,122.25,0,0,0],"Cadastro de regras":[48618.42,58699.969999999994,65082.16,25064.379999999997,21327.44,14495.77,31756.149999999998,21094.91,2066.35,7795.090000000001,0.52,0],"Central de Fichas":[0,0,0,0,0,0,0,0,0,0,0,0],"Central de Guias":[83.3,64.36,163.31,624.45,0,0,660,8415.69,0,0,0,0],"Central de fichas":[0,0,0,0,0,0,0,0,0,0,0,0],"Centro Cirúrgico":[724.58,7.67,185.16,358.27000000000004,1.4,0,875.89,6558.21,0,0,0,0],"Comercial":[370.82,18.56,263.65,53.2,0,0,0,374.9,0,0,0,0],"Compras/ Almoxarifado":[0,0,0,0,0,0,0,0,0,0,0,0],"Compras/ almoxarifado":[0,0,0,0,0,0,0,0,0,0,0,0],"Contas Hospitalares":[0,0,0,0,0,0,0,0,0,0,0,0],"Credenciamento":[44480.76,42358.48,24277.68,17814.9,38094.03999999999,25951.34,3032.54,21369.9,122.25,0,0,0],"Direção Técnica":[5749.99,1145,6611.8099999999995,9351.93,15068.31,21328.85,8444.26,47979.28,197.17,0,0,0],"Enfermagem CDI":[104.99,0,275.45,206.95,26.259999999999998,19.86,914.43,1548.93,0,0,0,0],"Enfermagem Covid":[0,0,0,0,0,0,0,0,0,0,0,0],"Enfermagem P.A":[172.17000000000002,24.96,3296.1899999999996,1205.54,38.099999999999994,58.8,16.46,308.35,232.23,0,0,0],"Enfermagem Unid.":[457.09999999999997,302.95,1143.03,487.26000000000005,37.52,0,825.68,8265.84,0,0,0,0],"Farmacia":[0,0,0,0,0,0,0,0,0,0,0,0],"Faturamento":[10107.130000000001,3903.5699999999997,7657.299999999999,5634.39,10137.26,35177.18,28211.019999999997,6234.4,0,2290.7599999999998,0,0],"Fisioterapia":[15.16,0,0,0,0,0,0,3658.34,0,0,0,0],"Hemodiálise":[9.08,8.8,0,0,0,4.59,0,0,0,0,0,0],"Hemodinamica ":[1207.7,671.48,146.12,6506.59,280,0,0,62.99,0,2215.68,0,0],"Laboratório":[509.79,0,3035.2000000000003,1237.11,1669.13,0,392.49,0,1248.2800000000002,0,0,0],"Laura Vicuña":[0,37.74,0,0,53.760000000000005,0,0,4158.62,0,0,0,0],"Oncologia":[0,270.97,409.28,124.45,0,0,0,0,0,0,0,0],"PA - Convênio":[1045.14,1678,111.15,7462.89,19.83,3334.7999999999997,10.11,672.42,411.38,0,0,0],"PA - Maternidade":[0,0,0,190.75,0,0,0,0,148.78,0,0,0],"Recepção":[3263.88,2880.4300000000003,5460.08,3765.77,9204.04,5793.04,5980.78,16557.17,0,10716.74,0,0],"Recurso de Glosa":[0,0,0,0,0,0,0,0,0,0,0,0],"Tecnologia da Informação":[0,0,0,0,0,0,0,0,0,0,0,0],"UTI COVID":[0,0,0,0,0,0,0,0,0,0,0,0],"UTI Geral":[272.79,0,1616.8600000000001,0,55.04,0,0,2658.93,0,0,0,0],"Unidade Genny":[0,0,0,0,0,0,0,0,0,0,0,0]},"months":["JAN.25","FEV.25","MAR.25","ABR.25","MAI.25","JUN.25","JUL.25","AGO.25","SET.25","OUT.25","NOV.25","DEZ.25"],"all_setores":["Agência transfusional","Ambulatório Especialidades","Angência Transfusional","Auditoria","CAF","CCIH","CDI","Cadastro Médico","Cadastro de regras","Central de Fichas","Central de Guias","Central de fichas","Centro Cirúrgico","Comercial","Compras/ Almoxarifado","Compras/ almoxarifado","Contas Hospitalares","Credenciamento","Direção Técnica","Enfermagem CDI","Enfermagem Covid","Enfermagem P.A","Enfermagem Unid.","Farmacia","Faturamento","Fisioterapia","Hemodiálise","Hemodinamica ","Laboratório","Laura Vicuña","Oncologia","PA - Convênio","PA - Maternidade","Recepção","Recurso de Glosa","Tecnologia da Informação","UTI COVID","UTI Geral","Unidade Genny"]}; 
 
const DATA_GRUPOS_2025 = { 
    labels: ["JAN", "FEV", "MAR", "ABR", "MAI", "JUN", "JUL", "AGO", "SET", "OUT", "NOV", "DEZ"], 
    grupos: [ 
        { 
            "nome": "PACOTES ESPECIAIS", 
            "valores": [698713.81, 566431.13, 752814.33, 780132.22, 828564.33, 726564.33, 835431.21, 622143.22, 895642.11, 907143.22, 781432.11, 925143.21], 
            "quantidades": [2863, 2163, 2726, 2779, 3171, 2651, 2778, 2036, 3298, 2867, 2634, 2769], 
            "porcentagens": [20.38, 20.27, 25.61, 25.89, 27.09, 23.43, 23.46, 20.52, 23.94, 22.66, 20.23, 23.05], 
            "cor": "#38bdf8" 
        }, 
        { 
            "nome": "HONORARIOS MEDICOS", 
            "valores": [624467.45, 536318.47, 565431.12, 607412.33, 671562.33, 639862.45, 725643.22, 635431.21, 793842.33, 739432.11, 685942.33, 705612.33], 
            "quantidades": [5947, 4849, 5750, 5952, 6127, 5929, 7031, 4913, 6873, 6795, 6525, 5916], 
            "porcentagens": [18.21, 19.19, 19.24, 20.16, 21.96, 20.63, 20.38, 20.96, 21.22, 18.47, 17.76, 17.58], 
            "cor": "#34d399" 
        }, 
        { 
            "nome": "DIARIAS", 
            "valores": [593717.15, 523825.1, 351433.01, 479133.45, 390143.22, 475643.21, 586432.11, 438431.21, 569123.45, 765123.45, 728123.45, 475432.11], 
            "quantidades": [811, 688, 693, 708, 592, 754, 635, 710, 767, 1008, 965, 754], 
            "porcentagens": [17.31, 18.75, 11.96, 15.9, 12.76, 15.34, 16.47, 14.46, 15.21, 19.11, 18.85, 11.85], 
            "cor": "#8b5cf6" 
        }, 
        { 
            "nome": "MATERIAIS ESPECIAIS (OPME)", 
            "valores": [366185.08, 72543.82, 45318.17, 110643.21, 103643.21, 53643.12, 38812.33, 51342.33, 168123.45, 80812.33, 103431.21, 328412.33], 
            "quantidades": [127, 92, 101, 157, 151, 66, 56, 90, 176, 141, 143, 236], 
            "porcentagens": [10.68, 2.6, 1.54, 3.67, 3.39, 1.73, 1.09, 1.69, 4.49, 2.02, 2.68, 8.18], 
            "cor": "#fbbf24" 
        }, 
        { 
            "nome": "TAXAS", 
            "valores": [346850.77, 263884.21, 296317.82, 273942.33, 274382.45, 250317.22, 230132.33, 351942.33, 257143.22, 336712.33, 312413.45, 337213.45], 
            "quantidades": [1138, 1103, 1200, 1068, 1112, 1356, 1169, 1330, 1221, 1569, 1443, 1478], 
            "porcentagens": [10.12, 9.44, 10.08, 9.09, 8.97, 8.07, 6.46, 11.61, 6.87, 8.41, 8.09, 8.4], 
            "cor": "#f87171" 
        }, 
        { 
            "nome": "EXAMES E DIAGNOSTICOS", 
            "valores": [318237.98, 371902.13, 423812.21, 382564.33, 402133.45, 464562.33, 448123.45, 499132.33, 508432.11, 532431.21, 526431.21, 478643.21], 
            "quantidades": [6773, 6869, 6585, 7000, 6717, 10840, 7600, 8671, 9711, 11340, 10452, 8298], 
            "porcentagens": [9.28, 13.31, 14.42, 12.69, 13.15, 14.98, 12.58, 16.47, 13.59, 13.3, 13.63, 11.93], 
            "cor": "#94a3b8" 
        }, 
        { 
            "nome": "MEDICAMENTOS", 
            "valores": [281566.21, 273062.14, 268433.47, 202517.36, 207643.21, 233564.33, 304862.33, 224612.33, 271233.12, 335123.45, 342613.45, 443812.33], 
            "quantidades": [32967, 26986, 27424, 29964, 39902, 42896, 37994, 34618, 51346, 62063, 49016, 30480], 
            "porcentagens": [8.21, 9.77, 9.13, 6.72, 6.79, 7.53, 8.56, 7.41, 7.25, 8.37, 8.87, 11.06], 
            "cor": "#6366f1" 
        }, 
        { 
            "nome": "MATERIAIS", 
            "valores": [143717.36, 150643.58, 211043.91, 154862.33, 149233.12, 184962.33, 263842.11, 168432.11, 199431.21, 202613.45, 256431.21, 288123.45], 
            "quantidades": [28461, 19904, 22504, 19138, 18651, 22562, 26911, 23876, 40196, 37910, 34238, 27778], 
            "porcentagens": [4.19, 5.39, 7.18, 5.14, 4.88, 5.96, 7.41, 5.56, 5.33, 5.06, 6.64, 7.18], 
            "cor": "#ec4899" 
        }, 
        { 
            "nome": "GASES MEDICINAIS", 
            "valores": [56143.53, 35720.91, 24860.3, 21863.79, 31210.33, 72343.21, 128143.22, 40123.45, 78643.22, 104123.45, 124812.33, 31712.33], 
            "quantidades": [4705, 4390, 4265, 3847, 4494, 4682, 5425, 5205, 4389, 6097, 6088, 3304], 
            "porcentagens": [1.64, 1.28, 0.84, 0.73, 1.02, 2.33, 3.6, 1.32, 2.1, 2.6, 3.23, 0.79], 
            "cor": "#14b8a6" 
        } 
    ] 
}; 
 
const DATA_GRUPOS_2026 = { 
    labels: ["JAN", "FEV", "MAR", "ABR", "MAI", "JUN", "JUL", "AGO", "SET", "OUT", "NOV", "DEZ"], 
    grupos: [ 
        { "nome": "PACOTES ESPECIAIS",
             "valores": [641786.90,765078.90,864289.09,0,0,0,0,0,0,0,0,0], 
            "quantidades": [2217,2266,2968,0,0,0,0,0,0,0,0,0], 
            "porcentagens": [21.67,21.48,26.77,0,0,0,0,0,0,0,0,0], "cor": "#38bdf8" }, 

        { "nome": "HONORARIOS MEDICOS", 
            "valores": [611489.74,625493.32,594174.98,0,0,0,0,0,0,0,0,0],
            "quantidades": [4655,4728,5660,0,0,0,0,0,0,0,0,0], 
            "porcentagens": [20.64,17.56,18.41,0,0,0,0,0,0,0,0,0], "cor": "#34d399" }, 

        { "nome": "DIARIAS",
             "valores": [365570.02,344056.16,411008.77,0,0,0,0,0,0,0,0,0], 
             "quantidades": [656,555,680,0,0,0,0,0,0,0,0,0], 
             "porcentagens": [12.34,9.66,12.73,0,0,0,0,0,0,0,0,0], "cor": "#8b5cf6" },

        { "nome": "MATERIAIS ESPECIAIS (OPME)", 
            "valores": [152011.71,432649.61,90792.39,0,0,0,0,0,0,0,0,0],
            "quantidades": [170,230,165,0,0,0,0,0,0,0,0,0],
            "porcentagens": [5.13,12.14,2.81,0,0,0,0,0,0,0,0,0], "cor": "#fbbf24" }, 

        { "nome": "TAXAS",
            "valores": [249902.05,334471.07,310818.06,0,0,0,0,0,0,0,0,0],
            "quantidades": [1171,1177,1397,0,0,0,0,0,0,0,0,0],
            "porcentagens": [8.44,9.39,9.63,0,0,0,0,0,0,0,0,0], "cor": "#f87171" }, 

        { "nome": "EXAMES E DIAGNOSTICOS", 
            "valores": [458053.49,585060.90,541109.77,0,0,0,0,0,0,0,0,0],
            "quantidades": [11332,9210,11115,0,0,0,0,0,0,0,0,0],
            "porcentagens": [15.46,16.42,16.76,0,0,0,0,0,0,0,0,0], "cor": "#94a3b8" },

        { "nome": "MEDICAMENTOS",
            "valores": [281730.19,243192.74,216670.89,0,0,0,0,0,0,0,0,0],
            "quantidades": [37191,25232,30728,0,0,0,0,0,0,0,0,0],
            "porcentagens": [9.51,6.83,6.71,0,0,0,0,0,0,0,0,0], "cor": "#6366f1" }, 

        { "nome": "MATERIAIS", 
            "valores": [177760.41,200995.18,174696.02,0,0,0,0,0,0,0,0,0], 
            "quantidades": [23670,23959,23789,0,0,0,0,0,0,0,0,0],
            "porcentagens": [6,5.64,5.41,0,0,0,0,0,0,0,0,0], "cor": "#ec4899" },
             
        { "nome": "GASES MEDICINAIS",
            "valores": [23984.67,31471.33,24435.25,0,0,0,0,0,0,0,0,0],
            "quantidades": [2363,3852,4436,0,0,0,0,0,0,0,0,0], 
            "porcentagens": [0.81,0.88,0.76,0,0,0,0,0,0,0,0,0], "cor": "#14b8a6" } 
    ] 
}; 
 
const DATA_CONVENIO = { 
    "2026": [ 
        { convenio: "UNIMED", faturamento: 1250450.30, glosa: 15430.20 }, 
        { convenio: "BRADESCO", faturamento: 840320.15, glosa: 8210.45 }, 
        { convenio: "SULAMERICA", faturamento: 450120.40, glosa: 4320.10 }, 
        { convenio: "CASSI", faturamento: 320560.10, glosa: 3100.25 }, 
        { convenio: "OUTROS", faturamento: 360787.79, glosa: 2540.35 } 
    ], 
    "2025": [ 
        { convenio: "UNIMED", faturamento: 11204500.30, glosa: 250430.20 }, 
        { convenio: "BRADESCO", faturamento: 9403200.15, glosa: 180210.45 }, 
        { convenio: "SULAMERICA", faturamento: 6501200.40, glosa: 140320.10 }, 
        { convenio: "CASSI", faturamento: 5205600.10, glosa: 90100.25 }, 
        { convenio: "OUTROS", faturamento: 7826224.21, glosa: 105430.35 } 
    ] 
}; 

const DATA_GRUPOS_POR_CONVENIO = {
    "UNIMED": [
        { nome: "PACOTES ESPECIAIS", valor: 450000.00, qtd: 1200, p: 36.00 },
        { nome: "HONORARIOS MEDICOS", valor: 280000.00, qtd: 2500, p: 22.40 },
        { nome: "DIARIAS", valor: 200000.00, qtd: 400, p: 16.00 },
        { nome: "MATERIAIS", valor: 150000.00, qtd: 15000, p: 12.00 },
        { nome: "OUTROS", valor: 170450.30, qtd: 8000, p: 13.60 }
    ],
    "BRADESCO": [
        { nome: "PACOTES ESPECIAIS", valor: 300000.00, qtd: 800, p: 35.70 },
        { nome: "HONORARIOS MEDICOS", valor: 210000.00, qtd: 1800, p: 25.00 },
        { nome: "DIARIAS", valor: 120000.00, qtd: 250, p: 14.30 },
        { nome: "EXAMES", valor: 100000.00, qtd: 3000, p: 11.90 },
        { nome: "OUTROS", valor: 110320.15, qtd: 5000, p: 13.10 }
    ],
    "SULAMERICA": [
        { nome: "PACOTES ESPECIAIS", valor: 180000.00, qtd: 450, p: 40.00 },
        { nome: "HONORARIOS MEDICOS", valor: 120000.00, qtd: 1000, p: 26.60 },
        { nome: "DIARIAS", valor: 70000.00, qtd: 150, p: 15.50 },
        { nome: "MATERIAIS", valor: 40000.00, qtd: 4000, p: 8.90 },
        { nome: "OUTROS", valor: 40120.40, qtd: 2000, p: 9.00 }
    ],
    "CASSI": [
        { nome: "PACOTES ESPECIAIS", valor: 110000.00, qtd: 300, p: 34.30 },
        { nome: "HONORARIOS MEDICOS", valor: 90000.00, qtd: 800, p: 28.00 },
        { nome: "DIARIAS", valor: 50000.00, qtd: 100, p: 15.60 },
        { nome: "MEDICAMENTOS", valor: 40000.00, qtd: 6000, p: 12.50 },
        { nome: "OUTROS", valor: 30560.10, qtd: 1500, p: 9.60 }
    ],
    "OUTROS": [
        { nome: "PACOTES ESPECIAIS", valor: 120000.00, qtd: 400, p: 33.30 },
        { nome: "HONORARIOS MEDICOS", valor: 80000.00, qtd: 900, p: 22.20 },
        { nome: "DIARIAS", valor: 60000.00, qtd: 150, p: 16.60 },
        { nome: "EXAMES", valor: 50000.00, qtd: 2000, p: 13.80 },
        { nome: "OUTROS", valor: 50787.79, qtd: 3000, p: 14.10 }
    ]
};
 
const DADOS = MESES.map((mes, i) => [ 
    mes, 
    DADOS_2024[i].faturamento, DADOS_2024[i].glosa, 
    DADOS_2025[i].faturamento, DADOS_2025[i].taxa, DADOS_2025[i].recuperado, DADOS_2025[i].glosa, 
    DADOS_2026[i].faturamento, DADOS_2026[i].taxa, DADOS_2026[i].recuperado, DADOS_2026[i].glosa 
]); 
