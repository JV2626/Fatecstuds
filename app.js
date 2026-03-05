let chartInstancia = null;
let pomoTempoRestante = 25 * 60; 
let pomoIntervalo = null;
let pomoRodando = false;

// GABARITOS REAIS EXTRAÍDOS DOS PDFS OFICIAIS DA FATEC
const gabaritosOficiais = {
    '2026.1': ['C','A','B','C','E','C','A','A','E','B','E','D','C','B','E','E','B','B','E','D','B','A','C','E','C','A','B','D','E','D','D','A','B','C','C','A','E','D','E','E','B','C','D','C','D','A','D','C','A','E','E','E','A','A','A','D','B','D','A','B'],
    '2025.2': ['C','E','E','D','D','D','E','C','C','E','A','A','D','C','A','A','C','D','C','E','C','E','C','B','D','C','E','A','D','E','B','B','A','D','A','D','E','E','A','B','B','D','B','E','B','D','C','C','E','C','D','D','E','B','E','D','A','E','B','D','A','E','C','E'],
    '2025.1': ['C','E','D','B','A','C','D','B','E','A','B','A','D','E','C','B','D','E','C','A','D','B','E','C','A','C','D','B','A','E','D','E','B','A','C','A','D','E','B','C','D','E','B','C','A','A','C','B','E','C','A','D','B','D']
};

let provaAberta = '';

