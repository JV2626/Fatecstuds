let chartInstancia = null;
let pomoTempoRestante = 25 * 60; 
let pomoIntervalo = null;
let pomoRodando = false;

// BANDO DE DADOS (GABARITOS DAS PROVAS EM PDF)
const gabaritosOficiais = {
    '2026.1': ['C','A','B','C','E','C','A','A','E','B','E','D','C','B','E','E','B','B','E','D','B','A','C','E','C','A','B','D','E','D','D','A','B','C','C','A','E','D','E','E','B','C','D','C','D','A','D','C','A','E','E','E','A','A','A','D','B','D','A','B'],
    '2025.2': ['C','E','E','D','D','D','E','C','C','E','A','A','D','C','A','A','C','D','C','E','C','E','C','B','D','C','E','A','D','E','B','B','A','D','A','D','E','E','A','B','B','D','B','E','B','D','C','C','E','C','D','D','E','B','E','D','A','E','B','D','A','E','C','E'],
    '2025.1': ['C','E','D','B','A','C','D','B','E','A','B','A','D','E','C','B','D','E','C','A','D','B','E','C','A','C','D','B','A','E','D','E','B','A','C','A','D','E','B','C','D','E','B','C','A','A','C','B','E','C','A','D','B','D']
};
let provaAberta = '';

