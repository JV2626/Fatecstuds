let chartInstancia = null;

// Lógica do Pomodoro
let pomoTempoRestante = 25 * 60; // 25 minutos em segundos
let pomoIntervalo = null;
let pomoRodando = false;

document.addEventListener("DOMContentLoaded", () => {
    carregarChecklist();
    renderizarSimulados();
    renderizarRedacoes();
    iniciarContagemRegressiva();
    atualizarDisplayPomodoro();
});

// ==========================================
// MÓDULO: POMODORO TIMER
// ==========================================
function atualizarDisplayPomodoro() {
    const minutos = Math.floor(pomoTempoRestante / 60);
    const segundos = pomoTempoRestante % 60;
    document.getElementById("pomo-timer").innerText = 
        `${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;
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
            alert("⏰ Pomodoro concluído! Hora de dar 5 minutos de descanso e tomar uma água.");
            pomoTempoRestante = 25 * 60;
            atualizarDisplayPomodoro();
        }
    }, 1000);
}

function pausarPomodoro() {
    clearInterval(pomoIntervalo);
    pomoRodando = false;
}

function resetarPomodoro() {
    clearInterval(pomoIntervalo);
    pomoRodando = false;
    pomoTempoRestante = 25 * 60;
    atualizarDisplayPomodoro();
}

// ==========================================
// MÓDULO: CONTADOR REGRESSIVO FATEC
// ==========================================
function iniciarContagemRegressiva() {
    const dataProva = new Date("Jun 28, 2026 13:00:00").getTime();

    setInterval(function() {
        const agora = new Date().getTime();
        const distancia = dataProva - agora;

        const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
        const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

        const relogio = document.getElementById("relogio");
        
        if (distancia < 0) {
            relogio.innerHTML = "É hoje! 🚀";
        } else {
            relogio.innerHTML = `${dias}d e ${horas}h`;
        }
    }, 1000);
}

// ==========================================
// MÓDULO: CHECKLIST E PROGRESSO
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
    if(confirm("Tem certeza que deseja zerar o checklist? As notas dos simulados continuarão salvas.")) {
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
        document.getElementById('progresso-texto').innerText = "100% - Pronto para a FATEC! 🏆";
    } else {
        document.getElementById('barra-progresso').style.backgroundColor = "var(--primary)";
    }
}

// ==========================================
// MÓDULO: SIMULADOS
// ==========================================
function adicionarSimulado() {
    const nome = document.getElementById('sim-nome').value;
    const nota = parseInt(document.getElementById('sim-nota').value);

    if (!nome || isNaN(nota) || nota < 0 || nota > 54) {
        alert("Preencha o nome e uma nota válida (0 a 54).");
        return;
    }

    const simulados = JSON.parse(localStorage.getItem('fatec_simulados')) || [];
    simulados.push({ nome, nota, data: new Date().toLocaleDateString() });
    localStorage.setItem('fatec_simulados', JSON.stringify(simulados));

    document.getElementById('sim-nome').value = "";
    document.getElementById('sim-nota').value = "";
    renderizarSimulados();
}

function renderizarSimulados() {
    const simulados = JSON.parse(localStorage.getItem('fatec_simulados')) || [];
    const listaHtml = document.getElementById('lista-simulados');
    listaHtml.innerHTML = "";

    const labels = [];
    const dados = [];

    simulados.forEach(sim => {
        labels.push(sim.nome);
        dados.push(sim.nota);

        const div = document.createElement('div');
        div.className = 'history-item';
        div.innerHTML = `
            <div><strong>${sim.nome}</strong> <br><small style="color: #94a3b8;">${sim.data}</small></div>
            <div class="nota-badge">${sim.nota} / 54 Acertos</div>
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
                label: 'Evolução de Acertos',
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
            scales: { y: { beginAtZero: true, max: 54, ticks: { stepSize: 10 } } },
            plugins: { legend: { display: false } }
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