// ==========================================
// BANCO DE DADOS: CRONOGRAMA DINÂMICO
// ==========================================
const dbSemanas = {
    "1": [
        { dia: "SEG", class: "", label: "Matemática", title: "Operações Básicas & Frações", desc: "MMC, MDC, Regra de Três Simples.", search: "matematica+basica+fracoes+regra+de+tres+fatec" },
        { dia: "TER", class: "highlight", label: "Linguagens", title: "Interpretação Base", desc: "Charges, tirinhas e leitura crítica.", search: "interpretacao+de+textos+charges+fatec" },
        { dia: "QUA", class: "", label: "Natureza", title: "Eletrodinâmica I", desc: "Fórmula de Potência (P=V.i).", search: "eletrodinamica+potencia+eletrica+fatec" },
        { dia: "QUI", class: "", label: "Humanas", title: "Era Vargas", desc: "Industrialização e CLT no Brasil.", search: "era+vargas+resumo+fatec" },
        { dia: "SEX", class: "", label: "Revisão", title: "Fechamento da Semana", desc: "Refazer erros de exatas e praticar.", search: "como+fazer+revisao+estudos" },
        { dia: "SAB", class: "free", label: "Redação", title: "Estrutura FATEC", desc: "Escrever 1 Redação. Noite com a Vitória!", search: "redacao+dissertativa+argumentativa+fatec" },
        { dia: "DOM", class: "simulation", label: "Simulado", title: "Treino Prático", desc: "Resolver 30 questões de provas anteriores.", search: "" }
    ],
    "2": [
        { dia: "SEG", class: "", label: "Matemática", title: "Porcentagem & Juros", desc: "Juros simples, descontos e aumentos.", search: "porcentagem+e+juros+simples+fatec" },
        { dia: "TER", class: "highlight", label: "Linguagens", title: "Conectivos (Coesão)", desc: "Oposição (Mas) e Concessão (Embora).", search: "conectivos+de+oposicao+e+concessao" },
        { dia: "QUA", class: "", label: "Natureza", title: "Ecologia Básica", desc: "Cadeias alimentares e poluição.", search: "ecologia+cadeia+alimentar+fatec" },
        { dia: "QUI", class: "", label: "Lógica", title: "Tabela Verdade", desc: "Operadores AND, OR, NOT.", search: "raciocinio+logico+tabela+verdade" },
        { dia: "SEX", class: "", label: "Revisão", title: "Correção de Erros", desc: "Focar em entender o porquê errou Lógica.", search: "" },
        { dia: "SAB", class: "free", label: "Redação", title: "Uso de Repertório", desc: "Treinar citações. Noite com a Vitória!", search: "repertorio+sociocultural+redacao" },
        { dia: "DOM", class: "simulation", label: "Simulado", title: "Simulado Real", desc: "Prova 2025.1 Completa (4h cronometradas).", search: "" }
    ],
    "3": [
        { dia: "SEG", class: "", label: "Matemática", title: "Leitura de Gráficos", desc: "Interpretação de tabelas de dados.", search: "interpretacao+de+graficos+e+tabelas+matematica" },
        { dia: "TER", class: "highlight", label: "Inglês", title: "Inglês Instrumental", desc: "Técnica de Scanning e falsos cognatos.", search: "ingles+instrumental+scanning+fatec" },
        { dia: "QUA", class: "", label: "Natureza", title: "Separação de Misturas", desc: "Filtração, decantação e destilação.", search: "separacao+de+misturas+quimica" },
        { dia: "QUI", class: "", label: "Humanas", title: "Ditadura Militar", desc: "Milagre econômico e censura.", search: "ditadura+militar+no+brasil+resumo" },
        { dia: "SEX", class: "", label: "Revisão", title: "Matemática Aplicada", desc: "Lista de 15 questões de Gráficos.", search: "" },
        { dia: "SAB", class: "free", label: "Redação", title: "Desenvolvimento", desc: "Treino de argumentação. Date night!", search: "como+fazer+desenvolvimento+redacao" },
        { dia: "DOM", class: "simulation", label: "Simulado", title: "Foco Exatas", desc: "Refazer só Matemática e Natureza de 2026.1.", search: "" }
    ],
    "4": [
        { dia: "SEG", class: "", label: "Matemática", title: "Funções 1º e 2º Grau", desc: "Raízes de Bhaskara e análise de parábolas.", search: "funcoes+do+1+e+2+grau+resumo" },
        { dia: "TER", class: "highlight", label: "Linguagens", title: "Figuras de Linguagem", desc: "Metáfora, Paradoxo e Ironia.", search: "figuras+de+linguagem+mais+cobradas" },
        { dia: "QUA", class: "", label: "Natureza", title: "Cinemática (Física)", desc: "Velocidade média e movimento uniforme.", search: "cinematica+velocidade+media+fisica" },
        { dia: "QUI", class: "", label: "Humanas", title: "Urbanização e Energia", desc: "Favelização e Matrizes Renováveis.", search: "urbanizacao+e+matrizes+energeticas+geografia" },
        { dia: "SEX", class: "", label: "Revisão", title: "Prática Híbrida", desc: "10 questões de Função e 5 de Física.", search: "" },
        { dia: "SAB", class: "free", label: "Redação", title: "Conclusão e Proposta", desc: "Como fechar a redação. Descanso merecido.", search: "como+fazer+conclusao+redacao" },
        { dia: "DOM", class: "simulation", label: "Simulado", title: "Simulado Real", desc: "Prova 2025.2 Completa (4h cronometradas).", search: "" }
    ],
    "5": [
        { dia: "SEG", class: "", label: "Matemática", title: "Progressões (PA/PG)", desc: "Fórmulas do termo geral e soma.", search: "progressao+aritmetica+e+geometrica" },
        { dia: "TER", class: "highlight", label: "Inglês", title: "Vocabulário Tech", desc: "Termos de TI e pronomes interrogativos.", search: "vocabulario+de+ingles+tecnologia" },
        { dia: "QUA", class: "", label: "Natureza", title: "Genética Básica", desc: "Sistema ABO (Sangue) e 1ª Lei de Mendel.", search: "genetica+sistema+abo+e+fator+rh" },
        { dia: "QUI", class: "", label: "Humanas", title: "Globalização", desc: "Blocos Econômicos (Mercosul, UE).", search: "blocos+economicos+e+globalizacao" },
        { dia: "SEX", class: "", label: "Revisão", title: "Retomada", desc: "Rever Lógica e Conectivos.", search: "" },
        { dia: "SAB", class: "free", label: "Redação", title: "Tema Tecnológico", desc: "Redação sobre Inteligência Artificial.", search: "redacao+sobre+inteligencia+artificial" },
        { dia: "DOM", class: "simulation", label: "Simulado", title: "Desempenho", desc: "Resolver 40 questões avulsas no Tracker.", search: "" }
    ],
    "6": [
        { dia: "SEG", class: "", label: "Matemática", title: "Geometria Plana", desc: "Área de triângulos, retângulos e círculos.", search: "geometria+plana+areas" },
        { dia: "TER", class: "highlight", label: "Linguagens", title: "Tipologia Textual", desc: "Narrativo, descritivo, dissertativo.", search: "tipos+de+textos+redacao" },
        { dia: "QUA", class: "", label: "Natureza", title: "Estequiometria", desc: "Cálculo de massas e reações químicas.", search: "estequiometria+basica+quimica" },
        { dia: "QUI", class: "", label: "Lógica", title: "Negação Lógica", desc: "Leis de Morgan (Negação do E / OU).", search: "leis+de+morgan+raciocinio+logico" },
        { dia: "SEX", class: "", label: "Revisão", title: "Geometria + Lógica", desc: "Bateria pesada de exercícios práticos.", search: "" },
        { dia: "SAB", class: "free", label: "Redação", title: "Tema Ambiental", desc: "Redação sobre Impactos Climáticos.", search: "redacao+meio+ambiente+e+sustentabilidade" },
        { dia: "DOM", class: "simulation", label: "Simulado", title: "Prova Anterior", desc: "Refazer a Prova 2026.1 para ver evolução.", search: "" }
    ],
    "7": [
        { dia: "SEG", class: "", label: "Revisão", title: "Varredura Matemática", desc: "Refazer todos os erros de Matemática salvos.", search: "matematica+revisao+fatec" },
        { dia: "TER", class: "highlight", label: "Revisão", title: "Varredura Linguagens", desc: "Leitura de 10 charges e textos longos.", search: "" },
        { dia: "QUA", class: "", label: "Revisão", title: "Fórmulas de Natureza", desc: "Decorar P=V.i e revisar Termologia.", search: "fisica+formulas+resumo" },
        { dia: "QUI", class: "", label: "Revisão", title: "Varredura Humanas", desc: "Leitura de resumos de História e Geo.", search: "" },
        { dia: "SEX", class: "", label: "Descanso", title: "Descompressão", desc: "Zero estudo pesado. Organizar a mente.", search: "" },
        { dia: "SAB", class: "free", label: "Redação", title: "Esqueleto Fixo", desc: "Decorar seu modelo de redação.", search: "" },
        { dia: "DOM", class: "simulation", label: "Simulado", title: "Simulação de Batalha", desc: "Último simulado antes da reta final.", search: "" }
    ],
    "8": [
        { dia: "SEG", class: "simulation", label: "Reta Final", title: "Provas Antigas", desc: "Resolver 20 questões avulsas misturadas.", search: "" },
        { dia: "TER", class: "simulation", label: "Reta Final", title: "Provas Antigas", desc: "Foco total na leitura atenta (Inglês/Port).", search: "" },
        { dia: "QUA", class: "simulation", label: "Reta Final", title: "Provas Antigas", desc: "Caçar questões de gráficos e eletrodinâmica.", search: "" },
        { dia: "QUI", class: "simulation", label: "Reta Final", title: "Revisão de Erros", desc: "Olhar o Tracker e estudar só os erros.", search: "" },
        { dia: "SEX", class: "highlight", label: "Reta Final", title: "Revisão Leve", desc: "Apenas vídeos curtos e descanso.", search: "" },
        { dia: "SAB", class: "free", label: "VÉSPERA", title: "Descanso Absoluto", desc: "Mente limpa. Separar caneta, doc e água.", search: "" },
        { dia: "DOM", class: "simulation", label: "O GRANDE DIA", title: "PROVA FATEC", desc: "Destruir o vestibular e garantir a vaga!", search: "" }
    ]
};