// BANDO DE DADOS: CRONOGRAMA DINÂMICO
const dbSemanas = {
    "1": [ { dia: "SEG", class: "", label: "Matemática", title: "Operações Básicas & Frações", desc: "MMC, MDC, Regra de Três Simples.", search: "matematica+basica+fracoes+regra+de+tres+fatec" }, { dia: "TER", class: "highlight", label: "Linguagens", title: "Interpretação Base", desc: "Charges, tirinhas e leitura crítica.", search: "interpretacao+de+textos+charges+fatec" }, { dia: "QUA", class: "", label: "Natureza", title: "Eletrodinâmica I", desc: "Fórmula de Potência (P=V.i).", search: "eletrodinamica+potencia+eletrica+fatec" }, { dia: "QUI", class: "", label: "Humanas", title: "Era Vargas", desc: "Industrialização e CLT no Brasil.", search: "era+vargas+resumo+fatec" }, { dia: "SEX", class: "", label: "Revisão", title: "Fechamento da Semana", desc: "Refazer erros de exatas e praticar.", search: "como+fazer+revisao+estudos" }, { dia: "SAB", class: "free", label: "Redação", title: "Estrutura FATEC", desc: "Escrever 1 Redação. Noite com a Vitória!", search: "redacao+dissertativa+argumentativa+fatec" }, { dia: "DOM", class: "simulation", label: "Simulado", title: "Treino Prático", desc: "Resolver 30 questões de provas anteriores.", search: "" } ],
    "2": [ { dia: "SEG", class: "", label: "Matemática", title: "Percentagens & Juros", desc: "Juros simples, descontos e aumentos.", search: "porcentagem+e+juros+simples+fatec" }, { dia: "TER", class: "highlight", label: "Linguagens", title: "Conectivos (Coesão)", desc: "Oposição (Mas) e Concessão (Embora).", search: "conectivos+de+oposicao+e+concessao" }, { dia: "QUA", class: "", label: "Natureza", title: "Ecologia Básica", desc: "Cadeias alimentares e poluição.", search: "ecologia+cadeia+alimentar+fatec" }, { dia: "QUI", class: "", label: "Lógica", title: "Tabela Verdade", desc: "Operadores AND, OR, NOT.", search: "raciocinio+logico+tabela+verdade" }, { dia: "SEX", class: "", label: "Revisão", title: "Correção de Erros", desc: "Focar em entender o porquê errou Lógica.", search: "" }, { dia: "SAB", class: "free", label: "Redação", title: "Uso de Repertório", desc: "Treinar citações. Noite com a Vitória!", search: "repertorio+sociocultural+redacao" }, { dia: "DOM", class: "simulation", label: "Simulado", title: "Simulado Real", desc: "Prova 2025.1 Completa (4h cronometradas).", search: "" } ],
    "3": [ { dia: "SEG", class: "", label: "Matemática", title: "Leitura de Gráficos", desc: "Interpretação de tabelas de dados.", search: "interpretacao+de+graficos+e+tabelas+matematica" }, { dia: "TER", class: "highlight", label: "Inglês", title: "Inglês Instrumental", desc: "Técnica de Scanning e falsos cognatos.", search: "ingles+instrumental+scanning+fatec" }, { dia: "QUA", class: "", label: "Natureza", title: "Separação de Misturas", desc: "Filtração, decantação e destilação.", search: "separacao+de+misturas+quimica" }, { dia: "QUI", class: "", label: "Humanas", title: "Ditadura Militar", desc: "Milagre económico e censura.", search: "ditadura+militar+no+brasil+resumo" }, { dia: "SEX", class: "", label: "Revisão", title: "Matemática Aplicada", desc: "Lista de 15 questões de Gráficos.", search: "" }, { dia: "SAB", class: "free", label: "Redação", title: "Desenvolvimento", desc: "Treino de argumentação. Date night!", search: "como+fazer+desenvolvimento+redacao" }, { dia: "DOM", class: "simulation", label: "Simulado", title: "Foco Exatas", desc: "Refazer só Matemática e Natureza de 2026.1.", search: "" } ],
    "4": [ { dia: "SEG", class: "", label: "Matemática", title: "Funções 1º e 2º Grau", desc: "Raízes de Bhaskara e análise de parábolas.", search: "funcoes+do+1+e+2+grau+resumo" }, { dia: "TER", class: "highlight", label: "Linguagens", title: "Figuras de Linguagem", desc: "Metáfora, Paradoxo e Ironia.", search: "figuras+de+linguagem+mais+cobradas" }, { dia: "QUA", class: "", label: "Natureza", title: "Cinemática (Física)", desc: "Velocidade média e movimento uniforme.", search: "cinematica+velocidade+media+fisica" }, { dia: "QUI", class: "", label: "Humanas", title: "Urbanização e Energia", desc: "Favelização e Matrizes Renováveis.", search: "urbanizacao+e+matrizes+energeticas+geografia" }, { dia: "SEX", class: "", label: "Revisão", title: "Prática Híbrida", desc: "10 questões de Função e 5 de Física.", search: "" }, { dia: "SAB", class: "free", label: "Redação", title: "Conclusão e Proposta", desc: "Como fechar a redação. Descanso merecido.", search: "como+fazer+conclusao+redacao" }, { dia: "DOM", class: "simulation", label: "Simulado", title: "Simulado Real", desc: "Prova 2025.2 Completa (4h cronometradas).", search: "" } ],
    "5": [ { dia: "SEG", class: "", label: "Matemática", title: "Progressões (PA/PG)", desc: "Fórmulas do termo geral e soma.", search: "progressao+aritmetica+e+geometrica" }, { dia: "TER", class: "highlight", label: "Inglês", title: "Vocabulário Tech", desc: "Termos de TI e pronomes interrogativos.", search: "vocabulario+de+ingles+tecnologia" }, { dia: "QUA", class: "", label: "Natureza", title: "Genética Básica", desc: "Sistema ABO (Sangue) e 1ª Lei de Mendel.", search: "genetica+sistema+abo+e+fator+rh" }, { dia: "QUI", class: "", label: "Humanas", title: "Globalização", desc: "Blocos Económicos (Mercosul, UE).", search: "blocos+economicos+e+globalizacao" }, { dia: "SEX", class: "", label: "Revisão", title: "Retomada", desc: "Rever Lógica e Conectivos.", search: "" }, { dia: "SAB", class: "free", label: "Redação", title: "Tema Tecnológico", desc: "Redação sobre Inteligência Artificial.", search: "redacao+sobre+inteligencia+artificial" }, { dia: "DOM", class: "simulation", label: "Simulado", title: "Desempenho", desc: "Resolver 40 questões avulsas no Tracker.", search: "" } ],
    "6": [ { dia: "SEG", class: "", label: "Matemática", title: "Geometria Plana", desc: "Área de triângulos, retângulos e círculos.", search: "geometria+plana+areas" }, { dia: "TER", class: "highlight", label: "Linguagens", title: "Tipologia Textual", desc: "Narrativo, descritivo, dissertativo.", search: "tipos+de+textos+redacao" }, { dia: "QUA", class: "", label: "Natureza", title: "Estequiometria", desc: "Cálculo de massas e reações químicas.", search: "estequiometria+basica+quimica" }, { dia: "QUI", class: "", label: "Lógica", title: "Negação Lógica", desc: "Leis de Morgan (Negação do E / OU).", search: "leis+de+morgan+raciocinio+logico" }, { dia: "SEX", class: "", label: "Revisão", title: "Geometria + Lógica", desc: "Bateria pesada de exercícios práticos.", search: "" }, { dia: "SAB", class: "free", label: "Redação", title: "Tema Ambiental", desc: "Redação sobre Impactos Climáticos.", search: "redacao+meio+ambiente+e+sustentabilidade" }, { dia: "DOM", class: "simulation", label: "Simulado", title: "Prova Anterior", desc: "Refazer a Prova 2026.1 para ver evolução.", search: "" } ],
    "7": [ { dia: "SEG", class: "", label: "Revisão", title: "Varredura Matemática", desc: "Refazer todos os erros de Matemática salvos.", search: "matematica+revisao+fatec" }, { dia: "TER", class: "highlight", label: "Revisão", title: "Varredura Linguagens", desc: "Leitura de 10 charges e textos longos.", search: "" }, { dia: "QUA", class: "", label: "Revisão", title: "Fórmulas de Natureza", desc: "Decorar P=V.i e revisar Termologia.", search: "fisica+formulas+resumo" }, { dia: "QUI", class: "", label: "Revisão", title: "Varredura Humanas", desc: "Leitura de resumos de História e Geo.", search: "" }, { dia: "SEX", class: "", label: "Descanso", title: "Descompressão", desc: "Zero estudo pesado. Organizar a mente.", search: "" }, { dia: "SAB", class: "free", label: "Redação", title: "Esqueleto Fixo", desc: "Decorar o teu modelo de redação.", search: "" }, { dia: "DOM", class: "simulation", label: "Simulado", title: "Simulação de Batalha", desc: "Último simulado antes da reta final.", search: "" } ],
    "8": [ { dia: "SEG", class: "simulation", label: "Reta Final", title: "Provas Antigas", desc: "Resolver 20 questões avulsas misturadas.", search: "" }, { dia: "TER", class: "simulation", label: "Reta Final", title: "Provas Antigas", desc: "Foco total na leitura atenta (Inglês/Port).", search: "" }, { dia: "QUA", class: "simulation", label: "Reta Final", title: "Provas Antigas", desc: "Caçar questões de gráficos e eletrodinâmica.", search: "" }, { dia: "QUI", class: "simulation", label: "Reta Final", title: "Revisão de Erros", desc: "Olhar o Tracker e estudar só os erros.", search: "" }, { dia: "SEX", class: "highlight", label: "Reta Final", title: "Revisão Leve", desc: "Apenas vídeos curtos e descanso.", search: "" }, { dia: "SAB", class: "free", label: "VÉSPERA", title: "Descanso Absoluto", desc: "Mente limpa. Separar caneta, doc e água.", search: "" }, { dia: "DOM", class: "simulation", label: "O GRANDE DIA", title: "PROVA FATEC", desc: "Destruir o vestibular e garantir a vaga!", search: "" } ]
};

