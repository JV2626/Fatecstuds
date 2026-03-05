// Arquivo: questoes.js
// SPRINT 1: MATEMÁTICA E LÓGICA

const bancoDeQuestoesFatec = [
    {
        id: 1,
        materia: "Matemática",
        assunto: "Regra de Três Composta",
        textoBase: "Uma empresa especializada em energia solar foi contratada para instalar um grande parque fotovoltaico. Sabe-se que uma equipe de 4 técnicos, trabalhando no mesmo ritmo, consegue instalar 120 painéis solares em 5 dias de trabalho.",
        pergunta: "Se a empresa alocar uma equipe de 6 técnicos, operando no mesmo ritmo da equipe anterior, em quantos dias eles conseguirão instalar 360 painéis solares?",
        alternativas: {
            A: "8 dias",
            B: "10 dias",
            C: "12 dias",
            D: "15 dias",
            E: "18 dias"
        },
        correta: "B",
        explicacao: "Regra de três composta. Grandezas: Técnicos (4 -> 6), Painéis (120 -> 360), Dias (5 -> X). Mais técnicos = menos dias (Inversa). Mais painéis = mais dias (Direta). Montando a equação: 5/X = (6/4) * (120/360). 5/X = (6/4) * (1/3). 5/X = 6/12. 5/X = 1/2. X = 10 dias."
    },
    {
        id: 2,
        materia: "Matemática",
        assunto: "Função do 1º Grau",
        textoBase: "Um desenvolvedor web utiliza um serviço de hospedagem em nuvem (Cloud) para manter os sites de seus clientes no ar. O plano contratado possui um custo fixo mensal de R$ 45,00, acrescido de uma taxa de R$ 0,15 por cada Gigabyte (GB) de tráfego de dados excedente.",
        pergunta: "Em um determinado mês, o desenvolvedor pagou uma fatura total de R$ 82,50. A quantidade de tráfego de dados excedente, em GB, utilizada nesse mês foi de:",
        alternativas: {
            A: "150 GB",
            B: "200 GB",
            C: "250 GB",
            D: "300 GB",
            E: "350 GB"
        },
        correta: "C",
        explicacao: "A função é C(x) = 45 + 0,15x, onde x é o GB excedente. Se C(x) = 82,50, temos: 82,50 = 45 + 0,15x -> 37,50 = 0,15x -> x = 37,50 / 0,15 -> x = 250 GB."
    },
    {
        id: 3,
        materia: "Matemática",
        assunto: "Geometria Plana (Área)",
        textoBase: "Para otimizar o espaço de um datacenter, os engenheiros precisam instalar um novo sistema de refrigeração no piso. A sala do servidor tem o formato de um retângulo, medindo 12 metros de comprimento por 8 metros de largura. O sistema de refrigeração ocupará uma área equivalente a 15% do piso total da sala.",
        pergunta: "Qual será, em metros quadrados, a área do piso ocupada pelo novo sistema de refrigeração?",
        alternativas: {
            A: "12,4 m²",
            B: "14,4 m²",
            C: "16,2 m²",
            D: "18,0 m²",
            E: "19,6 m²"
        },
        correta: "B",
        explicacao: "Primeiro, calcula-se a área total do retângulo: Área = Base x Altura = 12 * 8 = 96 m². Em seguida, calcula-se 15% dessa área: 15% de 96 = 0,15 * 96 = 14,4 m²."
    },
    {
        id: 4,
        materia: "Lógica",
        assunto: "Equivalência Lógica",
        textoBase: "Durante o desenvolvimento de um algoritmo, um programador escreveu a seguinte regra condicional para o fluxo do sistema: 'Se o usuário preencher a senha corretamente, então o acesso é liberado'.",
        pergunta: "Do ponto de vista da lógica proposicional, uma afirmação logicamente equivalente (contrapositiva) a essa regra é:",
        alternativas: {
            A: "Se o acesso é liberado, então o usuário preencheu a senha corretamente.",
            B: "Se o usuário não preencher a senha corretamente, então o acesso não é liberado.",
            C: "Se o acesso não é liberado, então o usuário não preencheu a senha corretamente.",
            D: "O usuário preenche a senha corretamente e o acesso é liberado.",
            E: "O usuário não preenche a senha corretamente ou o acesso não é liberado."
        },
        correta: "C",
        explicacao: "A equivalência contrapositiva de uma condicional 'Se P, então Q' (P -> Q) é 'Se não Q, então não P' (~Q -> ~P). Ou seja, inverte-se a ordem das frases e nega-se ambas. 'Se o acesso não é liberado (~Q), então não preencheu a senha correta (~P)'."
    },
    {
        id: 5,
        materia: "Matemática",
        assunto: "Leitura de Gráficos e Porcentagem",
        textoBase: "Um aplicativo de automação residencial registrou o número de downloads nos primeiros 4 meses do ano: Janeiro (2.000), Fevereiro (2.500), Março (3.000) e Abril (4.200).",
        pergunta: "A taxa de crescimento percentual no número de downloads de Março para Abril foi de:",
        alternativas: {
            A: "20%",
            B: "25%",
            C: "30%",
            D: "35%",
            E: "40%"
        },
        correta: "E",
        explicacao: "De março (3.000) para abril (4.200), o aumento absoluto foi de 1.200 downloads. Para achar a taxa percentual de crescimento em relação ao valor inicial (março), fazemos: (1.200 / 3.000) = 0,40 = 40%."
    },
    {
        id: 6,
        materia: "Matemática",
        assunto: "Escalas Cartográficas",
        textoBase: "Um engenheiro de redes está projetando o cabeamento de um novo datacenter. Na planta baixa (desenho) do projeto, que foi elaborada na escala de 1:50, a sala principal tem o formato de um retângulo medindo 10 cm de comprimento por 8 cm de largura.",
        pergunta: "Com base nessa escala, qual é a área real, em metros quadrados, dessa sala do datacenter?",
        alternativas: {
            A: "10 m²",
            B: "20 m²",
            C: "40 m²",
            D: "80 m²",
            E: "200 m²"
        },
        correta: "B",
        explicacao: "A escala 1:50 significa que 1 cm no desenho = 50 cm na realidade (0,5 metros). \nComprimento real: 10 cm * 0,5 m = 5 metros. \nLargura real: 8 cm * 0,5 m = 4 metros. \nÁrea real = 5m * 4m = 20 m²."
    },
    {
        id: 7,
        materia: "Matemática",
        assunto: "Trigonometria (Triângulo Retângulo)",
        textoBase: "Para garantir a máxima eficiência na captação de energia, um painel solar fotovoltaico de 2 metros de comprimento precisa ser instalado no telhado plano de uma empresa com uma inclinação exata de 30° em relação ao chão.",
        pergunta: "Para que o painel atinja essa inclinação, a diferença de altura (h) entre a parte mais alta do painel e a parte mais baixa apoiada no telhado deve ser de: (Considere: sen 30° = 0,5; cos 30° = 0,86; tg 30° = 0,57)",
        alternativas: {
            A: "0,5 m",
            B: "0,8 m",
            C: "1,0 m",
            D: "1,5 m",
            E: "2,0 m"
        },
        correta: "C",
        explicacao: "O painel atua como a hipotenusa (2m) de um triângulo retângulo, e a altura 'h' é o cateto oposto ao ângulo de 30°. Usamos a fórmula: sen(30°) = Cateto Oposto / Hipotenusa. \n0,5 = h / 2. \nh = 2 * 0,5 = 1,0 metro."
    },
    {
        id: 8,
        materia: "Matemática",
        assunto: "Probabilidade",
        textoBase: "Durante o controle de qualidade na linha de montagem da HyperZ Energia, um lote contendo 120 microinversores solares foi analisado. Os técnicos constataram que 15 desses equipamentos apresentavam defeito de fabricação.",
        pergunta: "Se o gerente de estoque pegar um microinversor desse lote de forma aleatória, a probabilidade de ele estar FUNCIONANDO perfeitamente é de:",
        alternativas: {
            A: "12,5%",
            B: "75,0%",
            C: "80,0%",
            D: "85,5%",
            E: "87,5%"
        },
        correta: "E",
        explicacao: "Se há 120 no total e 15 estão com defeito, 105 estão funcionando (120 - 15 = 105). \nA probabilidade é o evento desejado dividido pelo total: 105 / 120. \nSimplificando a fração por 15, temos 7 / 8. \nDividindo 7 por 8, encontramos 0,875, que equivale a 87,5%."
    },
    {
        id: 9,
        materia: "Matemática",
        assunto: "Progressão Aritmética (PA)",
        textoBase: "Uma startup de tecnologia está expandindo rapidamente seu aplicativo e precisa aumentar a sua capacidade de servidores. No mês de Janeiro (1º mês), a empresa possuía 50 servidores ativos. O plano de expansão determina que, a cada mês subsequente, a empresa deve adicionar exatamente 15 novos servidores à sua rede.",
        pergunta: "Seguindo esse cronograma rigorosamente, qual será o número total de servidores ativos da startup no final do mês de Dezembro (12º mês) do mesmo ano?",
        alternativas: {
            A: "165",
            B: "200",
            C: "215",
            D: "230",
            E: "250"
        },
        correta: "C",
        explicacao: "Trata-se de uma PA onde o primeiro termo (a1) é 50 e a razão (r) é 15. Queremos descobrir o 12º termo (a12). \nFórmula: a_n = a1 + (n - 1) * r \na_12 = 50 + (12 - 1) * 15 \na_12 = 50 + 11 * 15 \na_12 = 50 + 165 = 215 servidores."
    },
    {
        id: 10,
        materia: "Matemática",
        assunto: "Progressão Geométrica / Exponencial",
        textoBase: "Um código malicioso (malware) conseguiu invadir uma rede de computadores às 13h00, infectando inicialmente 10 máquinas. Os analistas de segurança cibernética observaram que a capacidade de replicação do vírus fazia com que o número total de máquinas infectadas dobrasse a cada 1 hora exata.",
        pergunta: "Caso os analistas não consigam conter a ameaça, quantas máquinas no total estarão infectadas às 18h00 do mesmo dia?",
        alternativas: {
            A: "50",
            B: "100",
            C: "160",
            D: "320",
            E: "640"
        },
        correta: "D",
        explicacao: "Das 13h às 18h passam-se 5 horas. O crescimento é exponencial (dobra). \nTempo 0 (13h): 10 \nTempo 1 (14h): 20 \nTempo 2 (15h): 40 \nTempo 3 (16h): 80 \nTempo 4 (17h): 160 \nTempo 5 (18h): 320 máquinas infectadas. \n(Fórmula: 10 * 2^5 = 10 * 32 = 320)."
    },
    {
        id: 11,
        materia: "Lógica",
        assunto: "Sequências e Padrões",
        textoBase: "Um script de automação no n8n executa tarefas repetitivas seguindo um padrão numérico crescente para distribuir a carga nos servidores de forma eficiente. O registro dos tempos (em milissegundos) dos primeiros ciclos foi: 2, 6, 12, 20, 30...",
        pergunta: "Se o script mantiver exatamente esse padrão lógico, qual será o tempo correspondente ao 7º ciclo de execução?",
        alternativas: {
            A: "42",
            B: "48",
            C: "50",
            D: "56",
            E: "60"
        },
        correta: "D",
        explicacao: "A diferença entre os números está aumentando em números pares: +4 (de 2 para 6), +6 (de 6 para 12), +8 (de 12 para 20), +10 (de 20 para 30). O 6º ciclo será 30 + 12 = 42. O 7º ciclo será 42 + 14 = 56."
    },
    {
        id: 12,
        materia: "Matemática",
        assunto: "Geometria Espacial (Volume)",
        textoBase: "Para garantir o resfriamento de um datacenter, os engenheiros utilizam um reservatório de água em formato de cilindro circular reto. A planta do projeto informa que o reservatório possui raio da base de 2 metros e altura de 5 metros.",
        pergunta: "Considerando a aproximação π = 3, qual é a capacidade máxima de água que esse reservatório pode armazenar, em metros cúbicos (m³)?",
        alternativas: {
            A: "30 m³",
            B: "45 m³",
            C: "60 m³",
            D: "90 m³",
            E: "120 m³"
        },
        correta: "C",
        explicacao: "O volume do cilindro é calculado pela fórmula V = π * r² * h. Substituindo os valores: V = 3 * (2²) * 5 = 3 * 4 * 5 = 60 m³."
    },
    {
        id: 13,
        materia: "Matemática",
        assunto: "Matrizes",
        textoBase: "A HyperZ Energia controla o estoque de dois tipos de painéis solares (A e B) em dois galpões. Esse estoque inicial é representado por uma matriz 2x2, onde as linhas são os galpões (1 e 2) e as colunas são os tipos de painéis (A e B): [ [120, 80], [90, 150] ].",
        pergunta: "Devido a uma grande compra, a empresa dobrou a quantidade de todos os itens do Galpão 1, e adicionou exatamente 10 unidades a todos os itens do Galpão 2. Após essa atualização, qual é o número TOTAL de painéis do tipo B armazenados na empresa?",
        alternativas: {
            A: "230",
            B: "240",
            C: "300",
            D: "320",
            E: "400"
        },
        correta: "D",
        explicacao: "O painel tipo B está na 2ª coluna da matriz (80 no Galpão 1 e 150 no Galpão 2). O Galpão 1 dobrou, então 80 vira 160. O Galpão 2 ganhou 10, então 150 vira 160. O total de painéis do tipo B é 160 + 160 = 320."
    },
    {
        id: 14,
        materia: "Matemática",
        assunto: "Análise Combinatória",
        textoBase: "Para garantir a segurança do sistema 'I Will', você precisa configurar um cofre digital. O sistema exige uma senha formada por exatamente 4 algarismos NUMÉRICOS (de 0 a 9). Como regra de segurança extra, o sistema não permite que nenhum algarismo seja repetido na mesma senha.",
        pergunta: "Quantas senhas diferentes os usuários conseguirão criar respeitando essa regra?",
        alternativas: {
            A: "210",
            B: "1.024",
            C: "5.040",
            D: "6.561",
            E: "10.000"
        },
        correta: "C",
        explicacao: "Trata-se de um Arranjo simples (sem repetição). Para a 1ª posição temos 10 opções. Para a 2ª temos 9 opções. Para a 3ª temos 8. Para a 4ª temos 7. Multiplicando as possibilidades: 10 * 9 * 8 * 7 = 5.040 senhas."
    },
    {
        id: 15,
        materia: "Matemática",
        assunto: "Função do 2º Grau (Vértice)",
        textoBase: "Uma startup percebeu que o lucro (L) gerado pela venda do seu software de automação comercial varia de acordo com o número de licenças vendidas (x), sendo modelado pela função: L(x) = -x² + 40x - 300.",
        pergunta: "Quantas licenças a startup precisa vender para obter o lucro MÁXIMO?",
        alternativas: {
            A: "10",
            B: "20",
            C: "30",
            D: "40",
            E: "100"
        },
        correta: "B",
        explicacao: "A quantidade que gera o máximo da parábola é o 'x do vértice' (Xv). A fórmula é Xv = -b / (2a). Na função dada, a = -1 e b = 40. Portanto, Xv = -40 / (2 * -1) = -40 / -2 = 20 licenças."
    },
    {
        id: 16,
        materia: "Matemática",
        assunto: "Sistema de Equações",
        textoBase: "Um técnico em IoT comprou componentes eletrônicos. Na primeira loja, ele comprou 5 sensores e 3 arduinos, pagando um total de R$ 340,00. Na segunda loja, que mantinha os mesmos preços, ele comprou 2 sensores e 4 arduinos, pagando R$ 220,00.",
        pergunta: "Baseando-se nesses dados, o valor individual cobrado por um arduino nessas lojas é de:",
        alternativas: {
            A: "R$ 30,00",
            B: "R$ 40,00",
            C: "R$ 50,00",
            D: "R$ 60,00",
            E: "R$ 70,00"
        },
        correta: "A",
        explicacao: "Montando o sistema: 5S + 3A = 340 e 2S + 4A = 220. Dividindo a 2ª equação por 2, temos S + 2A = 110, logo S = 110 - 2A. Substituindo S na 1ª equação: 5(110 - 2A) + 3A = 340 -> 550 - 10A + 3A = 340 -> 7A = 210 -> A = 30. O arduino custa R$ 30,00."
    },
    {
        id: 17,
        materia: "Matemática",
        assunto: "Probabilidade Condicionada",
        textoBase: "Um sistema de segurança de redes possui duas barreiras. O Firewall bloqueia automaticamente 90% das tentativas de invasão. Caso alguma invasão passe pelo Firewall, o Antivírus Local consegue neutralizar 80% dessas ameaças restantes.",
        pergunta: "Se a rede sofrer um ataque simultâneo com 1.000 tentativas de invasão, quantas delas efetivamente conseguirão causar dano ao sistema (ou seja, passar por ambas as barreiras)?",
        alternativas: {
            A: "10",
            B: "20",
            C: "80",
            D: "100",
            E: "200"
        },
        correta: "B",
        explicacao: "Se 1.000 invadem e o firewall bloqueia 90% (900), então 100 passam. Desses 100 que passaram, o antivírus bloqueia 80% (80). Logo, apenas 20 invasões conseguem passar pelas duas barreiras ilesas."
    },
    {
        id: 18,
        materia: "Matemática",
        assunto: "Média Ponderada",
        textoBase: "Para ser aprovado na disciplina de Projetos de TI (TCC), o aluno é submetido a três avaliações com pesos diferentes: Código Fonte (peso 2), Documentação (peso 3) e Defesa para a Banca (peso 5).",
        pergunta: "Se João tirou nota 6 no Código, 7 na Documentação e 9 na Defesa, sua média final será de:",
        alternativas: {
            A: "7,3",
            B: "7,5",
            C: "7,8",
            D: "8,0",
            E: "8,2"
        },
        correta: "C",
        explicacao: "Multiplica-se a nota pelo peso e divide-se pela soma dos pesos (2+3+5 = 10). Média = (6*2 + 7*3 + 9*5) / 10 = (12 + 21 + 45) / 10 = 78 / 10 = 7,8."
    },
    {
        id: 19,
        materia: "Lógica",
        assunto: "Silogismo / Dedução",
        textoBase: "Considere verdadeiras as seguintes premissas de um sistema especialista: \n1. Todos os programadores dominam lógica proposicional. \n2. Alguns analistas de suporte técnico são programadores.",
        pergunta: "A partir da relação lógica dessas duas premissas, é correto concluir obrigatoriamente que:",
        alternativas: {
            A: "Todos os analistas de suporte dominam lógica proposicional.",
            B: "Nenhum analista de suporte domina lógica proposicional.",
            C: "Qualquer pessoa que domina lógica proposicional é um programador.",
            D: "Alguns analistas de suporte dominam lógica proposicional.",
            E: "Quem não é programador não pode dominar a lógica proposicional."
        },
        correta: "D",
        explicacao: "Se há analistas que são programadores (Premissa 2), e se TODO programador sabe lógica (Premissa 1), então com certeza os analistas que são programadores também sabem lógica. Logo, 'Alguns' analistas sabem lógica."
    },
    {
        id: 20,
        materia: "Matemática",
        assunto: "Geometria Plana (Pitágoras)",
        textoBase: "Duas antenas de transmissão Wi-Fi estão posicionadas no teto de um galpão logístico. A distância horizontal (no chão) entre elas é de 12 metros. No entanto, devido à inclinação do telhado, a segunda antena está instalada a uma altura de 5 metros a mais que a primeira antena.",
        pergunta: "A distância real, em linha reta, entre os emissores dessas duas antenas é de:",
        alternativas: {
            A: "11 m",
            B: "13 m",
            C: "15 m",
            D: "17 m",
            E: "19 m"
        },
        correta: "B",
        explicacao: "Formamos um triângulo retângulo onde a base é 12 e a altura é 5. A distância real é a hipotenusa (h). Pelo Teorema de Pitágoras: h² = 12² + 5² -> h² = 144 + 25 -> h² = 169 -> h = √169 -> h = 13 metros."
    },

    //Questoes de Portugues e Ingles
    {
        id: 21,
        materia: "Português",
        assunto: "Interpretação e Compreensão de Texto",
        textoBase: "A Inteligência Artificial (IA) generativa não está apenas automatizando tarefas mecânicas; ela começou a invadir domínios antes considerados exclusivamente humanos, como a redação de textos criativos e a programação de códigos complexos. Especialistas alertam que a questão não é se a IA substituirá o trabalhador, mas sim se o trabalhador que usa IA substituirá aquele que não a utiliza.",
        pergunta: "De acordo com o texto, a principal mudança no paradigma do mercado de trabalho impulsionada pela IA generativa reside na:",
        alternativas: {
            A: "Extinção imediata de todas as profissões que envolvem a programação de códigos.",
            B: "Capacidade das máquinas de sentirem emoções humanas ao redigirem textos.",
            C: "Necessidade de adaptação do profissional humano ao uso das novas ferramentas tecnológicas.",
            D: "Garantia de que tarefas mecânicas não poderão mais ser automatizadas no futuro.",
            E: "Proibição do uso de IA em domínios criativos por questões de direitos autorais."
        },
        correta: "C",
        explicacao: "A resposta está na frase final do texto: o risco real de substituição não vem da máquina em si, mas do profissional concorrente que sabe operar a Inteligência Artificial."
    },
    {
        id: 22,
        materia: "Português",
        assunto: "Coesão e Conectivos",
        textoBase: "A instalação de painéis solares em áreas urbanas tem crescido consideravelmente nos últimos anos. __________, o alto custo inicial dos equipamentos ainda representa uma barreira para a adoção em massa por famílias de baixa renda.",
        pergunta: "Assinale a alternativa que preenche a lacuna corretamente, estabelecendo uma relação de oposição (adversidade) entre as ideias do texto:",
        alternativas: {
            A: "Por conseguinte",
            B: "Portanto",
            C: "Visto que",
            D: "Entretanto",
            E: "Consoante"
        },
        correta: "D",
        explicacao: "A primeira frase mostra algo positivo (crescimento da energia solar), enquanto a segunda mostra algo negativo (alto custo). Para ligar ideias opostas, usamos conjunções adversativas como 'Mas, porém, contudo, todavia, entretanto'."
    },
    {
        id: 23,
        materia: "Inglês",
        assunto: "Leitura Instrumental e Falsos Cognatos",
        textoBase: "In a recent interview, the lead software developer stated: 'Many people think that our new security protocol is fully automated. Actually, it still requires human supervision for critical authorizations.'",
        pergunta: "No contexto da frase, a palavra 'Actually' significa:",
        alternativas: {
            A: "Atualmente",
            B: "Na verdade",
            C: "Aparentemente",
            D: "Aos poucos",
            E: "Antigamente"
        },
        correta: "B",
        explicacao: "Esse é o falso cognato mais cobrado em provas. 'Actually' não significa 'atualmente' (que seria 'currently'). 'Actually' significa 'na verdade' ou 'o fato é que'."
    },
    {
        id: 24,
        materia: "Português",
        assunto: "Figuras de Linguagem",
        textoBase: "Ao ver o amigo digitando a senha do servidor na frente de desconhecidos no meio de um café lotado, o analista de segurança cibernética comentou: 'Parabéns, ótima ideia! Por que você já não imprime a senha em um outdoor no centro da cidade?'",
        pergunta: "A figura de linguagem que predomina na fala do analista de segurança é:",
        alternativas: {
            A: "Metáfora",
            B: "Eufemismo",
            C: "Ironia",
            D: "Pleonasmo",
            E: "Prosopopeia"
        },
        correta: "C",
        explicacao: "A ironia consiste em afirmar exatamente o contrário do que se pensa, geralmente com tom de sarcasmo. Ao dizer 'Parabéns, ótima ideia', ele estava criticando a atitude insegura do amigo."
    },
    {
        id: 25,
        materia: "Português",
        assunto: "Coesão Referencial (Pronomes)",
        textoBase: "A energia eólica e a energia solar são fundamentais para o Brasil. AQUELA depende dos ventos que sopram no litoral nordestino, enquanto ESTA aproveita a alta incidência de radiação no interior do país.",
        pergunta: "Os pronomes destacados em maiúsculo (AQUELA e ESTA) referem-se, respectivamente, a:",
        alternativas: {
            A: "Energia solar e Brasil.",
            B: "Energia eólica e radiação.",
            C: "Energia eólica e energia solar.",
            D: "Energia solar e energia eólica.",
            E: "Brasil e energia eólica."
        },
        correta: "C",
        explicacao: "Quando citamos dois elementos, 'Aquele/Aquela' refere-se ao elemento mencionado primeiro e mais distante na frase (Energia eólica). 'Este/Esta' refere-se ao elemento mencionado por último e mais próximo (Energia solar)."
    },
    {
        id: 26,
        materia: "Inglês",
        assunto: "Compreensão de Texto",
        textoBase: "Cloud computing is the on-demand availability of computer system resources, especially data storage and computing power, without direct active management by the user. Large clouds often have functions distributed over multiple locations, each location being a data center.",
        pergunta: "De acordo com o texto, uma característica central da 'Cloud computing' (computação em nuvem) é:",
        alternativas: {
            A: "Exigir a gestão ativa e constante de hardware físico por parte do usuário final.",
            B: "Limitar o armazenamento de dados a um único servidor localizado na empresa do cliente.",
            C: "Disponibilizar poder de computação e armazenamento de dados sob demanda.",
            D: "Proibir o uso de datacenters distribuídos por múltiplas localizações geográficas.",
            E: "Funcionar exclusivamente offline, sem necessidade de conexão com a rede."
        },
        correta: "C",
        explicacao: "A técnica de leitura (Scanning) no termo 'on-demand availability of computer system resources, especially data storage and computing power' leva diretamente à alternativa C."
    },
    {
        id: 27,
        materia: "Português",
        assunto: "Tipologia Textual",
        textoBase: "Passo 1: Conecte o microcontrolador à porta USB do computador. Passo 2: Abra a IDE e selecione a placa correspondente no menu Ferramentas. Passo 3: Clique no botão 'Upload' para transferir o código compilado para a memória do dispositivo.",
        pergunta: "O trecho acima, por sua estrutura e finalidade, classifica-se como um texto predominantemente:",
        alternativas: {
            A: "Narrativo",
            B: "Dissertativo-argumentativo",
            C: "Descritivo",
            D: "Injuntivo (Instrucional)",
            E: "Poético"
        },
        correta: "D",
        explicacao: "Textos que dão ordens, instruções, receitas ou manuais passo a passo utilizando verbos no imperativo (conecte, abra, clique) são classificados como injuntivos."
    },
    {
        id: 28,
        materia: "Português",
        assunto: "Significado em Contexto (Semântica)",
        textoBase: "Mesmo com o cronograma apertado e os problemas no banco de dados, a equipe de desenvolvedores conseguiu MITIGAR os riscos antes do lançamento do aplicativo.",
        pergunta: "No contexto da frase, a palavra destacada 'MITIGAR' pode ser substituída, sem alteração de sentido, por:",
        alternativas: {
            A: "Aumentar",
            B: "Atenuar",
            C: "Ignorar",
            D: "Complicar",
            E: "Garantir"
        },
        correta: "B",
        explicacao: "Mitigar significa suavizar, diminuir a gravidade, atenuar. É um verbo muito usado no jargão de tecnologia e gerenciamento de projetos (mitigação de riscos)."
    },
    {
        id: 29,
        materia: "Inglês",
        assunto: "Conectivos em Inglês",
        textoBase: "The company's servers were heavily attacked by a DDoS strike. THEREFORE, the IT team had to shut down the external network to prevent data leakage.",
        pergunta: "A conjunção 'THEREFORE', destacada no texto, introduz uma ideia de:",
        alternativas: {
            A: "Adição",
            B: "Oposição",
            C: "Tempo",
            D: "Conclusão",
            E: "Condição"
        },
        correta: "D",
        explicacao: "A palavra 'Therefore' significa 'portanto', 'por isso' ou 'sendo assim'. Ela sempre introduz uma consequência ou conclusão lógica de algo que foi dito antes."
    },
    {
        id: 30,
        materia: "Português",
        assunto: "Conjunções Causais e Explicativas",
        textoBase: "Não foi possível realizar o deploy do site na plataforma de hospedagem, PORQUANTO havia um erro crítico na linha 42 do arquivo JavaScript.",
        pergunta: "O conectivo 'PORQUANTO' estabelece na frase uma relação de:",
        alternativas: {
            A: "Causa/Explicação",
            B: "Finalidade",
            C: "Concessão",
            D: "Consequência",
            E: "Proporção"
        },
        correta: "A",
        explicacao: "A FATEC adora o termo 'porquanto'. Ele tem exatamente o mesmo significado e valor de 'porque', 'visto que' ou 'já que', introduzindo a causa ou explicação de um fato."
    },
    {
        id: 31,
        materia: "Português",
        assunto: "Funções da Linguagem",
        textoBase: "O Índice Nacional de Preços ao Consumidor Amplo (IPCA) fechou o mês de abril com alta de 0,38%, impulsionado principalmente pelo aumento nos preços de alimentos e saúde, informou hoje o Instituto Brasileiro de Geografia e Estatística (IBGE).",
        pergunta: "No trecho jornalístico acima, a função da linguagem predominante é a:",
        alternativas: {
            A: "Emotiva, pois foca nos sentimentos do autor em relação à inflação.",
            B: "Fática, pois testa o canal de comunicação com o leitor.",
            C: "Metalinguística, pois usa o código para explicar o próprio código.",
            D: "Referencial, pois transmite uma informação objetiva sobre a realidade.",
            E: "Poética, pois prioriza o arranjo rítmico e estético das palavras."
        },
        correta: "D",
        explicacao: "Textos jornalísticos, manuais e artigos científicos, que focam em informar dados de forma direta, clara e impessoal (foco no referente/assunto), predominam a função referencial."
    },
    {
        id: 32,
        materia: "Inglês",
        assunto: "Referência Pronominal",
        textoBase: "When developers create new software, THEY often use open-source libraries to speed up the process. However, IT can introduce security vulnerabilities if not monitored properly.",
        pergunta: "No texto, os pronomes destacados 'THEY' e 'IT' referem-se, correta e respectivamente, a:",
        alternativas: {
            A: "Developers / Open-source libraries",
            B: "Software / Process",
            C: "Developers / Process (o ato de usar bibliotecas)",
            D: "Vulnerabilities / Software",
            E: "Libraries / Security"
        },
        correta: "C",
        explicacao: "'They' (eles) refere-se ao sujeito plural anterior: 'developers' (desenvolvedores). 'It' refere-se ao processo ou à ação de usar essas bibliotecas de código aberto que acabou de ser mencionada."
    },
    {
        id: 33,
        materia: "Português",
        assunto: "Variação Linguística e Gênero Textual",
        textoBase: "'Fala, mano! Salve! O beat que vc mandou ontem ficou mto pesado, a base eletrônica bateu certinho com o grave. Tmj, dps te mando a guia com a voz.'",
        pergunta: "O trecho acima, característico de mensagens instantâneas entre produtores musicais, evidencia o uso de:",
        alternativas: {
            A: "Linguagem estritamente formal, exigida em qualquer comunicação escrita.",
            B: "Jargão técnico exclusivo da área de engenharia civil.",
            C: "Variação linguística coloquial e abreviações típicas do meio digital.",
            D: "Linguagem culta padrão, com respeito rigoroso à gramática normativa.",
            E: "Regionalismo isolado, incompreensível para pessoas de outros estados."
        },
        correta: "C",
        explicacao: "Mensagens de WhatsApp e redes sociais utilizam a linguagem coloquial (informal), gírias ('salve', 'pesado') e abreviações ('vc', 'mto', 'tmj') que são marcas da variação do meio digital."
    },
    {
        id: 34,
        materia: "Português",
        assunto: "Pontuação (Uso da Vírgula)",
        textoBase: "O programador, exausto após horas de trabalho na madrugada, finalmente encontrou o erro no código.",
        pergunta: "As vírgulas foram empregadas no trecho acima para:",
        alternativas: {
            A: "Separar um vocativo.",
            B: "Isolar um aposto explicativo.",
            C: "Isolar uma expressão de tempo deslocada.",
            D: "Isolar um predicativo do sujeito deslocado.",
            E: "Separar orações coordenadas aditivas."
        },
        correta: "D",
        explicacao: "A expressão 'exausto após horas de trabalho...' é uma característica, um estado do sujeito 'programador' (predicativo do sujeito). Quando deslocada ou intercalada no meio da oração, ela deve ficar entre vírgulas."
    },
    {
        id: 35,
        materia: "Inglês",
        assunto: "Compreensão de Texto e Vocabulário",
        textoBase: "Solar panels convert sunlight into electricity. Although they are highly efficient in sunny climates, their performance drops significantly during cloudy days or heavy rain.",
        pergunta: "De acordo com o texto, o desempenho dos painéis solares:",
        alternativas: {
            A: "Aumenta gradativamente durante dias de chuva forte.",
            B: "É independente das condições climáticas do ambiente.",
            C: "Sofre uma queda significativa em dias nublados ou de muita chuva.",
            D: "É altamente ineficiente em climas ensolarados.",
            E: "Exige o uso de baterias elétricas para converter a luz solar."
        },
        correta: "C",
        explicacao: "A frase 'their performance drops significantly during cloudy days or heavy rain' traduz-se literalmente para: 'o desempenho deles cai significativamente durante dias nublados ou chuvas fortes'."
    },
    // ==========================================
    // SPRINT 3: CIÊNCIAS DA NATUREZA - FÍSICA (15 Questões)
    // ==========================================
    {
        id: 36,
        materia: "Física",
        assunto: "Ondulatória e Óptica (Fibra Óptica)",
        textoBase: "A infraestrutura de redes modernas depende fortemente de cabos de fibra óptica para transmitir dados em altíssima velocidade. O princípio de funcionamento dessa tecnologia baseia-se em um feixe de luz que viaja pelo interior do núcleo de vidro ou plástico do cabo sem 'vazar' para o exterior, mesmo quando o cabo faz curvas.",
        pergunta: "O fenômeno físico que garante que a luz permaneça confinada no interior do núcleo da fibra óptica é conhecido como:",
        alternativas: {
            A: "Difração da luz.",
            B: "Reflexão total interna.",
            C: "Interferência construtiva.",
            D: "Polarização eletromagnética.",
            E: "Efeito fotoelétrico."
        },
        correta: "B",
        explicacao: "A fibra óptica funciona através da Reflexão Total Interna. A luz bate nas paredes internas do núcleo com um ângulo superior ao ângulo limite, sendo totalmente refletida de volta para dentro, sem sofrer refração para a casca."
    },
    {
        id: 37,
        materia: "Física",
        assunto: "Cinemática (Velocidade Média)",
        textoBase: "Uma empresa de e-commerce iniciou testes de entrega de pequenos componentes eletrônicos utilizando drones autônomos. Um drone parte do centro logístico e precisa entregar um pacote a 12 km de distância, em linha reta. Sabe-se que ele voa a uma velocidade constante de 40 km/h.",
        pergunta: "Desconsiderando o tempo de decolagem e aterrissagem, o tempo exato que o drone levará para chegar ao destino é de:",
        alternativas: {
            A: "12 minutos",
            B: "15 minutos",
            C: "18 minutos",
            D: "20 minutos",
            E: "24 minutos"
        },
        correta: "C",
        explicacao: "Tempo = Distância / Velocidade. Tempo = 12 / 40 = 0,3 horas. Para converter de horas para minutos, multiplicamos por 60: 0,3 * 60 = 18 minutos."
    },
    {
        id: 38,
        materia: "Física",
        assunto: "Termologia (Transmissão de Calor)",
        textoBase: "A sala de servidores de uma empresa de tecnologia possui equipamentos que geram muito calor. Para evitar o superaquecimento, o ar-condicionado é instalado sempre na parte superior (no alto) das paredes da sala.",
        pergunta: "Essa posição do ar-condicionado é justificada por um princípio da Termologia. Assinale a alternativa que explica corretamente esse fenômeno:",
        alternativas: {
            A: "O ar frio é mais denso e desce, enquanto o ar quente gerado pelos servidores é menos denso e sobe, criando correntes de convecção.",
            B: "A irradiação térmica dos servidores é anulada pela proximidade do aparelho no teto.",
            C: "O ar frio possui maior volume específico, forçando o ar quente a se comprimir no chão.",
            D: "O ar frio sobe por capilaridade, resfriando o teto e descendo pelas paredes por condução.",
            E: "A condução térmica no ar ocorre de cima para baixo de forma acelerada devido à gravidade."
        },
        correta: "A",
        explicacao: "O fenômeno é a Convecção Térmica. O ar frio é mais denso (pesado) e desce. O ar quente é menos denso (leve) e sobe. Isso cria um ciclo contínuo que resfria todo o ambiente."
    },
    {
        id: 39,
        materia: "Física",
        assunto: "Mecânica (Conservação de Energia)",
        textoBase: "Nas usinas hidrelétricas, muito comuns na matriz energética brasileira, a água de um reservatório em um nível elevado desce através de tubulações, movimentando as turbinas conectadas a geradores.",
        pergunta: "Durante esse processo de queda e movimento da água, ocorre a seguinte conversão de energia mecânica primária:",
        alternativas: {
            A: "Energia elétrica em energia potencial elástica.",
            B: "Energia térmica em energia cinética.",
            C: "Energia potencial gravitacional em energia cinética.",
            D: "Energia química em energia mecânica.",
            E: "Energia nuclear em energia potencial gravitacional."
        },
        correta: "C",
        explicacao: "A água parada no alto tem Energia Potencial Gravitacional (que depende da altura). Ao cair, essa energia se transforma em Energia Cinética (energia do movimento), que é o que gira a turbina."
    },
    {
        id: 40,
        materia: "Física",
        assunto: "Eletrodinâmica (Associação de Resistores)",
        textoBase: "Um estudante de ADS está montando um painel de LEDs decorativo para o seu quarto. Ele liga 3 fitas de LED de resistências iguais em SÉRIE e as conecta a uma fonte de energia de 12V.",
        pergunta: "Se uma das 3 fitas de LED queimar e romper o circuito, o que acontecerá com as outras duas?",
        alternativas: {
            A: "Brilharão com mais intensidade, pois receberão os 12V sozinhas.",
            B: "Manterão o mesmo brilho, pois estão isoladas da que queimou.",
            C: "Começarão a piscar de forma intermitente.",
            D: "Apagarão imediatamente, pois a corrente elétrica deixará de circular.",
            E: "Brilharão com menos intensidade devido à queda de tensão."
        },
        correta: "D",
        explicacao: "Em um circuito em SÉRIE, existe apenas UM caminho para a corrente elétrica passar. Se um componente queima, o circuito abre e a corrente cessa, apagando todos os outros."
    },
    {
        id: 41,
        materia: "Física",
        assunto: "Eletrodinâmica (Consumo)",
        textoBase: "Na HyperZ, um sistema de monitoramento via rádio consome uma potência de 200 W e fica ligado 24 horas por dia, 30 dias por mês.",
        pergunta: "Qual será o consumo de energia mensal desse sistema em kWh?",
        alternativas: {
            A: "100 kWh",
            B: "120 kWh",
            C: "144 kWh",
            D: "200 kWh",
            E: "240 kWh"
        },
        correta: "C",
        explicacao: "Energia = Potência x Tempo. E = 200 W * (24h * 30 dias) = 200 W * 720 h = 144.000 Wh. Dividindo por 1.000 para transformar em kWh, temos 144 kWh."
    },
    {
        id: 42,
        materia: "Física",
        assunto: "Acústica",
        textoBase: "Muitos programadores utilizam fones de ouvido com tecnologia de Cancelamento Ativo de Ruído (ANC) para manter o foco. Esses fones possuem microfones que captam o barulho externo e geram uma onda sonora artificial.",
        pergunta: "Para que o ruído externo seja 'cancelado', a onda artificial gerada pelo fone deve causar com a onda do ruído um fenômeno de:",
        alternativas: {
            A: "Ressonância",
            B: "Interferência Destrutiva",
            C: "Efeito Doppler",
            D: "Difração Acústica",
            E: "Reflexão Total"
        },
        correta: "B",
        explicacao: "O fone gera uma onda invertida (com a fase oposta) à onda do ruído. Quando a crista de uma se encontra com o vale da outra, ocorre a Interferência Destrutiva, anulando o som."
    },
    {
        id: 43,
        materia: "Física",
        assunto: "Calorimetria e Condução",
        textoBase: "Ao montar um computador, é obrigatório aplicar pasta térmica entre o processador e o cooler metálico (dissipador). A função da pasta não é resfriar por si só, mas sim preencher as microbolhas de ar entre as duas superfícies.",
        pergunta: "Do ponto de vista físico, a pasta térmica é necessária porque o ar (que ela substitui) é considerado um:",
        alternativas: {
            A: "Excelente condutor térmico.",
            B: "Bom condutor elétrico.",
            C: "Mau condutor térmico (isolante).",
            D: "Material de altíssima densidade.",
            E: "Gás com alto calor latente de fusão."
        },
        correta: "C",
        explicacao: "O ar é um excelente isolante térmico (mau condutor). Se houvesse ar entre o processador e o metal, o calor não passaria para o cooler. A pasta térmica retira o ar, permitindo a condução do calor."
    },
    {
        id: 44,
        materia: "Física",
        assunto: "Eletromagnetismo",
        textoBase: "A energia eólica cresce no Brasil. Nesses sistemas, a força do vento gira as pás de um cata-vento que estão acopladas a um eixo contendo um ímã dentro de uma bobina de fios de cobre.",
        pergunta: "A geração de corrente elétrica a partir da variação do fluxo magnético (movimento do ímã dentro da bobina) é explicada pela:",
        alternativas: {
            A: "Lei de Coulomb",
            B: "Lei de Faraday (Indução Eletromagnética)",
            C: "Primeira Lei da Termodinâmica",
            D: "Efeito Fotoelétrico",
            E: "Lei de Ohm"
        },
        correta: "B",
        explicacao: "A Lei de Faraday-Lenz explica a indução eletromagnética: a variação de um campo magnético perto de um condutor (bobina) induz uma corrente elétrica nele. É a base de todos os geradores."
    },
    {
        id: 45,
        materia: "Física",
        assunto: "Leis de Newton (Inércia)",
        textoBase: "Um usuário de um patinete elétrico viaja a 25 km/h em uma ciclovia. Subitamente, a roda dianteira trava em um buraco, fazendo com que o patinete pare bruscamente, mas o corpo do usuário é arremessado para frente.",
        pergunta: "Esse evento é explicado pela:",
        alternativas: {
            A: "Terceira Lei de Newton (Ação e Reação)",
            B: "Segunda Lei de Newton (Princípio Fundamental da Dinâmica)",
            C: "Primeira Lei de Newton (Princípio da Inércia)",
            D: "Lei da Gravitação Universal",
            E: "Lei de Hooke"
        },
        correta: "C",
        explicacao: "A Primeira Lei de Newton (Inércia) diz que um corpo em movimento tende a continuar em movimento retilíneo uniforme a menos que uma força atue sobre ele. O patinete parou, mas o corpo do usuário manteve o movimento."
    },
    {
        id: 46,
        materia: "Física",
        assunto: "Efeito Joule",
        textoBase: "Em datacenters mais antigos, quando o fluxo de dados e o processamento são extremos, a passagem de altas correntes elétricas pelos cabos de cobre gera um aquecimento considerável dos fios.",
        pergunta: "A transformação da energia elétrica em energia térmica devido à resistência do material condutor é denominada:",
        alternativas: {
            A: "Efeito Peltier",
            B: "Efeito Seebeck",
            C: "Efeito Joule",
            D: "Efeito Estufa",
            E: "Efeito Doppler"
        },
        correta: "C",
        explicacao: "O Efeito Joule é o aquecimento de um condutor provocado pela passagem de corrente elétrica devido às colisões dos elétrons com os átomos do material."
    },
    {
        id: 47,
        materia: "Física",
        assunto: "Óptica (Refração e Lentes)",
        textoBase: "Para reduzir a fadiga visual, muitos desenvolvedores usam óculos com lentes especiais que possuem um filtro contra a 'luz azul' emitida por monitores de computador.",
        pergunta: "A luz azul, em comparação com a luz vermelha visível, possui:",
        alternativas: {
            A: "Menor frequência e menor energia.",
            B: "Maior comprimento de onda.",
            C: "Maior frequência e maior energia.",
            D: "A mesma frequência, mudando apenas a velocidade no vácuo.",
            E: "Menor índice de refração em vidros comuns."
        },
        correta: "C",
        explicacao: "No espectro visível, a cor vermelha tem o maior comprimento de onda e menor frequência/energia. O azul/violeta tem menor comprimento de onda, mas possui maior frequência e maior energia, por isso cansa mais os olhos."
    },
    {
        id: 48,
        materia: "Física",
        assunto: "Cinemática (Gráficos)",
        textoBase: "A telemetria de um caminhão logístico de equipamentos solares gerou um gráfico de Velocidade (v) em função do Tempo (t). Durante 2 horas de viagem na rodovia, o gráfico mostra uma linha reta horizontal no valor de 80 km/h.",
        pergunta: "No gráfico v × t, a grandeza física representada pela área abaixo da linha reta do gráfico corresponde a:",
        alternativas: {
            A: "Aceleração do caminhão.",
            B: "Força resultante do motor.",
            C: "Deslocamento (distância) percorrido.",
            D: "Trabalho mecânico realizado.",
            E: "Impulso aplicado ao veículo."
        },
        correta: "C",
        explicacao: "Em qualquer gráfico de Velocidade x Tempo, o cálculo da área (neste caso, um retângulo de base = tempo e altura = velocidade) resulta numericamente na distância percorrida (ΔS)."
    },
    {
        id: 49,
        materia: "Física",
        assunto: "Eletrodinâmica (Ligação Paralela)",
        textoBase: "Na sala de um TI, há 5 computadores conectados a uma mesma régua de tomadas. O fato de ligar ou desligar um computador não afeta o funcionamento dos outros.",
        pergunta: "Isso ocorre porque os componentes elétricos de uma residência ou escritório são associados em:",
        alternativas: {
            A: "Série, para que a corrente seja a mesma em todos.",
            B: "Paralelo, para que a tensão (voltagem) seja a mesma em todos.",
            C: "Série, para dividir a tensão total da rede.",
            D: "Misto, priorizando a economia de energia.",
            E: "Paralelo, para que a corrente elétrica seja igual em todas as tomadas."
        },
        correta: "B",
        explicacao: "Instalações residenciais são sempre em paralelo. Isso garante que todos os equipamentos recebam a mesma tensão (ex: 110V ou 220V) e funcionem de maneira independente."
    },
    {
        id: 50,
        materia: "Física",
        assunto: "Pressão e Hidrostática",
        textoBase: "Para conectar continentes, empresas de TI utilizam gigantescos cabos submarinos de fibra óptica. Esses cabos precisam ser extremamente reforçados, pois a pressão da água do mar aumenta conforme a profundidade do oceano.",
        pergunta: "A lei física que estabelece que a pressão no interior de um líquido em repouso aumenta linearmente com a profundidade é o Teorema de:",
        alternativas: {
            A: "Arquimedes (Empuxo)",
            B: "Pascal",
            C: "Stevin",
            D: "Torricelli",
            E: "Bernoulli"
        },
        correta: "C",
        explicacao: "O Teorema de Stevin (P = d * g * h) determina que a pressão hidrostática exercida por um fluido depende da sua densidade, da gravidade e da profundidade (h)."
    },

    // ==========================================
    // SPRINT 3: CIÊNCIAS DA NATUREZA - QUÍMICA (15 Questões)
    // ==========================================
    {
        id: 51,
        materia: "Química",
        assunto: "Separação de Misturas",
        textoBase: "A reciclagem de lixo eletrônico (e-waste) é vital para a economia sustentável. Para recuperar o cobre presente em placas-mãe trituradas que estão misturadas com pedaços de plástico, uma usina joga a mistura triturada em um tanque com água.",
        pergunta: "Sabendo que o plástico flutua e o cobre afunda na água, o método físico de separação de misturas utilizado nesse processo é a:",
        alternativas: {
            A: "Filtração",
            B: "Levigação",
            C: "Decantação (ou Flotação)",
            D: "Destilação fracionada",
            E: "Sublimação"
        },
        correta: "C",
        explicacao: "Adicionar um líquido de densidade intermediária para separar dois sólidos (onde um afunda e outro flutua) é o princípio da Flotação. O cobre denso sofre decantação e o plástico flutua."
    },
    {
        id: 52,
        materia: "Química",
        assunto: "Eletroquímica (Pilhas e Baterias)",
        textoBase: "Os veículos elétricos e os smartphones utilizam baterias de íon-lítio devido à sua alta capacidade de armazenamento. Durante o uso do celular (descarga da bateria), ocorre uma reação de oxirredução com transferência de elétrons.",
        pergunta: "O princípio fundamental que rege o funcionamento de qualquer bateria durante a sua descarga é:",
        alternativas: {
            A: "A transformação de energia elétrica em energia química de forma não-espontânea.",
            B: "A transformação de energia térmica em energia nuclear.",
            C: "A transformação de energia química em energia elétrica por meio de uma reação espontânea.",
            D: "A neutralização de um ácido por uma base.",
            E: "O aquecimento do lítio gerando ondas eletromagnéticas."
        },
        correta: "C",
        explicacao: "Pilhas e baterias são células galvânicas. Durante a descarga (uso), elas realizam uma reação química espontânea que gera corrente elétrica (energia química -> elétrica)."
    },
    {
        id: 53,
        materia: "Química",
        assunto: "Funções Inorgânicas (Ácidos e Bases)",
        textoBase: "O descarte incorreto de baterias de chumbo-ácido no solo causa graves danos ambientais, pois o ácido sulfúrico (H₂SO₄) vaza e altera as propriedades químicas da terra.",
        pergunta: "O vazamento desse composto fará com que o pH do solo sofra qual alteração?",
        alternativas: {
            A: "O pH do solo irá diminuir, tornando-se menor que 7.",
            B: "O pH do solo irá aumentar, ultrapassando 7.",
            C: "O pH do solo se fixará exatamente em 7 (neutro).",
            D: "O pH não sofrerá alteração, pois ácidos orgânicos são inofensivos.",
            E: "O pH diminuirá, mas a terra se tornará alcalina."
        },
        correta: "A",
        explicacao: "A escala de pH vai de 0 a 14. O valor 7 é neutro. Valores menores que 7 indicam acidez. O ácido sulfúrico é forte e fará o pH do solo cair."
    },
    {
        id: 54,
        materia: "Química",
        assunto: "Química Orgânica (Álcoois e Hidrocarbonetos)",
        textoBase: "Para reduzir a dependência de combustíveis fósseis, muitos veículos no Brasil são abastecidos com etanol (álcool etílico). Ao contrário da gasolina, que é uma mistura de hidrocarbonetos derivada do petróleo, o etanol é produzido a partir da cana-de-açúcar.",
        pergunta: "Do ponto de vista químico, a principal diferença estrutural que classifica o etanol como um álcool e não como um hidrocarboneto é a presença do grupo funcional:",
        alternativas: {
            A: "Carboxila (-COOH)",
            B: "Hidroxila (-OH) ligada a um carbono saturado",
            C: "Carbonila (C=O)",
            D: "Amina (-NH2)",
            E: "Benzeno (anel aromático)"
        },
        correta: "B",
        explicacao: "Hidrocarbonetos possuem apenas Carbono e Hidrogênio. Álcoois possuem o grupo Hidroxila (-OH) ligado a um carbono que só faz ligações simples (saturado)."
    },
    {
        id: 55,
        materia: "Química",
        assunto: "Tabela Periódica e Semicondutores",
        textoBase: "A base da computação moderna, presente em todos os microprocessadores e células de painéis fotovoltaicos, é um metaloide abundante na crosta terrestre. Ele possui condutividade elétrica intermediária entre a de um metal e a de um isolante.",
        pergunta: "A qual elemento químico o texto se refere?",
        alternativas: {
            A: "Ouro (Au)",
            B: "Cobre (Cu)",
            C: "Silício (Si)",
            D: "Carbono (C)",
            E: "Lítio (Li)"
        },
        correta: "C",
        explicacao: "O Silício (Si) é o semicondutor mais utilizado no mundo, sendo o material base para a indústria de tecnologia (chips e painéis solares)."
    },
    {
        id: 56,
        materia: "Química",
        assunto: "Ligações Químicas",
        textoBase: "Cabos de rede e fiações elétricas utilizam cobre (Cu) no seu interior devido à sua excelente capacidade de conduzir eletricidade, diferentemente do plástico que o reveste.",
        pergunta: "O modelo químico que explica a alta condutividade elétrica dos metais é a existência de:",
        alternativas: {
            A: "Uma rede de íons negativos isolados.",
            B: "Ligações covalentes altamente polarizadas.",
            C: "Um 'mar de elétrons' livres movendo-se entre cátions fixos.",
            D: "Ligações iônicas que se desfazem a temperatura ambiente.",
            E: "Forças de London extremamente intensas."
        },
        correta: "C",
        explicacao: "A Ligação Metálica é explicada pelo modelo do 'mar de elétrons'. Os elétrons da camada de valência dos metais ficam deslocalizados (livres), o que permite a condução de corrente elétrica."
    },
    {
        id: 57,
        materia: "Química",
        assunto: "Termoquímica (Combustão)",
        textoBase: "A matriz energética de muitos países ainda depende da queima do carvão mineral em usinas termelétricas, liberando grandes quantidades de CO₂ na atmosfera e muita energia térmica para aquecer a água.",
        pergunta: "Classificamos a reação de queima (combustão) do carvão mineral como um processo:",
        alternativas: {
            A: "Endotérmico, pois absorve calor do ambiente.",
            B: "Exotérmico, pois libera calor para o ambiente.",
            C: "Isotérmico, pois não há variação de energia térmica.",
            D: "Catalítico, pois não consome oxigênio.",
            E: "Reversível, retornando ao estado de carvão no resfriamento."
        },
        correta: "B",
        explicacao: "Toda reação de queima (combustão) libera calor e energia para o ambiente. Reações que liberam energia são chamadas de Exotérmicas (ΔH negativo)."
    },
    {
        id: 58,
        materia: "Química",
        assunto: "Polímeros",
        textoBase: "Os gabinetes de computadores, teclados e o isolamento de fios são amplamente fabricados utilizando PVC e Polietileno. Esses materiais são duráveis e baratos, mas demoram séculos para se decompor na natureza.",
        pergunta: "Do ponto de vista químico, esses plásticos são classificados como:",
        alternativas: {
            A: "Metais de transição sintéticos.",
            B: "Compostos inorgânicos de alto peso molecular.",
            C: "Polímeros, que são macromoléculas formadas pela união de monômeros.",
            D: "Hidratos de carbono complexos.",
            E: "Ligas metálicas flexíveis."
        },
        correta: "C",
        explicacao: "Plásticos são polímeros (do grego: muitas partes). São macromoléculas sintéticas, derivadas do petróleo, formadas pela repetição de milhares de unidades pequenas (monômeros)."
    },
    {
        id: 59,
        materia: "Química",
        assunto: "Cinética Química (Catalisadores)",
        textoBase: "Para reduzir a poluição do ar urbano, todos os carros modernos possuem um 'catalisador' no escapamento, que converte gases tóxicos em gases menos nocivos de forma muito rápida.",
        pergunta: "Qual é a função exata de um catalisador em uma reação química?",
        alternativas: {
            A: "Aumentar a energia de ativação e ser consumido na reação.",
            B: "Diminuir a energia de ativação, acelerando a reação sem ser consumido.",
            C: "Aumentar o calor liberado (entalpia) da reação química.",
            D: "Neutralizar ácidos fortes transformando-os em bases.",
            E: "Diminuir a velocidade da reação para evitar explosões."
        },
        correta: "B",
        explicacao: "O catalisador acelera a velocidade da reação química ao criar um caminho alternativo com menor Energia de Ativação, e ele não é consumido (gasto) durante o processo."
    },
    {
        id: 60,
        materia: "Química",
        assunto: "Leis Ponderais (Estequiometria)",
        textoBase: "O químico francês Lavoisier realizou diversos experimentos de queima de materiais dentro de recipientes hermeticamente fechados (vidros selados).",
        pergunta: "Nesses experimentos, ele observou que a massa total do recipiente antes da reação e a massa total após a reação era:",
        alternativas: {
            A: "Sempre menor, pois os gases vazavam do vidro.",
            B: "Sempre maior, pois o calor adicionava massa ao sistema.",
            C: "Exatamente a mesma, provando a Lei da Conservação das Massas.",
            D: "Aleatória, dependendo de qual material era queimado.",
            E: "Reduzida pela metade devido à destruição dos átomos."
        },
        correta: "C",
        explicacao: "A Lei de Lavoisier é famosa pela frase: 'Na natureza, nada se cria, nada se perde, tudo se transforma'. A massa dos reagentes é sempre igual à massa dos produtos em um sistema fechado."
    },
    {
        id: 61,
        materia: "Química",
        assunto: "Radioatividade",
        textoBase: "A energia nuclear é uma matriz energética poderosa, mas que gera o preocupante 'lixo radioativo', composto por isótopos de elementos pesados como o Urânio-235.",
        pergunta: "A energia em reatores nucleares é gerada através do processo em que o núcleo de um átomo pesado é bombardeado por um nêutron e se divide em dois núcleos menores, liberando muita energia. Esse processo chama-se:",
        alternativas: {
            A: "Fusão Nuclear",
            B: "Fissão Nuclear",
            C: "Decaimento Alfa",
            D: "Efeito Termiônico",
            E: "Eletrólise Ígnea"
        },
        correta: "B",
        explicacao: "A quebra (divisão) de um núcleo pesado em dois menores é chamada de FISSÃO nuclear. (A fusão nuclear, por outro lado, é a união de átomos leves, como ocorre no Sol)."
    },
    {
        id: 62,
        materia: "Química",
        assunto: "Soluções e Concentração",
        textoBase: "Durante um experimento de tratamento de água para o resfriamento de maquinário, um técnico dilui 40 gramas de um sal inorgânico em água suficiente para formar 2 Litros de solução.",
        pergunta: "Qual é a concentração comum (em g/L) dessa solução?",
        alternativas: {
            A: "10 g/L",
            B: "20 g/L",
            C: "40 g/L",
            D: "60 g/L",
            E: "80 g/L"
        },
        correta: "B",
        explicacao: "A fórmula da concentração comum é C = massa do soluto / Volume da solução. C = 40g / 2L = 20 g/L."
    },
    {
        id: 63,
        materia: "Química",
        assunto: "Estudo dos Gases",
        textoBase: "Em freezers e ares-condicionados, existe um gás refrigerante contido em um tubo metálico. O compressor do equipamento diminui bruscamente o volume ocupado por esse gás em temperatura constante.",
        pergunta: "De acordo com as leis dos gases ideais (Lei de Boyle), se o volume de um gás diminui mantendo a temperatura constante, a sua pressão:",
        alternativas: {
            A: "Permanece inalterada.",
            B: "Diminui proporcionalmente.",
            C: "Aumenta proporcionalmente.",
            D: "Torna-se zero.",
            E: "Gera a liquefação instantânea do material do tubo."
        },
        correta: "C",
        explicacao: "Pressão e Volume são grandezas inversamente proporcionais em transformações isotérmicas. Se você espreme (diminui o volume) de um gás, ele aperta as paredes com mais força (aumenta a pressão)."
    },
    {
        id: 64,
        materia: "Química",
        assunto: "Funções Orgânicas (Ácidos Carboxílicos)",
        textoBase: "A indústria de limpeza produz um desincrustante poderoso para maquinários que contém ácido acético (o mesmo componente do vinagre de cozinha).",
        pergunta: "Quimicamente, a função orgânica 'Ácido Carboxílico' é identificada pela presença do grupo funcional:",
        alternativas: {
            A: "Carboxila (-COOH)",
            B: "Hidroxila (-OH)",
            C: "Carbonila no meio da cadeia (-C(=O)-)",
            D: "Amina primária (-NH2)",
            E: "Halogênio (-Cl ou -F)"
        },
        correta: "A",
        explicacao: "Todo ácido orgânico (ácido carboxílico) possui o grupo funcional Carboxila (-COOH) na extremidade de sua cadeia de carbonos."
    },
    {
        id: 65,
        materia: "Química",
        assunto: "Química Verde e Sustentabilidade",
        textoBase: "Os datacenters da Google e Microsoft possuem metas para se tornarem 'Carbono Neutro' (Net Zero) até 2030, investindo em fontes renováveis.",
        pergunta: "No contexto da Química Sustentável, uma matriz energética considerada 'limpa' ou 'renovável' se diferencia das matrizes fósseis porque:",
        alternativas: {
            A: "Não gera eletricidade, mas apenas energia mecânica.",
            B: "Suas fontes de matéria-prima (como sol, vento e biomassa) não se esgotam em escala de tempo humana e possuem baixa emissão de gases estufa.",
            C: "Seus resíduos são sempre elementos radioativos encapsulados.",
            D: "Só funciona durante os períodos de sol intenso.",
            E: "Exige o consumo de petróleo para iniciar o seu ciclo de geração."
        },
        correta: "B",
        explicacao: "Fontes renováveis são aquelas que a natureza repõe constantemente (Sol, Vento, Água). Além disso, não emitem (ou emitem muito pouco) gases do efeito estufa em comparação ao petróleo e carvão."
    },
// ==========================================
    // SPRINT 4: CIÊNCIAS DA NATUREZA - BIOLOGIA (15 Questões)
    // ==========================================
    {
        id: 66,
        materia: "Biologia",
        assunto: "Ciclos Biogeoquímicos (Carbono)",
        textoBase: "Muitas empresas de tecnologia estão substituindo frotas de veículos a diesel por veículos elétricos ou movidos a biocombustíveis (como o etanol). O uso de biocombustíveis é considerado mais vantajoso do ponto de vista ambiental em comparação aos combustíveis fósseis.",
        pergunta: "Essa vantagem ecológica do etanol ocorre porque:",
        alternativas: {
            A: "A queima do etanol não produz gás carbônico (CO₂).",
            B: "O CO₂ liberado na queima do etanol foi previamente absorvido pela planta durante a fotossíntese.",
            C: "O etanol libera oxigênio (O₂) durante a sua combustão nos motores.",
            D: "A produção de etanol não necessita de áreas agrícolas, preservando as florestas.",
            E: "O etanol destrói a camada de ozônio em vez de causar o efeito estufa."
        },
        correta: "B",
        explicacao: "O etanol é renovável. A cana-de-açúcar, enquanto cresce, retira CO₂ da atmosfera pela fotossíntese. Quando o carro queima o etanol, ele devolve esse mesmo CO₂, neutralizando o ciclo. Já o petróleo adiciona um carbono que estava enterrado há milhões de anos."
    },
    {
        id: 67,
        materia: "Biologia",
        assunto: "Citologia (Organelas Cellulares)",
        textoBase: "Um computador precisa de uma fonte de alimentação para converter a energia da tomada em energia utilizável pelos seus componentes. Da mesma forma, as células eucariontes possuem uma organela responsável por gerar a 'moeda energética' da célula (o ATP) através da respiração celular.",
        pergunta: "Qual é o nome dessa organela celular?",
        alternativas: {
            A: "Ribossomo",
            B: "Complexo de Golgi",
            C: "Mitocôndria",
            D: "Lisossomo",
            E: "Retículo Endoplasmático"
        },
        correta: "C",
        explicacao: "A mitocôndria é a 'usina de energia' da célula. Ela realiza a respiração celular, quebrando a glicose na presença de oxigênio para produzir energia (ATP)."
    },
    {
        id: 68,
        materia: "Biologia",
        assunto: "Microbiologia e Saúde (Bactérias)",
        textoBase: "O desenvolvimento de antibióticos foi um marco na medicina moderna. No entanto, o uso indiscriminado desses medicamentos na pecuária e por humanos tem gerado um grave problema de saúde pública: as 'superbactérias'.",
        pergunta: "Do ponto de vista biológico e evolutivo, o surgimento de superbactérias é explicado pela:",
        alternativas: {
            A: "Mutação induzida pelo próprio antibiótico, que altera o DNA da bactéria para fortalecê-la.",
            B: "Seleção natural, onde o antibiótico elimina as bactérias sensíveis e sobrevivem apenas as que já possuíam resistência genética.",
            C: "Reprodução sexuada entre vírus e bactérias gerando híbridos imortais.",
            D: "Capacidade das bactérias de fagocitar as moléculas do antibiótico e usá-las como alimento.",
            E: "Imunidade adquirida pelo uso de vacinas contra infecções bacterianas."
        },
        correta: "B",
        explicacao: "A FATEC ama a teoria de Darwin. O antibiótico NÃO causa a mutação. A mutação ocorre ao acaso. O antibiótico atua como agente seletor: ele mata as fracas, e as bactérias que já eram mutantes e resistentes sobrevivem e se reproduzem."
    },
    {
        id: 69,
        materia: "Biologia",
        assunto: "Ecologia (Biomas Brasileiros)",
        textoBase: "O Brasil possui uma vasta diversidade de biomas. Um deles, localizado predominantemente na região central do país, é caracterizado por árvores de troncos tortuosos, cascas grossas e raízes profundas, sendo frequentemente ameaçado pelo avanço da fronteira agrícola (soja e gado).",
        pergunta: "O texto descreve as características de qual bioma brasileiro?",
        alternativas: {
            A: "Mata Atlântica",
            B: "Caatinga",
            C: "Pantanal",
            D: "Cerrado",
            E: "Pampa"
        },
        correta: "D",
        explicacao: "Árvores de troncos tortuosos, cascas grossas (proteção contra o fogo natural) e raízes profundas para buscar água em lençóis freáticos são adaptações clássicas da vegetação do Cerrado."
    },
    {
        id: 70,
        materia: "Biologia",
        assunto: "Imunologia (Vacina x Soro)",
        textoBase: "Um trabalhador rural, ao manusear equipamentos, foi picado por uma cobra peçonhenta e levado às pressas ao hospital. Para salvar sua vida, os médicos administraram um composto contendo anticorpos prontos para neutralizar o veneno.",
        pergunta: "Nesse caso específico, a substância administrada ao paciente foi:",
        alternativas: {
            A: "Uma vacina, que atua de forma preventiva gerando memória imunológica.",
            B: "Um soro, que promove uma imunização passiva e curativa.",
            C: "Um antibiótico de largo espectro contra vírus.",
            D: "Um antígeno, para estimular a produção de anticorpos pelo próprio paciente.",
            E: "Um analgésico forte para inibir a ação neurológica da picada."
        },
        correta: "B",
        explicacao: "Vacina é PREVENTIVA (contém o antígeno morto/enfraquecido para o corpo criar anticorpos). Soro é CURATIVO (já contém os anticorpos prontos para agir imediatamente, como no caso do veneno de cobra)."
    },
    {
        id: 71,
        materia: "Biologia",
        assunto: "Fisiologia Humana (Sistema Endócrino)",
        textoBase: "Durante a apresentação do seu TCC de Análise e Desenvolvimento de Sistemas, um aluno sente o coração acelerar, a pupila dilatar e a respiração ficar mais ofegante. Isso ocorre devido à liberação de um hormônio que prepara o corpo para uma situação de 'luta ou fuga'.",
        pergunta: "Qual é o hormônio responsável por essas reações fisiológicas?",
        alternativas: {
            A: "Insulina",
            B: "Glucagon",
            C: "Adrenalina (Epinefrina)",
            D: "Testosterona",
            E: "Tiroxina"
        },
        correta: "C",
        explicacao: "A adrenalina (produzida pelas glândulas suprarrenais) é o hormônio do estresse e das emoções fortes. Ela acelera os batimentos cardíacos e redireciona o sangue para os músculos, preparando o corpo para reagir rapidamente."
    },
    {
        id: 72,
        materia: "Biologia",
        assunto: "Poluição Ambiental (Eutrofização)",
        textoBase: "A agricultura moderna utiliza grandes quantidades de fertilizantes ricos em nitrogênio e fósforo. Quando a chuva lava o solo, esses nutrientes escoam para rios e lagos, causando a proliferação excessiva de algas na superfície da água.",
        pergunta: "A proliferação superficial de algas bloqueia a luz solar e desencadeia a morte de organismos no fundo do lago, resultando na falta de oxigênio na água. Esse fenômeno ambiental é chamado de:",
        alternativas: {
            A: "Biomagnificação trófica.",
            B: "Inversão térmica.",
            C: "Chuva ácida.",
            D: "Eutrofização.",
            E: "Efeito estufa."
        },
        correta: "D",
        explicacao: "A Eutrofização ocorre quando há excesso de nutrientes (como fertilizantes ou esgoto) na água. As algas proliferam na superfície, tapam a luz do sol, as plantas do fundo morrem, as bactérias decompositoras se multiplicam e consomem todo o oxigênio da água, matando os peixes."
    },
    {
        id: 73,
        materia: "Biologia",
        assunto: "Citologia (Membrana Plasmática)",
        textoBase: "Na área de TI, um Firewall é uma barreira de segurança que monitora o tráfego de rede, permitindo ou bloqueando dados específicos. Na biologia celular, existe uma estrutura que desempenha função semelhante, selecionando o que entra e o que sai da célula.",
        pergunta: "Essa propriedade de controle da membrana celular é biologicamente denominada:",
        alternativas: {
            A: "Fagocitose passiva.",
            B: "Permeabilidade seletiva.",
            C: "Parede celular celulósica.",
            D: "Osmose reversa.",
            E: "Divisão mitótica."
        },
        correta: "B",
        explicacao: "A membrana plasmática envolve todas as células e possui a propriedade de Permeabilidade Seletiva (ou semipermeabilidade), controlando ativamente a entrada de nutrientes e a saída de resíduos, como se fosse um 'firewall' da célula."
    },
    {
        id: 74,
        materia: "Biologia",
        assunto: "Genética (DNA e RNA)",
        textoBase: "O armazenamento de dados em moléculas de DNA sintético é uma aposta futurista das big techs, já que um único grama de DNA pode armazenar petabytes de dados codificados em suas bases nitrogenadas.",
        pergunta: "Na biologia natural, as bases nitrogenadas que compõem a molécula de DNA e que se pareiam de forma específica são:",
        alternativas: {
            A: "Adenina com Uracila; Citosina com Guanina.",
            B: "Adenina com Timina; Citosina com Guanina.",
            C: "Timina com Uracila; Citosina com Guanina.",
            D: "Adenina com Guanina; Timina com Citosina.",
            E: "Guanina com Uracila; Adenina com Timina."
        },
        correta: "B",
        explicacao: "No DNA, as bases nitrogenadas se ligam seguindo a regra A-T e C-G (Adenina liga com Timina; Citosina liga com Guanina). A Uracila (U) é uma base exclusiva do RNA, substituindo a Timina."
    },
    {
        id: 75,
        materia: "Biologia",
        assunto: "Metabolismo Celular (Fermentação)",
        textoBase: "Para gerar energia (biogás) a partir do lixo orgânico, utiliza-se a decomposição da matéria por bactérias em biodigestores fechados, onde não há a presença de gás oxigênio.",
        pergunta: "Esse processo de obtenção de energia na ausência de oxigênio é conhecido como:",
        alternativas: {
            A: "Respiração aeróbica.",
            B: "Fotossíntese oxidativa.",
            C: "Fermentação (ou respiração anaeróbica).",
            D: "Quimiossíntese luminosa.",
            E: "Ciclo de Krebs."
        },
        correta: "C",
        explicacao: "A obtenção de energia a partir da glicose na ausência de oxigênio (ambiente anaeróbico) é chamada de Fermentação. Dependendo do organismo, pode gerar álcool, ácido lático ou gases (biogás)."
    },
    {
        id: 76,
        materia: "Biologia",
        assunto: "Genética (Herança ligada ao Sexo)",
        textoBase: "O daltonismo (dificuldade em distinguir certas cores, como o vermelho e o verde) é um distúrbio genético mais comum em homens do que em mulheres.",
        pergunta: "Essa maior incidência no sexo masculino ocorre porque o gene recessivo causador do daltonismo está localizado no cromossomo:",
        alternativas: {
            A: "Autossômico, presente em igual quantidade em homens e mulheres.",
            B: "Y, o que torna impossível que mulheres tenham a doença.",
            C: "X, fazendo com que o homem (XY) precise de apenas um gene mutante para manifestar a doença.",
            D: "Mendeliano, dependendo de fatores ambientais para ser ativado.",
            E: "X, fazendo com que a mulher (XX) manifeste a doença mesmo sendo heterozigota."
        },
        correta: "C",
        explicacao: "Herança ligada ao cromossomo X. Como as mulheres são XX, para serem daltônicas precisam de dois cromossomos afetados (XdXd). Os homens são XY, logo, apenas um cromossomo X com o defeito (XdY) já os torna daltônicos."
    },
    {
        id: 77,
        materia: "Biologia",
        assunto: "Botânica (Fisiologia Vegetal)",
        textoBase: "Sistemas de irrigação inteligente utilizam sensores de umidade no solo para evitar o desperdício de água. Nas plantas, a perda de água na forma de vapor ocorre principalmente nas folhas, por meio de pequenas aberturas reguláveis.",
        pergunta: "O nome dessas estruturas presentes nas folhas, que se abrem e fecham para realizar as trocas gasosas e a transpiração, é:",
        alternativas: {
            A: "Cloroplastos.",
            B: "Estômatos.",
            C: "Lenticelas.",
            D: "Xilemas.",
            E: "Raízes adventícias."
        },
        correta: "B",
        explicacao: "Os estômatos são pequenos poros localizados na epiderme das folhas. Eles abrem e fecham para permitir a entrada de CO2 (para fotossíntese) e a saída de O2 e água em forma de vapor (transpiração)."
    },
    {
        id: 78,
        materia: "Biologia",
        assunto: "Parasitologia e Doenças",
        textoBase: "O Aedes aegypti é um vetor que se adapta muito bem ao ambiente urbano, reproduzindo-se em água limpa e parada. O uso de aplicativos para mapear focos do mosquito ajuda no controle sanitário.",
        pergunta: "Assinale a alternativa que contém APENAS doenças transmitidas por esse mosquito:",
        alternativas: {
            A: "Dengue, Malária e Febre Amarela.",
            B: "Zika, Chikungunya e Malária.",
            C: "Dengue, Zika e Chikungunya.",
            D: "Doença de Chagas, Febre Amarela e Dengue.",
            E: "Leishmaniose, Zika e Dengue."
        },
        correta: "C",
        explicacao: "O Aedes aegypti transmite os vírus causadores da Dengue, Zika, Febre Chikungunya e da Febre Amarela urbana. (Malária é transmitida pelo mosquito Anopheles, e a Doença de Chagas pelo barbeiro)."
    },
    {
        id: 79,
        materia: "Biologia",
        assunto: "Bioquímica (Enzimas)",
        textoBase: "No processamento de alimentos na indústria biotecnológica, utilizam-se substâncias químicas naturais que agem como catalisadores, acelerando a quebra de nutrientes sem alterar a temperatura do ambiente.",
        pergunta: "Na biologia, esses catalisadores orgânicos, que geralmente são formados por proteínas e possuem alta especificidade (chave-fechadura), são chamados de:",
        alternativas: {
            A: "Glicídios.",
            B: "Vitaminas.",
            C: "Lipídios.",
            D: "Enzimas.",
            E: "Esteroides."
        },
        correta: "D",
        explicacao: "As enzimas são proteínas especiais que atuam como catalisadores biológicos. Elas aceleram as reações químicas no corpo e atuam no sistema 'chave-fechadura', onde cada enzima só age em um substrato específico."
    },
    {
        id: 80,
        materia: "Biologia",
        assunto: "Ecologia (Relações Ecológicas)",
        textoBase: "Nas raízes das plantas leguminosas (como a soja), habitam bactérias do gênero Rhizobium. As bactérias fixam o nitrogênio do ar e o fornecem para a planta, enquanto a planta fornece nutrientes orgânicos (glicose) para as bactérias. Ambos se beneficiam e a separação causa prejuízo para as duas espécies.",
        pergunta: "Essa relação ecológica interespecífica é classificada como:",
        alternativas: {
            A: "Mutualismo.",
            B: "Comensalismo.",
            C: "Parasitismo.",
            D: "Amensalismo.",
            E: "Competição."
        },
        correta: "A",
        explicacao: "Quando duas espécies diferentes interagem com benefício mútuo (+/+) e a união é OBRIGATÓRIA para a sobrevivência de pelo menos uma delas, chamamos de Mutualismo. (No comensalismo, apenas um se beneficia sem prejudicar o outro)."
    },

    // ==========================================
    // SPRINT 4: CIÊNCIAS HUMANAS - HISTÓRIA (15 Questões)
    // ==========================================
    {
        id: 81,
        materia: "História",
        assunto: "Era Vargas e Industrialização",
        textoBase: "Durante o governo de Getúlio Vargas, especialmente no período do Estado Novo (1937-1945), o Brasil deixou de ser uma economia puramente agroexportadora e iniciou o seu processo de industrialização focado em indústrias de base.",
        pergunta: "Uma das principais estatais criadas nesse período, fundamental para fornecer matéria-prima para a expansão industrial do país, foi a:",
        alternativas: {
            A: "Petrobras (Petróleo Brasileiro S.A.).",
            B: "Embraer (Empresa Brasileira de Aeronáutica).",
            C: "CSN (Companhia Siderúrgica Nacional).",
            D: "Eletrobras (Centrais Elétricas Brasileiras).",
            E: "Sudesul (Superintendência do Desenvolvimento do Sul)."
        },
        correta: "C",
        explicacao: "A criação da CSN (Companhia Siderúrgica Nacional) em Volta Redonda e da Vale do Rio Doce foram as marcas de Vargas na indústria de base. (Nota: A Petrobras foi criada por Vargas, mas bem mais tarde, no seu segundo governo em 1953)."
    },
    {
        id: 82,
        materia: "História",
        assunto: "Revolução Industrial",
        textoBase: "A tecnologia molda o mercado de trabalho desde o século XVIII. Se a Primeira Revolução Industrial foi movida a carvão e máquinas a vapor, a Segunda Revolução Industrial alterou radicalmente os meios de produção e de comunicação.",
        pergunta: "Os dois principais elementos energéticos que impulsionaram a Segunda Revolução Industrial (a partir da segunda metade do séc. XIX) foram:",
        alternativas: {
            A: "Energia nuclear e gás natural.",
            B: "Carvão vegetal e energia eólica.",
            C: "Eletricidade e petróleo.",
            D: "Energia solar e hidrelétricas.",
            E: "Microprocessadores e telecomunicações."
        },
        correta: "C",
        explicacao: "A Primeira Revolução Industrial (Inglaterra, 1760) teve como base o carvão e o vapor. A Segunda Revolução (séc. XIX) expandiu-se com a invenção do motor a combustão (petróleo) e o uso em larga escala da eletricidade."
    },
    {
        id: 83,
        materia: "História",
        assunto: "Ditadura Militar no Brasil (Milagre Econômico)",
        textoBase: "Entre 1968 e 1973, durante o regime militar, o Brasil vivenciou um período de crescimento acelerado do PIB, conhecido como 'Milagre Econômico', impulsionado por obras de infraestrutura e capital estrangeiro.",
        pergunta: "Apesar do crescimento do PIB, uma das principais críticas econômicas a esse período histórico é que ele resultou em:",
        alternativas: {
            A: "Extinção imediata da inflação que só retornou nos anos 1990.",
            B: "Reforma agrária massiva, distribuindo terras no Nordeste.",
            C: "Aumento brutal do salário mínimo e do poder de compra operário.",
            D: "Aumento expressivo da concentração de renda e da dívida externa.",
            E: "Nacionalização completa do setor automotivo e saída do capital privado."
        },
        correta: "D",
        explicacao: "O Milagre Econômico gerou grandes obras (Ponte Rio-Niterói, Transamazônica), mas custou caríssimo: o país pegou muitos empréstimos (aumentando a dívida externa) e houve forte arrocho salarial (o 'bolo' cresceu, mas não foi dividido), aumentando a desigualdade social."
    },
    {
        id: 84,
        materia: "História",
        assunto: "Guerra Fria e Tecnologia",
        textoBase: "A internet que utilizamos hoje teve suas bases conceituais criadas durante a Guerra Fria (1947-1991). O Departamento de Defesa dos EUA criou uma rede de comunicação descentralizada para garantir que, se um servidor fosse destruído por um ataque soviético, a rede continuasse operando.",
        pergunta: "Essa primeira rede precursora da internet foi batizada de:",
        alternativas: {
            A: "World Wide Web (WWW)",
            B: "ARPANET",
            C: "Ethernet",
            D: "Sputnik Net",
            E: "Intranet Militar"
        },
        correta: "B",
        explicacao: "Criada em 1969 pela agência governamental americana ARPA, a ARPANET interligou computadores de universidades e bases militares para garantir comunicação segura durante a Guerra Fria."
    },
    {
        id: 85,
        materia: "História",
        assunto: "Brasil Colônia (Ciclo do Açúcar)",
        textoBase: "Durante os séculos XVI e XVII, a economia da colônia brasileira baseava-se quase exclusivamente no sistema de 'plantation', localizado principalmente na região Nordeste.",
        pergunta: "A estrutura econômica da 'plantation' açucareira era sustentada pelo seguinte tripé:",
        alternativas: {
            A: "Minifúndios, trabalho livre assalariado e mercado interno.",
            B: "Latifúndios (grandes propriedades), monocultura para exportação e trabalho escravo.",
            C: "Indústrias têxteis, policultura e trabalho servil indígena.",
            D: "Comércio de especiarias, trabalho escravo e urbanização planejada.",
            E: "Fazendas coletivas, exportação de algodão e trabalho imigrante europeu."
        },
        correta: "B",
        explicacao: "O modelo de Plantation é o tripé colonial: grandes extensões de terra (Latifúndio), focadas em um único produto para vender para a Europa (Monocultura exportadora) e sustentadas pela mão de obra escravizada."
    },
    {
        id: 86,
        materia: "História",
        assunto: "Terceira Revolução Industrial (Toyotismo)",
        textoBase: "A partir da década de 1970, com o avanço da informática, da robótica e das telecomunicações, o mundo viu surgir um novo modelo de produção que substituiu a rigidez do Fordismo, focado agora no 'Just in Time'.",
        pergunta: "Esse novo modelo de produção flexível, nascido no Japão e altamente dependente de tecnologia para não acumular estoques, é conhecido como:",
        alternativas: {
            A: "Taylorismo.",
            B: "Keynesianismo.",
            C: "Toyotismo.",
            D: "Neoliberalismo.",
            E: "Mercantilismo."
        },
        correta: "C",
        explicacao: "O Toyotismo surgiu no Japão pós-Segunda Guerra. Diferente do fordismo (que produzia em massa e gerava grandes estoques), o toyotismo é flexível, a produção é sob demanda ('Just in Time') e os operários são multifuncionais."
    },
    {
        id: 87,
        materia: "História",
        assunto: "Primeira República (Oligarquias)",
        textoBase: "No início da República no Brasil (1889-1930), o poder político nacional era fortemente controlado por elites agrárias de dois estados específicos, que se alternavam na presidência em um acordo informal.",
        pergunta: "Esse arranjo político que dominou a chamada República Velha ficou historicamente conhecido como:",
        alternativas: {
            A: "Política do Café com Leite.",
            B: "Coronelismo Industrial.",
            C: "Aliança Libertadora Nacional.",
            D: "Tratado de Tordesilhas.",
            E: "Acordo de Taubaté."
        },
        correta: "A",
        explicacao: "A Política do Café com Leite foi o domínio das oligarquias paulistas (grandes produtores de café) e mineiras (grandes produtores de leite/gado e com grande força eleitoral) na alternância do poder federal brasileiro."
    },
    {
        id: 88,
        materia: "História",
        assunto: "Segunda Guerra Mundial e Tecnologia",
        textoBase: "O filme 'O Jogo da Imitação' ilustra a importância da criptografia e da computação na Segunda Guerra Mundial, retratando o trabalho do matemático britânico Alan Turing.",
        pergunta: "A grande contribuição da equipe de Turing para os Aliados foi a construção de uma máquina capaz de quebrar os códigos secretos de qual famoso equipamento alemão?",
        alternativas: {
            A: "Zepellin",
            B: "Blitzkrieg",
            C: "Gestapo",
            D: "Enigma",
            E: "Luftwaffe"
        },
        correta: "D",
        explicacao: "A máquina Enigma era usada pelos nazistas para enviar mensagens criptografadas. A máquina de Turing (a Bomba, ou Bombe) conseguiu decifrar os padrões da Enigma, encurtando a guerra e estabelecendo os princípios da computação moderna."
    },
    {
        id: 89,
        materia: "História",
        assunto: "Era JK e o Desenvolvimentismo",
        textoBase: "Com o lema 'Cinquenta anos em cinco', o presidente Juscelino Kubitschek (1956-1961) promoveu o Plano de Metas, focando no desenvolvimento acelerado do Brasil.",
        pergunta: "Uma das principais características e consequências do governo JK foi:",
        alternativas: {
            A: "O isolamento do mercado brasileiro em relação a investimentos de empresas estrangeiras.",
            B: "A criação de Brasília e o forte incentivo à entrada da indústria automobilística multinacional.",
            C: "A priorização absoluta do transporte ferroviário em detrimento do rodoviário.",
            D: "O controle rigoroso da inflação e o pagamento total da dívida externa.",
            E: "A proibição do consumo de bens duráveis pela classe média urbana."
        },
        correta: "B",
        explicacao: "O governo JK é a cara do nacional-desenvolvimentismo com capital estrangeiro. Ele construiu Brasília (interiorizando a capital), abriu as portas para montadoras de carros (Ford, Volkswagen) e focou na construção de rodovias."
    },
    {
        id: 90,
        materia: "História",
        assunto: "Imperialismo e Neocolonialismo",
        textoBase: "No final do século XIX, as potências industriais europeias precisavam de matéria-prima barata (como minérios e borracha) e de novos mercados consumidores para escoar sua produção tecnológica.",
        pergunta: "Para suprir essa necessidade, essas potências promoveram uma corrida de domínio e partilha de territórios na Conferência de Berlim (1884-1885), que afetou violentamente qual continente?",
        alternativas: {
            A: "América do Sul",
            B: "Ásia Oriental",
            C: "Antártida",
            D: "África",
            E: "Europa Oriental"
        },
        correta: "D",
        explicacao: "A Conferência de Berlim oficializou a 'Partilha da África'. Os países europeus dividiram o continente africano de forma arbitrária (ignorando etnias e culturas) para explorar seus recursos naturais e sustentar a Segunda Revolução Industrial."
    },
    {
        id: 91,
        materia: "História",
        assunto: "Brasil Colônia (Ciclo do Ouro)",
        textoBase: "No século XVIII, a descoberta de jazidas de ouro alterou profundamente a estrutura social, econômica e geográfica da colônia brasileira.",
        pergunta: "Qual das opções abaixo reflete uma consequência direta do 'Ciclo do Ouro' no Brasil?",
        alternativas: {
            A: "O declínio urbano, com a população abandonando as cidades para viver isolada no campo.",
            B: "A transferência da capital da colônia de Salvador para o Rio de Janeiro em 1763.",
            C: "A substituição total da mão de obra escravizada africana por trabalhadores assalariados europeus.",
            D: "O rompimento dos laços comerciais entre Brasil e Portugal devido à independência de Minas Gerais.",
            E: "O fim das importações de bens manufaturados, pois a região produzia tudo o que precisava."
        },
        correta: "B",
        explicacao: "Com a mineração em Minas Gerais, o eixo econômico da colônia deslocou-se do Nordeste (açúcar) para o Sudeste. Para controlar melhor o escoamento do ouro pelo porto, Portugal mudou a capital de Salvador para o Rio de Janeiro."
    },
    {
        id: 92,
        materia: "História",
        assunto: "A Crise de 1929",
        textoBase: "A quebra da Bolsa de Valores de Nova York em 1929 foi a maior crise do sistema capitalista mundial. Seus efeitos no Brasil foram drásticos e ajudaram a pôr fim à República Velha.",
        pergunta: "Qual foi o impacto imediato da Crise de 1929 na economia brasileira?",
        alternativas: {
            A: "A supervalorização do preço do café, gerando lucro recorde para os barões paulistas.",
            B: "A queda vertiginosa das exportações e dos preços do café, mergulhando a elite cafeeira em crise.",
            C: "A interrupção imediata do fluxo de mão de obra escrava para as fazendas.",
            D: "O confisco das reservas de ouro do Brasil pelos Estados Unidos para pagar dívidas.",
            E: "O incentivo americano para que o Brasil criasse seu primeiro pólo tecnológico na Amazônia."
        },
        correta: "B",
        explicacao: "Os EUA eram o maior comprador do café brasileiro. Com a crise lá, eles pararam de comprar. O preço do café despencou, as fazendas faliram e a elite paulista perdeu força política, abrindo caminho para a Revolução de 1930 (Getúlio Vargas)."
    },
    {
        id: 93,
        materia: "História",
        assunto: "Idade Média e Renascimento (Transição)",
        textoBase: "A Invenção da prensa de tipos móveis por Johannes Gutenberg, no século XV, é considerada a 'primeira grande revolução da informação', comparável ao surgimento da internet.",
        pergunta: "A principal consequência cultural e social da invenção de Gutenberg na Europa foi:",
        alternativas: {
            A: "A centralização total da educação nas mãos da Igreja Católica, que comprou todas as prensas.",
            B: "O barateamento e a popularização dos livros, facilitando a difusão de ideias renascentistas e religiosas (como a Reforma Protestante).",
            C: "A abolição do ensino de matemática em favor exclusivo da literatura clássica.",
            D: "O fortalecimento imediato do sistema feudal e do trabalho de monges copistas.",
            E: "A proibição da circulação de jornais impressos em línguas locais."
        },
        correta: "B",
        explicacao: "Antes da prensa, os livros eram copiados à mão pelos monges (caríssimos e raros). A prensa de Gutenberg permitiu a produção em massa. Isso espalhou conhecimento técnico, literário e foi o motor que permitiu que as teses de Martinho Lutero se espalhassem rapidamente."
    },
    {
        id: 94,
        materia: "História",
        assunto: "Nova República (Plano Real)",
        textoBase: "No final dos anos 1980 e início dos anos 1990, os sistemas de computação dos supermercados no Brasil precisavam ser atualizados diariamente, pois os preços dos produtos subiam de manhã para a tarde devido à hiperinflação.",
        pergunta: "O plano econômico lançado em 1994 que conseguiu estabilizar a economia, acabar com a hiperinflação e atrelar a nova moeda (URV) ao dólar foi o:",
        alternativas: {
            A: "Plano Cruzado.",
            B: "Plano Collor.",
            C: "Plano Verão.",
            D: "Plano Bresser.",
            E: "Plano Real."
        },
        correta: "E",
        explicacao: "O Plano Real (1994, no governo Itamar Franco, conduzido por Fernando Henrique Cardoso) foi o único plano econômico que teve sucesso duradouro em destruir a hiperinflação brasileira através da criação da URV e, posteriormente, da moeda Real."
    },
    {
        id: 95,
        materia: "História",
        assunto: "Brasil Império (Segundo Reinado e Economia)",
        textoBase: "No século XIX, durante o Segundo Reinado de D. Pedro II, o Brasil viveu a 'Era Mauá', caracterizada por um surto de empreendedorismo e investimentos em infraestrutura sob a liderança do Barão de Mauá.",
        pergunta: "Nesse período, os pesados investimentos privados do Barão de Mauá envolveram principalmente a construção de:",
        alternativas: {
            A: "Radares militares e sistemas de espionagem.",
            B: "Plataformas de exploração de petróleo em águas rasas.",
            C: "Ferrovias, estaleiros, iluminação a gás e o primeiro cabo telegráfico submarino do Brasil.",
            D: "Sistemas de inteligência mecânica para as usinas de açúcar.",
            E: "Rodovias asfaltadas que ligavam o litoral à floresta amazônica."
        },
        correta: "C",
        explicacao: "Irineu Evangelista de Sousa (Barão de Mauá) foi o grande empresário do Império. Ele trouxe modernização para o Brasil no meio do séc. XIX, investindo fortunas em trens (ferrovias), navios, bancos, iluminação das ruas e no telégrafo submarino ligando Brasil e Europa."
    },
    // ==========================================
    // SPRINT 5: CIÊNCIAS HUMANAS - GEOGRAFIA (15 Questões)
    // ==========================================
    {
        id: 96,
        materia: "Geografia",
        assunto: "Geopolítica e Globalização",
        textoBase: "A globalização consolidou a chamada 'rede de fluxos imateriais', onde biliões de dados financeiros e de informação circulam diariamente pelo globo, viabilizando o mercado financeiro global e a expansão das empresas de tecnologia.",
        pergunta: "A infraestrutura física invisível que suporta mais de 95% de todo o tráfego intercontinental de dados da internet atual baseia-se em:",
        alternativas: {
            A: "Constelações de satélites de baixa órbita.",
            B: "Cabos submarinos de fibra ótica.",
            C: "Redes de antenas de rádio de alta frequência (AM/FM).",
            D: "Servidores em balões estratosféricos.",
            E: "Redes elétricas de alta tensão partilhadas entre continentes."
        },
        correta: "B",
        explicacao: "Apesar do crescimento dos satélites, a espinha dorsal da internet global continua a ser a vasta rede de cabos submarinos de fibra ótica que cruzam os oceanos, oferecendo velocidade e enorme largura de banda."
    },
    {
        id: 97,
        materia: "Geografia",
        assunto: "Urbanização e Problemas Ambientais",
        textoBase: "Nos grandes centros urbanos, a densa concentração de edifícios, asfalto e a escassez de áreas verdes fazem com que as temperaturas nas regiões centrais sejam significativamente mais altas do que nas áreas rurais periféricas.",
        pergunta: "Este fenómeno microclimático urbano é conhecido na Geografia como:",
        alternativas: {
            A: "Inversão Térmica.",
            B: "Chuva Ácida.",
            C: "Ilhas de Calor.",
            D: "El Niño.",
            E: "Deserto Urbano."
        },
        correta: "C",
        explicacao: "As 'Ilhas de Calor' ocorrem quando a cidade absorve e retém muito calor devido ao betão e ao asfalto, tornando o centro urbano mais quente do que a periferia."
    },
    {
        id: 98,
        materia: "Geografia",
        assunto: "Matrizes Energéticas",
        textoBase: "O Brasil destaca-se mundialmente por possuir uma matriz elétrica predominantemente renovável. No entanto, em períodos de seca severa, os reservatórios baixam e o país vê-se obrigado a ligar as usinas termoelétricas, encarecendo a conta de luz (bandeira vermelha).",
        pergunta: "A fonte de energia primária que lidera a matriz ELÉTRICA brasileira e que sofre com a sazonalidade das chuvas é a:",
        alternativas: {
            A: "Energia Eólica.",
            B: "Energia Fotovoltaica.",
            C: "Biomassa.",
            D: "Hidrelétrica.",
            E: "Nuclear."
        },
        correta: "D",
        explicacao: "A base da energia elétrica no Brasil são as hidrelétricas. Estão sujeitas a crises hídricas (secas), o que obriga o governo a ativar termoelétricas (mais caras e poluentes)."
    },
    {
        id: 99,
        materia: "Geografia",
        assunto: "Dinâmica Populacional (Demografia)",
        textoBase: "A pirâmide etária brasileira está a sofrer uma alteração estrutural profunda. A base da pirâmide está a encolher e o topo está a alargar-se, num processo semelhante ao que já ocorreu na Europa e no Japão.",
        pergunta: "Esta alteração no gráfico demográfico indica que a população brasileira está a passar por um processo de:",
        alternativas: {
            A: "Rejuvenescimento, com o aumento da taxa de fecundidade.",
            B: "Envelhecimento, refletindo a queda da natalidade e o aumento da esperança de vida.",
            C: "Estagnação, onde as mortes superam em muito os nascimentos, reduzindo a população total.",
            D: "Explosão demográfica infantil, causada pela imigração em massa.",
            E: "Redução da população economicamente ativa devido à mortalidade infantil."
        },
        correta: "B",
        explicacao: "A base menor indica que nascem menos crianças (queda na natalidade). O topo mais largo indica que as pessoas vivem mais tempo (aumento da esperança de vida). O resultado é o envelhecimento populacional."
    },
    {
        id: 100,
        materia: "Geografia",
        assunto: "Agropecuária no Brasil",
        textoBase: "A partir da década de 1970, ocorreu a expansão da fronteira agrícola em direção ao Centro-Oeste brasileiro. O desenvolvimento de sementes adaptadas e a correção da acidez do solo transformaram a região num gigante da exportação.",
        pergunta: "O bioma fortemente impactado por esta expansão e a principal *commodity* agrícola cultivada nesta região são, respetivamente:",
        alternativas: {
            A: "Amazónia e Cana-de-açúcar.",
            B: "Mata Atlântica e Café.",
            C: "Cerrado e Soja.",
            D: "Caatinga e Milho.",
            E: "Pampa e Trigo."
        },
        correta: "C",
        explicacao: "O Cerrado foi o principal bioma devastado para dar lugar ao agronegócio no Centro-Oeste. A soja é a principal *commodity* de exportação desta fronteira agrícola."
    },
    {
        id: 101,
        materia: "Geografia",
        assunto: "Geografia Física (Clima)",
        textoBase: "As alterações climáticas e os fenómenos cíclicos afetam as colheitas e a geração de energia. O fenómeno caracterizado pelo aquecimento anormal das águas do Oceano Pacífico Equatorial altera o regime de chuvas, provocando secas na região Norte e Nordeste do Brasil e chuvas torrenciais na região Sul.",
        pergunta: "A descrição do texto refere-se a que fenómeno climático?",
        alternativas: {
            A: "La Niña.",
            B: "El Niño.",
            C: "Inversão Térmica.",
            D: "Monções Asiáticas.",
            E: "Aquecimento Global Antrópico."
        },
        correta: "B",
        explicacao: "O aquecimento anormal do Pacífico Equatorial é o 'El Niño'. O arrefecimento das mesmas águas é o 'La Niña'. No Brasil, o El Niño gera seca no Norte/Nordeste e chuvas no Sul."
    },
    {
        id: 102,
        materia: "Geografia",
        assunto: "Blocos Económicos",
        textoBase: "No atual cenário de comércio internacional, os países organizam-se em blocos económicos para facilitar as trocas comerciais. O bloco sul-americano, que conta com o Brasil como um dos membros fundadores, visa estabelecer uma união aduaneira e, gradualmente, um mercado comum.",
        pergunta: "A qual bloco económico o texto se refere?",
        alternativas: {
            A: "NAFTA (USMCA).",
            B: "União Europeia.",
            C: "BRICS.",
            D: "Mercosul.",
            E: "Pacto Andino."
        },
        correta: "D",
        explicacao: "O Mercosul (Mercado Comum do Sul) foi fundado pelo Brasil, Argentina, Uruguai e Paraguai através do Tratado de Assunção em 1991."
    },
    {
        id: 103,
        materia: "Geografia",
        assunto: "Industrialização Brasileira",
        textoBase: "Historicamente, o estado de São Paulo concentrou a esmagadora maioria do parque industrial do Brasil e as sedes das grandes empresas. No entanto, nas últimas décadas, verifica-se uma fuga de indústrias da capital para o interior do estado (como a região de Sorocaba e Itapetininga) e para outros estados.",
        pergunta: "Este fenómeno, que procura terrenos mais baratos, isenções fiscais (guerra fiscal) e fugir aos congestionamentos das metrópoles, é designado como:",
        alternativas: {
            A: "Desconcentração industrial.",
            B: "Macrocefalia urbana.",
            C: "Desindustrialização absoluta.",
            D: "Fordismo periférico.",
            E: "Concentração fundiária."
        },
        correta: "A",
        explicacao: "A Desconcentração Industrial é a migração das fábricas das regiões metropolitanas superlotadas para o interior ou para outros estados, à procura de menores custos de produção."
    },
    {
        id: 104,
        materia: "Geografia",
        assunto: "Cartografia e Escalas",
        textoBase: "No desenvolvimento de uma aplicação de logística que calcula rotas, a equipa utiliza mapas digitais. Num mapa com escala de 1:500.000, a distância em linha reta entre as cidades A e B é de 4 centímetros.",
        pergunta: "Qual é a distância real, em quilómetros, entre estas duas cidades?",
        alternativas: {
            A: "2 km",
            B: "5 km",
            C: "20 km",
            D: "50 km",
            E: "200 km"
        },
        correta: "C",
        explicacao: "A escala 1:500.000 significa que 1 cm no mapa = 500.000 cm na realidade. 500.000 cm equivalem a 5 km. Portanto, se 1 cm = 5 km, então 4 cm = 4 * 5 = 20 km."
    },
    {
        id: 105,
        materia: "Geografia",
        assunto: "Migrações e Fluxos",
        textoBase: "Muitos trabalhadores e estudantes vivem em cidades da região metropolitana e viajam todos os dias para a capital paulista para trabalhar ou estudar, regressando a casa apenas à noite.",
        pergunta: "Na geografia urbana, este movimento diário de ida e volta, que não configura uma mudança definitiva de residência, denomina-se:",
        alternativas: {
            A: "Êxodo rural.",
            B: "Migração pendular.",
            C: "Transumância.",
            D: "Nomadismo sazonal.",
            E: "Gentrificação."
        },
        correta: "B",
        explicacao: "O movimento pendular é o trajeto diário (como o de um pêndulo) que milhões de pessoas fazem entre a 'cidade-dormitório' e o grande centro urbano para trabalhar/estudar."
    },
    {
        id: 106,
        materia: "Geografia",
        assunto: "Geopolítica dos Recursos",
        textoBase: "A tensão em torno da ilha de Taiwan (reclamada pela China) gera preocupações na economia global não apenas por questões territoriais, mas pelo domínio tecnológico da região.",
        pergunta: "Qual componente de hardware vital para a indústria automóvel, de computadores e *smartphones*, cujo fabrico mundial é quase dominado por Taiwan, torna esta região num pólo geopolítico estratégico?",
        alternativas: {
            A: "Baterias de chumbo.",
            B: "Ecrãs de plasma.",
            C: "Microchips (semicondutores).",
            D: "Fibras de carbono.",
            E: "Servidores de armazenamento de dados analógicos."
        },
        correta: "C",
        explicacao: "A TSMC, em Taiwan, fabrica a grande maioria dos semicondutores (microchips) avançados do mundo. Qualquer interrupção ali pode paralisar a produção global de tecnologia."
    },
    {
        id: 107,
        materia: "Geografia",
        assunto: "Transportes no Brasil",
        textoBase: "Em 2018, uma greve de camionistas parou o Brasil, evidenciando a enorme vulnerabilidade da matriz de transporte do país. O abastecimento de alimentos, combustível e equipamentos foi interrompido em poucos dias.",
        pergunta: "A dependência extrema do Brasil em relação aos camiões deve-se, historicamente, a opções políticas focadas no:",
        alternativas: {
            A: "Ferroviarismo, que interliga todo o interior ao litoral.",
            B: "Rodoviarismo, iniciado fortemente a partir do governo de Washington Luís e consolidado por JK.",
            C: "Transporte cabotagem (marítimo costeiro), que falhou por falta de portos.",
            D: "Transporte aéreo subsidiado, voltado para carga pesada.",
            E: "Transporte dutoviário para alimentos não-perecíveis."
        },
        correta: "B",
        explicacao: "O Brasil priorizou a construção de rodovias (rodoviarismo) em detrimento das ferrovias, principalmente para atrair indústrias automóveis multinacionais durante o governo JK."
    },
    {
        id: 108,
        materia: "Geografia",
        assunto: "Hidrografia e Biomas",
        textoBase: "A vasta massa de floresta da Amazónia transfere toneladas de vapor de água para a atmosfera através da transpiração das plantas. Os ventos empurram esta humidade em direção ao Centro-Oeste e Sudeste do Brasil, garantindo as chuvas nessas regiões.",
        pergunta: "Este fenómeno natural essencial para a agricultura brasileira é conhecido como:",
        alternativas: {
            A: "Bacias hidrográficas.",
            B: "Inversão térmica equatoriana.",
            C: "Rios voadores.",
            D: "Aquífero Guarani.",
            E: "Correntes de Humboldt."
        },
        correta: "C",
        explicacao: "Os 'Rios Voadores' são imensas massas de vapor de água geradas pela Floresta Amazónica. O desmatamento da Amazónia pode secar estes 'rios', causando secas severas em São Paulo e no sul do país."
    },
    {
        id: 109,
        materia: "Geografia",
        assunto: "Setores da Economia",
        textoBase: "O curso de Análise e Desenvolvimento de Sistemas (ADS) insere-se num setor da economia que mais cresce no Brasil, caracterizado pela prestação de serviços, desenvolvimento de *software* e comércio eletrónico.",
        pergunta: "Na divisão clássica da geografia económica, as empresas de tecnologia, *software* e serviços encontram-se enquadradas predominantemente no:",
        alternativas: {
            A: "Setor Primário.",
            B: "Setor Secundário.",
            C: "Setor Terciário.",
            D: "Setor Agrícola.",
            E: "Setor Extrativista."
        },
        correta: "C",
        explicacao: "Setor Primário: agricultura/extração. Setor Secundário: fábricas/indústria. Setor Terciário: comércio, serviços e tecnologia. (Alguns autores já classificam a tecnologia avançada e investigação como Quaternário)."
    },
    {
        id: 110,
        materia: "Geografia",
        assunto: "Dinâmica da Terra (Fusos Horários)",
        textoBase: "Devido à rotação da Terra e à sua extensa dimensão longitudinal (Este-Oeste), o Brasil possui mais do que um fuso horário. Um desenvolvedor em São Paulo agenda uma reunião com o fuso horário oficial de Brasília (GMT-3).",
        pergunta: "Sabendo que o estado do Acre e parte do Amazonas encontram-se no fuso mais ocidental do país, se a reunião começar às 10h00 em São Paulo, a que horas será no Acre?",
        alternativas: {
            A: "08h00",
            B: "09h00",
            C: "10h00",
            D: "11h00",
            E: "12h00"
        },
        correta: "A",
        explicacao: "O Acre (GMT-5) tem 2 horas a menos de atraso em relação à hora de Brasília (GMT-3). Se em São Paulo (Brasília) são 10h00, no Acre ainda são 08h00 da manhã."
    },

    // ==========================================
    // SPRINT FINAL: QUESTÕES MULTIDISCIPLINARES (15 Questões)
    // ==========================================
    {
        id: 111,
        materia: "Multidisciplinar",
        assunto: "Matemática + Eletrodinâmica (Física)",
        textoBase: "Para que uma automação residencial funcione adequadamente, um relé inteligente deve receber uma corrente exata de 5 Amperes. A fonte da casa está ligada numa tomada de 110 Volts. Sabe-se, pela Lei de Ohm (U = R * i), que a resistência elétrica do circuito determina a corrente.",
        pergunta: "Se a tomada passasse subitamente para 220 Volts e a resistência (R) do equipamento se mantivesse inalterada, o que aconteceria com a corrente elétrica, e qual seria a percentagem do seu aumento?",
        alternativas: {
            A: "A corrente passaria para 10 Amperes, o que representa um aumento de 50%.",
            B: "A corrente passaria para 10 Amperes, o que representa um aumento de 100%.",
            C: "A corrente manter-se-ia nos 5 Amperes, não havendo aumento.",
            D: "A corrente cairia para 2,5 Amperes, com redução de 50%.",
            E: "A corrente subiria para 15 Amperes, um aumento de 200%."
        },
        correta: "B",
        explicacao: "Pela fórmula U = R * i. O valor de R é U/i (110/5 = 22 Ohms). Se a voltagem dobra para 220V mantendo a resistência de 22 Ohms, a nova corrente será i = 220/22 = 10 Amperes. Subir de 5 para 10 significa dobrar o valor, logo é um aumento de 100%."
    },
    {
        id: 112,
        materia: "Multidisciplinar",
        assunto: "História + Sociologia (Revolução Industrial)",
        textoBase: "No século XIX, durante a consolidação das fábricas têxteis na Inglaterra, não havia limite de jornada de trabalho e o emprego de crianças era rotina. O descontentamento gerou movimentos onde os trabalhadores invadiam as fábricas para destruir os teares mecânicos.",
        pergunta: "O nome desse movimento histórico operário, que via as máquinas como as causadoras do desemprego e da miséria, e a sua relação contemporânea com a Inteligência Artificial é ilustrado por:",
        alternativas: {
            A: "Ludismo, que pode ser comparado ao medo atual de que algoritmos automatizem e extingam profissões inteiras.",
            B: "Cartismo, que inspirou o receio contemporâneo de perda de direitos de propriedade intelectual na internet.",
            C: "Iluminismo, promovendo o fim do uso de computadores nas empresas.",
            D: "Fordismo, que defende a destruição física dos *data centers* para valorizar o trabalho manual.",
            E: "Toyotismo, que via na tecnologia o fim do planeamento *Just in Time*."
        },
        correta: "A",
        explicacao: "O Ludismo foi o 'movimento dos quebra-máquinas'. Hoje, o 'neoludismo' é a expressão utilizada para descrever o medo e a aversão à substituição do trabalho humano pela IA ou pela robótica."
    },
    {
        id: 113,
        materia: "Multidisciplinar",
        assunto: "Biologia + Química (Chuva Ácida)",
        textoBase: "Veículos pesados e indústrias queimam combustíveis fósseis que libertam gases como o Dióxido de Enxofre (SO₂). Na atmosfera, este gás reage com a água das nuvens, gerando o famoso fenómeno da 'chuva ácida' (Ácido Sulfúrico - H₂SO₄).",
        pergunta: "O impacto biológico primário da precipitação deste ácido em grandes áreas florestais ou agrícolas é:",
        alternativas: {
            A: "A fertilização do solo, uma vez que o enxofre atua como nutriente principal das sementes.",
            B: "A modificação do pH do solo e da água dos lagos, causando a queima de folhas e a morte da fauna aquática sensível.",
            C: "O aumento rápido da camada de ozono, criando uma barreira opaca nas florestas.",
            D: "O aumento da taxa fotossintética, pois as plantas retêm mais radiação ultravioleta.",
            E: "A esterilização inofensiva das águas superficiais, eliminando apenas os mosquitos."
        },
        correta: "B",
        explicacao: "A chuva ácida baixa drasticamente o pH dos ecossistemas. Nos lagos, a água ácida mata os peixes. Nas florestas, queima os tecidos vegetais (folhas) e destrói nutrientes essenciais do solo."
    },
    {
        id: 114,
        materia: "Multidisciplinar",
        assunto: "Linguagens + História (Oligarquias e Modernismo)",
        textoBase: "A Semana de Arte Moderna de 1922 ocorreu no Theatro Municipal de São Paulo, financiada por membros da elite económica do estado, que ao mesmo tempo que queriam a rutura estética nas artes, dominavam a política nacional do país.",
        pergunta: "Esta elite económica paulista, que patrocinou o Modernismo ao mesmo tempo que assegurava o poder na Primeira República, enriquecia através do:",
        alternativas: {
            A: "Comércio de metais preciosos extraídos de Minas Gerais.",
            B: "Produção de borracha no auge do Ciclo da Amazónia.",
            C: "Cultivo do café, principal produto de exportação da economia agroexportadora.",
            D: "Fabrico maciço de computadores para exportação.",
            E: "Sistema de *plantation* de cana-de-açúcar no Vale do Paraíba."
        },
        correta: "C",
        explicacao: "A elite de 1922 era a oligarquia do café (os Barões do Café). Foram eles que enriqueceram São Paulo, construíram o Theatro Municipal e financiaram a burguesia intelectual que organizou a Semana de Arte Moderna."
    },
    {
        id: 115,
        materia: "Multidisciplinar",
        assunto: "Matemática + Informática (Bases Numéricas)",
        textoBase: "Enquanto nós, seres humanos, usamos o sistema de base decimal (0 a 9), os computadores realizam todas as suas operações num sistema de base binária, composto exclusivamente pelos algarismos 0 e 1.",
        pergunta: "Se convertermos o número decimal 10 para o sistema binário da máquina, o resultado correto será:",
        alternativas: {
            A: "1000",
            B: "1010",
            C: "1100",
            D: "1001",
            E: "0101"
        },
        correta: "B",
        explicacao: "Para converter decimal em binário, divide-se o número sucessivamente por 2 e guardam-se os restos. 10/2 = 5 (Resto 0). 5/2 = 2 (Resto 1). 2/2 = 1 (Resto 0). 1/2 = 0 (Resto 1). Lendo os restos de baixo para cima: 1010."
    },
    {
        id: 116,
        materia: "Multidisciplinar",
        assunto: "Inglês + Lógica de Programação",
        textoBase: "Observe o trecho de um pseudocódigo escrito em inglês estruturado:\n`IF (user_age >= 18) THEN print('Access Granted') ELSE print('Access Denied')`",
        pergunta: "De acordo com o funcionamento das estruturas condicionais (*IF/ELSE*) em qualquer linguagem de programação, um utilizador que tenha exatos 18 anos de idade receberá a mensagem:",
        alternativas: {
            A: "Access Denied, pois ele não é MAIOR que 18.",
            B: "Access Granted, pois a condição testa se a idade é MAIOR OU IGUAL a 18.",
            C: "Erro de sintaxe, interrompendo o fluxo.",
            D: "Nenhuma mensagem, pois a variável está nula.",
            E: "Ambas as mensagens em sequência."
        },
        correta: "B",
        explicacao: "O operador '>=' significa 'Maior ou Igual'. Como a idade do utilizador é 18 (igual ao limite), a condição é verdadeira (*True*) e o bloco executado será o 'Access Granted' (Acesso Concedido)."
    },
    {
        id: 117,
        materia: "Multidisciplinar",
        assunto: "Geografia + Física (Fontes Renováveis)",
        textoBase: "A energia eólica é gerada em vastas planícies costeiras ou zonas de serra. Os aerogeradores transformam a energia mecânica do ar em movimento em eletricidade. O nordeste brasileiro é o maior produtor desta energia devido à constância de um sistema de ventos global.",
        pergunta: "Do ponto de vista climático e geográfico, os ventos constantes que sopram em direção à linha do Equador e que garantem o sucesso eólico no Nordeste chamam-se:",
        alternativas: {
            A: "Ciclones Tropicais.",
            B: "Brisa Terrestre.",
            C: "Ventos Alísios.",
            D: "Massas Polares Atlânticas.",
            E: "Tufões Asiáticos."
        },
        correta: "C",
        explicacao: "Os ventos alísios são ventos húmidos e constantes que sopram dos trópicos em direção à Zona Equatorial (onde o Nordeste do Brasil se localiza). Eles são a principal força motriz para as turbinas eólicas da região."
    },
    {
        id: 118,
        materia: "Multidisciplinar",
        assunto: "Matemática + Finanças (Juros Compostos)",
        textoBase: "A HyperZ necessitava de expandir as suas instalações e contraiu um empréstimo num banco. O valor pedido foi de R$ 10.000,00 a uma taxa de juro COMPOSTO de 10% ao mês.",
        pergunta: "Caso a empresa não pague nenhuma prestação, qual será o valor total da dívida (montante) após exatos 2 meses?",
        alternativas: {
            A: "R$ 11.000,00",
            B: "R$ 12.000,00",
            C: "R$ 12.100,00",
            D: "R$ 13.000,00",
            E: "R$ 20.000,00"
        },
        correta: "C",
        explicacao: "Em juros compostos, o juro incide sobre o montante acumulado (juro sobre juro). Mês 1: 10% de 10.000 = 1.000. O montante vai para 11.000. Mês 2: 10% de 11.000 = 1.100. O montante final é 11.000 + 1.100 = R$ 12.100,00."
    },
    {
        id: 119,
        materia: "Multidisciplinar",
        assunto: "Biologia + Óptica (Miopia e Lentes)",
        textoBase: "Muitos estudantes desenvolvem dificuldade em focar objetos distantes, como o quadro da sala de aula, após horas ao computador. Esse distúrbio visual, em que o globo ocular é mais alongado do que o normal e a imagem forma-se ANTES da retina, é a miopia.",
        pergunta: "Para corrigir a miopia e deslocar a imagem de volta para a retina, a física ótica recomenda a utilização de óculos com lentes:",
        alternativas: {
            A: "Convergentes.",
            B: "Cilíndricas.",
            C: "Bifocais.",
            D: "Divergentes.",
            E: "Opacas."
        },
        correta: "D",
        explicacao: "Como o olho do míope é longo (ou o cristalino é muito convergente), os raios de luz cruzam-se antes de chegarem à 'tela' de fundo (retina). A lente Divergente 'espalha' a luz antes que ela entre no olho, fazendo o foco ser atirado mais para trás, caindo na retina."
    },
    {
        id: 120,
        materia: "Multidisciplinar",
        assunto: "Química + Matemática (Meia-vida)",
        textoBase: "Os elementos radioativos possuem um 'Tempo de Meia-vida', que é o tempo necessário para que a massa do elemento se reduza a metade do seu valor original através de emissões radioativas. Um reator gera um lixo nuclear com 100 gramas de um isótopo cuja meia-vida é de 5 anos.",
        pergunta: "Passados 15 anos de armazenamento, qual será a massa restante do elemento radioativo?",
        alternativas: {
            A: "50 gramas.",
            B: "25 gramas.",
            C: "12,5 gramas.",
            D: "10 gramas.",
            E: "Zero gramas."
        },
        correta: "C",
        explicacao: "Se a meia-vida é de 5 anos, em 15 anos ocorrem 3 quebras (15 / 5 = 3 ciclos). Tempo 0: 100g. 1º ciclo (5 anos): 50g. 2º ciclo (10 anos): 25g. 3º ciclo (15 anos): 12,5g."
    },
    {
        id: 121,
        materia: "Multidisciplinar",
        assunto: "História + Atualidades (Guerra e TI)",
        textoBase: "Durante o recente conflito na Ucrânia, além das tropas físicas, verificou-se o uso massivo de *hackers* apoiados por governos para invadir sistemas de energia, bancos e comunicação do adversário antes mesmo de os mísseis serem disparados.",
        pergunta: "Este novo campo de batalha tático, onde o conflito se dá através de códigos de computador em redes digitais, é amplamente designado por:",
        alternativas: {
            A: "Guerra de Trincheiras.",
            B: "Guerra Cibernética (Cyberwarfare).",
            C: "Guerra Fria 2.0.",
            D: "Conflito Bélico Analógico.",
            E: "Terrorismo de Mercado."
        },
        correta: "B",
        explicacao: "Cyberwarfare (Guerra Cibernética) é o termo usado para ações de nações-estado (ou *hackers* patrocinados por estas) com o objetivo de causar danos graves aos sistemas digitais e de infraestrutura de outra nação."
    },
    {
        id: 122,
        materia: "Multidisciplinar",
        assunto: "Português + Lógica (Análise de Discurso)",
        textoBase: "Um influenciador publicou nas redes: 'Todas as empresas que instalam sistemas solares utilizam equipamentos da China. A HyperZ instala sistemas solares. Logo, a HyperZ obrigatoriamente utiliza equipamento da China.'",
        pergunta: "Considerando as regras da coesão textual e do raciocínio lógico, o trecho acima estrutura-se sob a forma de um raciocínio:",
        alternativas: {
            A: "Indutivo, pois parte de um caso particular para criar uma regra geral.",
            B: "Dedutivo (Silogismo), pois parte de uma regra geral universal para garantir a veracidade de um caso particular.",
            C: "Falacioso, pois as premissas não têm nenhuma ligação linguística com a conclusão.",
            D: "Paradoxal, pois a conclusão anula a afirmação da primeira frase.",
            E: "Analógico, baseando-se em mera comparação hipotética."
        },
        correta: "B",
        explicacao: "A dedução é a lógica que vai do GERAL para o PARTICULAR. A premissa 1 ('Todas as empresas...') estabelece uma regra universal. A premissa 2 cita o caso particular ('A HyperZ...'). A conclusão lógica torna-se uma dedução inquestionável dentro deste argumento."
    },
    {
        id: 123,
        materia: "Multidisciplinar",
        assunto: "Química + Geografia (Tratamento de Água e Saneamento)",
        textoBase: "Bairros periféricos, que sofrem com a falta de estações de tratamento de esgoto e água encanada, apresentam índices muito maiores de doenças infecciosas de veiculação hídrica.",
        pergunta: "Na primeira etapa de uma Estação de Tratamento de Água (ETA), adiciona-se sulfato de alumínio à água suja para que as partículas de sujidade se aglomerem em flocos mais pesados, num processo químico denominado:",
        alternativas: {
            A: "Floculação e Coagulação.",
            B: "Fervura.",
            C: "Cloração intensiva.",
            D: "Destilação solar.",
            E: "Filtração por osmose reversa."
        },
        correta: "A",
        explicacao: "O sulfato de alumínio atua como agente coagulante. Ele aglomera a sujidade dissolvida (barro, resíduos) em grandes flocos pesados (coagulação/floculação), que depois se depositam no fundo do tanque pela ação da gravidade (decantação)."
    },
    {
        id: 124,
        materia: "Multidisciplinar",
        assunto: "Inglês + Tecnologias Verdes",
        textoBase: "Read the excerpt: 'The transition from internal combustion engines to EV (Electric Vehicles) demands a massive expansion of charging stations across the highways to eliminate driver’s range anxiety.'",
        pergunta: "Baseado no texto e nos conhecimentos gerais sobre a indústria, o que significa o termo 'range anxiety' enfrentado pelos motoristas de veículos elétricos (EV)?",
        alternativas: {
            A: "O medo de que a bateria do carro se incendeie a altas velocidades.",
            B: "A ansiedade e o receio de que a bateria descarregue antes de se alcançar o destino ou a próxima estação de carregamento.",
            C: "A raiva gerada pelos engarrafamentos constantes nas grandes cidades.",
            D: "O stress de não conseguir ligar o carro no frio intenso.",
            E: "A fobia de comprar carros pela internet."
        },
        correta: "B",
        explicacao: "Em inglês automóvel, 'Range' significa o alcance/autonomia do veículo. 'Range anxiety' (ansiedade de autonomia) é o medo clássico dos donos de carros elétricos de ficar sem bateria a meio da viagem por falta de postos de carregamento."
    },
    {
        id: 125,
        materia: "Multidisciplinar",
        assunto: "Física + Biologia (Efeito Estufa)",
        textoBase: "A vida na Terra só é possível porque a nossa atmosfera retém parte do calor emitido pelo Sol, evitando que o planeta congele à noite. A revolução industrial, contudo, aumentou a concentração de certos gases (como o metano e o CO₂), desequilibrando este sistema.",
        pergunta: "Fisicamente, qual é o papel dos 'gases do efeito estufa' na atmosfera terrestre?",
        alternativas: {
            A: "Permitir que os raios UV entrem, mas bloquear a saída da radiação infravermelha (calor) libertada pela superfície da Terra.",
            B: "Bloquear a luz visível do Sol antes que chegue à Terra, escurecendo os oceanos.",
            C: "Funcionar como refrigeradores naturais, convertendo o calor solar em vento.",
            D: "Desintegrar a camada de ozono, causando furacos no Equador.",
            E: "Repelir os campos magnéticos que protegem o planeta contra os raios cósmicos."
        },
        correta: "A",
        explicacao: "A luz do sol (visível/UV) entra e aquece a Terra. O solo aquecido devolve a energia sob a forma de radiação Infravermelha (calor). Os gases do efeito estufa atuam como o vidro de uma estufa: eles 'prendem' esse infravermelho, não o deixando escapar para o espaço, gerando o aquecimento."
    }
];