document.addEventListener("DOMContentLoaded", () => {
    carregarChecklist();
    renderizarSimulados();
    renderizarRedacoes();
    iniciarContagemRegressiva();
    atualizarDisplayPomodoro();
    carregarSemanaSalva();
});

// ==========================================
// MÓDULO: CRONOGRAMA DINÂMICO
// ==========================================
function carregarSemanaSalva() {
    const semanaSalva = localStorage.getItem('fatec_semana_atual') || "1";
    document.getElementById('semana-select').value = semanaSalva;
    renderizarCronograma(semanaSalva);
}

function mudarSemana() {
    const semanaSelecionada = document.getElementById('semana-select').value;
    localStorage.setItem('fatec_semana_atual', semanaSelecionada);
    renderizarCronograma(semanaSelecionada);
}

function renderizarCronograma(semana) {
    const container = document.getElementById('cronograma-container');
    container.innerHTML = ""; 
    
    const dadosSemana = dbSemanas[semana];
    
    dadosSemana.forEach(dia => {
        const btnYoutube = dia.search 
            ? `<a href="https://www.youtube.com/results?search_query=${dia.search}" target="_blank" class="btn-yt"><i class="ph ph-youtube-logo"></i> Vídeo</a>` 
            : ``;

        let corFundo = "var(--dark)";
        if(dia.class === "free") corFundo = "#10b981";
        if(dia.class === "simulation") corFundo = "#b11116";
        if(dia.class === "highlight") corFundo = "#3b82f6";

        const cardHTML = `
            <div class="day-card ${dia.class}">
                <div class="day-label" style="background: ${corFundo};">${dia.dia} - ${dia.label}</div>
                <div class="day-content">
                    <h4>${dia.title}</h4>
                    <p>${dia.desc}</p>
                    ${btnYoutube}
                </div>
            </div>
        `;
        container.innerHTML += cardHTML;
    });
}