document.addEventListener("DOMContentLoaded", () => {
    // Configurar o Chart.js para Dark Mode Global
    Chart.defaults.color = '#94a3b8';
    Chart.defaults.font.family = "'Poppins', sans-serif";

    carregarChecklist();
    renderizarSimulados();
    renderizarRedacoes();
    iniciarContagemRegressiva();
    atualizarDisplayPomodoro();
    carregarSemanaSalva();
});

// ==========================================
// MÓDULO 1: O SIMULADOR INTERATIVO (NOVIDADE)
// ==========================================
let questoesAtuais = [];
let indiceQuestao = 0;
let acertosQuiz = 0;
let alternativaSelecionada = '';
let materiaSelecionadaQuiz = '';

function embaralharArray(array) {
    let arrayCopiado = [...array];
    for (let i = arrayCopiado.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arrayCopiado[i], arrayCopiado[j]] = [arrayCopiado[j], arrayCopiado[i]];
    }
    return arrayCopiado;
}

function iniciarQuiz() {
    if (typeof bancoDeQuestoesFatec === 'undefined') {
        alert("ERRO: O ficheiro 'questoes.js' não foi encontrado. Verifica se está na mesma pasta do teu HTML.");
        return;
    }

    const selectMateria = document.getElementById('quiz-materia').value;
    const qtd = parseInt(document.getElementById('quiz-qtd').value);
    
    let filtradas = [];
    if (selectMateria === "Todas") {
        filtradas = [...bancoDeQuestoesFatec];
    } else {
        filtradas = bancoDeQuestoesFatec.filter(q => q.materia === selectMateria);
    }

    if (filtradas.length === 0) {
        alert("Ainda não temos questões suficientes para esta matéria no banco.");
        return;
    }

    materiaSelecionadaQuiz = selectMateria;
    questoesAtuais = embaralharArray(filtradas).slice(0, qtd); 
    indiceQuestao = 0;
    acertosQuiz = 0;

    document.getElementById('quiz-setup').classList.add('hidden');
    document.getElementById('quiz-results').classList.add('hidden');
    document.getElementById('quiz-active').classList.remove('hidden');

    carregarQuestaoNaTela();
}

function carregarQuestaoNaTela() {
    alternativaSelecionada = '';
    const q = questoesAtuais[indiceQuestao];
    
    document.getElementById('qb-materia').innerText = q.materia + " - " + q.assunto;
    document.getElementById('qb-contador').innerText = `Missão ${indiceQuestao + 1} de ${questoesAtuais.length}`;
    
    document.getElementById('q-texto-base').innerText = q.textoBase;
    document.getElementById('q-pergunta').innerText = q.pergunta;

    const divAlternativas = document.getElementById('q-alternativas');
    divAlternativas.innerHTML = ''; 

    const letras = ['A', 'B', 'C', 'D', 'E'];
    letras.forEach(letra => {
        const btn = document.createElement('button');
        btn.className = 'alt-btn';
        btn.innerHTML = `<strong>${letra})</strong> <span>${q.alternativas[letra]}</span>`;
        btn.onclick = () => selecionarAlternativa(btn, letra);
        divAlternativas.appendChild(btn);
    });

    document.getElementById('q-feedback').classList.add('hidden');
    const btnAcao = document.getElementById('btn-acao-quiz');
    btnAcao.innerHTML = "Verificar Resposta <i class='ph ph-check-circle'></i>";
    btnAcao.disabled = true; 
}

function selecionarAlternativa(btnHtml, letra) {
    if(!document.getElementById('btn-acao-quiz').innerText.includes("Verificar")) return;

    const botoes = document.querySelectorAll('.alt-btn');
    botoes.forEach(b => b.classList.remove('selected'));
    
    btnHtml.classList.add('selected');
    alternativaSelecionada = letra;
    document.getElementById('btn-acao-quiz').disabled = false;
}

function acaoQuizPrincipal() {
    const btnAcao = document.getElementById('btn-acao-quiz');
    
    if (btnAcao.innerText.includes("Verificar")) {
        corrigirQuestao();
    } else {
        indiceQuestao++;
        if (indiceQuestao < questoesAtuais.length) {
            carregarQuestaoNaTela();
        } else {
            mostrarResultadosQuiz();
        }
    }
}