// ==========================================
// MÓDULO: PDF FOCUS & GABARITO
// ==========================================
function carregarProva(arquivo, ano) {
    provaAberta = ano;
    document.getElementById('seletor-provas').classList.add('hidden');
    document.getElementById('pdf-viewer-pro').classList.remove('hidden');
    document.getElementById('pdf-frame').src = arquivo;
    document.getElementById('pdf-title-display').innerText = `Fatec ${ano}`;
    document.getElementById('side-gabarito').classList.add('hidden');
}

function fecharProva() {
    document.getElementById('pdf-viewer-pro').classList.add('hidden');
    document.getElementById('seletor-provas').classList.remove('hidden');
    document.getElementById('pdf-frame').src = "";
}

function toggleGabarito() {
    const painel = document.getElementById('side-gabarito');
    painel.classList.toggle('hidden');

    if(!painel.classList.contains('hidden')) {
        const grid = document.getElementById('gab-list-display');
        grid.innerHTML = '';
        const respostas = gabaritosOficiais[provaAberta];
        
        respostas.forEach((letra, i) => {
            const item = document.createElement('div');
            item.className = 'gab-item';
            item.innerHTML = `${i+1}: <span>${letra}</span>`;
            grid.appendChild(item);
        });
    }
}

// ==========================================
// MÓDULO: POMODORO TIMER
// ==========================================
function atualizarDisplayPomodoro() {
    const minutos = Math.floor(pomoTempoRestante / 60);
    const segundos = pomoTempoRestante % 60;
    document.getElementById("pomo-timer").innerText = `${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;
}

function iniciarPomodoro() {
    if (pomoRodando) return;
    pomoRodando = true;
    pomoIntervalo = setInterval(() => {
        if (pomoTempoRestante > 0) {
            pomoTempoRestante--;
            atualizarDisplayPomodoro();
        } else {
            clearInterval(pomoIntervalo);
            pomoRodando = false;
            alert("⏰ Pomodoro concluído! Hora de dar 5 minutos de descanso.");
            pomoTempoRestante = 25 * 60;
            atualizarDisplayPomodoro();
        }
    }, 1000);
}

function pausarPomodoro() { clearInterval(pomoIntervalo); pomoRodando = false; }
function resetarPomodoro() { clearInterval(pomoIntervalo); pomoRodando = false; pomoTempoRestante = 25 * 60; atualizarDisplayPomodoro(); }

// ==========================================
// MÓDULO: CONTADOR REGRESSIVO
// ==========================================
function iniciarContagemRegressiva() {
    const dataProva = new Date("Jun 28, 2026 13:00:00").getTime();
    setInterval(function() {
        const agora = new Date().getTime();
        const distancia = dataProva - agora;
        const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
        const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const relogio = document.getElementById("relogio");
        
        if (distancia < 0) relogio.innerHTML = "É hoje! 🚀";
        else relogio.innerHTML = `${dias}d e ${horas}h`;
    }, 1000);
}

// ==========================================
// MÓDULO: CHECKLIST E XP
// ==========================================
function salvarChecklist() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const estado = {};
    checkboxes.forEach(box => estado[box.id] = box.checked);
    localStorage.setItem('fatec_checklist', JSON.stringify(estado));
    atualizarProgresso();
}

function carregarChecklist() {
    const estadoSalvo = JSON.parse(localStorage.getItem('fatec_checklist'));
    if (estadoSalvo) {
        Object.keys(estadoSalvo).forEach(id => {
            const box = document.getElementById(id);
            if (box) box.checked = estadoSalvo[id];
        });
    }
    atualizarProgresso();
}

function zerarChecklist() {
    if(confirm("Tem certeza que deseja zerar o checklist de estudos?")) {
        localStorage.removeItem('fatec_checklist');
        document.querySelectorAll('input[type="checkbox"]').forEach(box => box.checked = false);
        atualizarProgresso();
    }
}

function atualizarProgresso() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const total = checkboxes.length;
    let concluidos = 0;
    checkboxes.forEach(box => { if(box.checked) concluidos++; });
    const porcentagem = total === 0 ? 0 : Math.round((concluidos / total) * 100);
    
    document.getElementById('progresso-texto').innerText = `${porcentagem}% Concluído`;
    document.getElementById('barra-progresso').style.width = `${porcentagem}%`;

    if(porcentagem === 100) {
        document.getElementById('barra-progresso').style.backgroundColor = "#10b981"; 
        document.getElementById('progresso-texto').innerText = "100% - Edital Fechado! 🏆";
    } else {
        document.getElementById('barra-progresso').style.backgroundColor = "var(--primary)";
    }
}

// ==========================================
// MÓDULO: SIMULADOS FRACIONADOS
// ==========================================
function adicionarSimulado() {
    const materia = document.getElementById('sim-materia').value;
    const origem = document.getElementById('sim-origem').value;
    const nota = parseInt(document.getElementById('sim-nota').value);
    const total = parseInt(document.getElementById('sim-total').value);

    if (isNaN(nota) || isNaN(total) || nota < 0 || nota > total) {
        alert("Preencha seus acertos e o total de questões corretamente.");
        return;
    }

    const porcentagem = Math.round((nota / total) * 100);

    const simulados = JSON.parse(localStorage.getItem('fatec_simulados')) || [];
    simulados.push({ materia, origem, nota, total, porcentagem, data: new Date().toLocaleDateString() });
    localStorage.setItem('fatec_simulados', JSON.stringify(simulados));

    document.getElementById('sim-nota').value = "";
    document.getElementById('sim-total').value = "";
    renderizarSimulados();
}

function renderizarSimulados() {
    const simulados = JSON.parse(localStorage.getItem('fatec_simulados')) || [];
    const listaHtml = document.getElementById('lista-simulados');
    listaHtml.innerHTML = "";

    const labels = [];
    const dados = [];

    simulados.forEach(sim => {
        labels.push(`${sim.materia} (${sim.origem})`);
        dados.push(sim.porcentagem);

        const div = document.createElement('div');
        div.className = 'history-item';
        div.innerHTML = `
            <div>
                <strong>[${sim.materia}] - ${sim.origem}</strong> <br>
                <small style="color: #94a3b8;">${sim.data}</small>
            </div>
            <div class="nota-badge" style="display: flex; flex-direction: column; align-items: flex-end;">
                <span>${sim.porcentagem}% de Acerto</span>
                <span style="font-size: 0.75rem; color: #64748b; font-weight: normal;">(${sim.nota} de ${sim.total} acertos)</span>
            </div>
        `;
        listaHtml.prepend(div);
    });

    atualizarGrafico(labels, dados);
}

function atualizarGrafico(labels, dados) {
    const ctx = document.getElementById('graficoSimulados').getContext('2d');
    if (chartInstancia) chartInstancia.destroy(); 

    chartInstancia = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Aproveitamento (%)',
                data: dados,
                borderColor: '#b11116', 
                backgroundColor: 'rgba(177, 17, 22, 0.1)',
                borderWidth: 3,
                tension: 0.4, 
                fill: true,
                pointBackgroundColor: '#b11116',
                pointRadius: 5
            }]
        },
        options: {
            responsive: true,
            scales: { y: { beginAtZero: true, max: 100, ticks: { stepSize: 20 } } },
            plugins: { legend: { display: false }, tooltip: { callbacks: { label: function(context) { return context.parsed.y + '% de acerto'; } } } }
        }
    });
}

// ==========================================
// MÓDULO: REDAÇÕES
// ==========================================
function adicionarRedacao() {
    const tema = document.getElementById('red-tema').value;
    const nota = document.getElementById('red-nota').value;
    const obs = document.getElementById('red-obs').value;

    if (!tema || !nota) {
        alert("Preencha no mínimo o tema e a nota da redação.");
        return;
    }

    const redacoes = JSON.parse(localStorage.getItem('fatec_redacoes')) || [];
    redacoes.push({ tema, nota, obs, data: new Date().toLocaleDateString() });
    localStorage.setItem('fatec_redacoes', JSON.stringify(redacoes));

    document.getElementById('red-tema').value = "";
    document.getElementById('red-nota').value = "";
    document.getElementById('red-obs').value = "";
    
    renderizarRedacoes();
}

function renderizarRedacoes() {
    const redacoes = JSON.parse(localStorage.getItem('fatec_redacoes')) || [];
    const listaHtml = document.getElementById('lista-redacoes');
    listaHtml.innerHTML = "";

    redacoes.forEach(red => {
        const div = document.createElement('div');
        div.className = 'history-item red';
        div.innerHTML = `
            <div style="width: 100%; display: flex; justify-content: space-between; align-items: center;">
                <strong>Tema: ${red.tema}</strong>
                <span class="nota-badge" style="background: #fef3c7; color: #d97706;">Nota: ${red.nota}/100</span>
            </div>
            <p style="margin: 5px 0 0 0; font-size: 0.95rem; color: #64748b;"><strong>Análise:</strong> ${red.obs || 'Sem observações.'}</p>
            <small style="color: #94a3b8;">${red.data}</small>
        `;
        listaHtml.prepend(div);
    });
}