function corrigirQuestao() {
    const q = questoesAtuais[indiceQuestao];
    const botoes = document.querySelectorAll('.alt-btn');
    
    botoes.forEach(btn => btn.disabled = true);

    const feedbackBox = document.getElementById('q-feedback');
    const fTitle = document.getElementById('feedback-title');
    const fText = document.getElementById('feedback-text');
    feedbackBox.classList.remove('hidden', 'erro');

    if (alternativaSelecionada === q.correta) {
        acertosQuiz++;
        fTitle.innerHTML = "<i class='ph ph-check-circle'></i> Resposta Correta!";
        fTitle.style.color = "var(--correct)";
    } else {
        fTitle.innerHTML = "<i class='ph ph-x-circle'></i> Resposta Incorreta!";
        fTitle.style.color = "var(--wrong)";
        feedbackBox.classList.add('erro');
    }

    fText.innerText = q.explicacao;

    botoes.forEach(btn => {
        const letraDoBotao = btn.innerHTML.charAt(8); 
        if (letraDoBotao === q.correta) {
            btn.classList.add('correct');
        } else if (letraDoBotao === alternativaSelecionada) {
            btn.classList.add('wrong');
        }
    });

    const btnAcao = document.getElementById('btn-acao-quiz');
    if (indiceQuestao + 1 === questoesAtuais.length) {
        btnAcao.innerHTML = "Analisar Desempenho <i class='ph ph-chart-bar'></i>";
    } else {
        btnAcao.innerHTML = "Próxima Missão <i class='ph ph-arrow-right'></i>";
    }
}

function mostrarResultadosQuiz() {
    document.getElementById('quiz-active').classList.add('hidden');
    const results = document.getElementById('quiz-results');
    results.classList.remove('hidden');

    document.getElementById('resultado-nota').innerText = `${acertosQuiz}/${questoesAtuais.length}`;
    
    const porcentagem = (acertosQuiz / questoesAtuais.length) * 100;
    const msg = document.getElementById('resultado-msg');
    const icone = document.querySelector('.trophy-icon');
    
    if(porcentagem >= 80) {
        msg.innerText = "Nível Hacker de FATEC. A vaga é tua!";
        icone.className = "ph ph-trophy trophy-icon text-warning";
    }
    else if(porcentagem >= 50) {
        msg.innerText = "Bom treino! Revê os teus erros para subires de nível.";
        icone.className = "ph ph-medal trophy-icon text-accent";
    }
    else {
        msg.innerText = "Hora de voltar para a teoria e assistir a videoaulas!";
        icone.className = "ph ph-warning trophy-icon text-wrong";
    }
}

function resetarTelaQuiz() {
    document.getElementById('quiz-results').classList.add('hidden');
    document.getElementById('quiz-setup').classList.remove('hidden');
}

function salvarQuizNoTracker() {
    const simulados = JSON.parse(localStorage.getItem('fatec_simulados')) || [];
    const porcentagem = Math.round((acertosQuiz / questoesAtuais.length) * 100);
    
    simulados.push({ 
        materia: materiaSelecionadaQuiz === "Todas" ? "Misto (Simulador App)" : materiaSelecionadaQuiz, 
        origem: "App Tracker (IA)", 
        nota: acertosQuiz, 
        total: questoesAtuais.length, 
        porcentagem: porcentagem, 
        data: new Date().toLocaleDateString() 
    });
    
    localStorage.setItem('fatec_simulados', JSON.stringify(simulados));
    renderizarSimulados();
    
    document.querySelector("button[onclick=\"openTab(event, 'simulados')\"]").click();
    resetarTelaQuiz();
}

// ==========================================
// MÓDULO 2: CRONOGRAMA DINÂMICO
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

        let borderClass = "";
        if(dia.class === "free") borderClass = "border-top: 4px solid var(--correct)";
        else if(dia.class === "simulation") borderClass = "border-top: 4px solid var(--primary)";
        else if(dia.class === "highlight") borderClass = "border-top: 4px solid var(--accent)";

        const cardHTML = `
            <div class="day-card" style="${borderClass}">
                <div class="day-label">${dia.dia} - ${dia.label}</div>
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
// MÓDULO 3: PDF FOCUS & GABARITO
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
// MÓDULO 4: POMODORO TIMER
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
// MÓDULO 5: CONTADOR REGRESSIVO E PROGRESSO
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
    if(confirm("Tens a certeza de que desejas limpar o progresso de estudos?")) {
        localStorage.removeItem('fatec_checklist');
        document.querySelectorAll('input[type="checkbox"]').forEach(box => box.checked = false);
        atualizarProgresso();
    }
}
function atualizarProgresso() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    let concluidos = 0;
    checkboxes.forEach(box => { if(box.checked) concluidos++; });
    const porcentagem = checkboxes.length === 0 ? 0 : Math.round((concluidos / checkboxes.length) * 100);
    document.getElementById('progresso-texto').innerText = `${porcentagem}% Concluído`;
    document.getElementById('barra-progresso').style.width = `${porcentagem}%`;
    
    const barra = document.getElementById('barra-progresso');
    if(porcentagem === 100) {
        barra.style.backgroundColor = "var(--correct)"; 
        barra.style.boxShadow = "0 0 15px var(--correct)";
        document.getElementById('progresso-texto').innerText = "100% - Edital Fechado! 🏆";
    } else {
        barra.style.backgroundColor = "var(--primary)";
        barra.style.boxShadow = "0 0 10px var(--primary)";
    }
}

// ==========================================
// MÓDULO 6: GRÁFICO E DESEMPENHO (SIMULADOS)
// ==========================================
function adicionarSimulado() {
    const materia = document.getElementById('sim-materia').value;
    const origem = document.getElementById('sim-origem').value;
    const nota = parseInt(document.getElementById('sim-nota').value);
    const total = parseInt(document.getElementById('sim-total').value);

    if (isNaN(nota) || isNaN(total) || nota < 0 || nota > total) {
        alert("Preenche os teus acertos e o total de questões corretamente.");
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
                <small style="color: var(--text-muted);">${sim.data}</small>
            </div>
            <div class="nota-badge" style="display: flex; flex-direction: column; align-items: flex-end;">
                <span>${sim.porcentagem}% de Acerto</span>
                <span style="font-size: 0.75rem; color: var(--text-muted); font-weight: normal;">(${sim.nota} de ${sim.total})</span>
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
                borderColor: '#ef4444', 
                backgroundColor: 'rgba(239, 68, 68, 0.1)', 
                borderWidth: 3, 
                tension: 0.4, 
                fill: true, 
                pointBackgroundColor: '#ef4444', 
                pointBorderColor: '#fff',
                pointRadius: 6,
                pointHoverRadius: 8
            }]
        },
        options: { 
            responsive: true, 
            scales: { 
                y: { beginAtZero: true, max: 100, ticks: { stepSize: 20, color: '#94a3b8' }, grid: { color: 'rgba(255,255,255,0.05)' } },
                x: { ticks: { color: '#94a3b8' }, grid: { color: 'rgba(255,255,255,0.05)' } }
            }, 
            plugins: { legend: { display: false }, tooltip: { callbacks: { label: function(context) { return context.parsed.y + '% de acerto'; } } } } 
        }
    });
}

// ==========================================
// MÓDULO 7: REDAÇÕES
// ==========================================
function adicionarRedacao() {
    const tema = document.getElementById('red-tema').value;
    const nota = document.getElementById('red-nota').value;
    const obs = document.getElementById('red-obs').value;
    if (!tema || !nota) { alert("Preenche no mínimo o tema e a nota da redação."); return; }
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
                <strong style="color: white;">Tema: ${red.tema}</strong>
                <span class="nota-badge" style="background: rgba(245, 158, 11, 0.1); border-color: rgba(245, 158, 11, 0.3); color: var(--warning);">Nota: ${red.nota}/100</span>
            </div>
            <p style="margin: 8px 0 0 0; font-size: 0.95rem; color: var(--text-muted);"><strong>Análise:</strong> ${red.obs || 'Sem observações.'}</p>
            <small style="color: var(--text-muted); margin-top: 5px;">${red.data}</small>
        `;
        listaHtml.prepend(div);
    });
}