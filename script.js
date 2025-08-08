
const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você encontra um portal futurista em seu celular que afirma: 'Você acaba de acessar uma IA capaz de prever suas emoções. O que você pensa primeiro?",
        alternativas: [
            {
                texto: "Isso é incrível! ",
                afirmacao: "Isso é invasivo!"
            },
            {
                texto: "Isso é incrível!",
                afirmacao: "Isso é invasivo"
            }
        ]
    },
    {
        enunciado: "Após interagir com essa IA emocional, sua escola resolve apresentar Eliza, o primeiro chatbot criado nos anos 1960. Qual é sua reação?",
        alternativas: [
            {
                texto: "Uau, um chatbot da era dos '60!",
                afirmacao: "Só um robô antigo?"
            },
            {
                texto: "Uau, um chatbot da era dos '60!",
                afirmacao: "Só um robô antigo?"
            }
        ]
    },
    {
        enunciado: "Em uma aula, o professor menciona o Workshop de Dartmouth de 1956, onde o termo 'Inteligência Artificial' foi cunhado. Como você reage?",
        alternativas: [
            {
                texto: "Interessante saber a origem do termo!",
                afirmacao: "Isso não impacta a tecnologia atual."
            },
            {
                texto: "Interessante saber a origem do termo!",
                afirmacao: "Isso não impacta a tecnologia atual."
            }
        ]
    },
    {
        enunciado: "Depois, durante o debate, aparece o teste de Turing: uma máquina tenta convencer você de que é humana num jogo de perguntas. Como você se posiciona?",
        alternativas: [
            {
                texto: "Que legal imaginar conversar com uma IA indistinguível de um humano!",
                afirmacao: "Isso parece assustador."
            },
            {
                texto: "Que legal imaginar conversar com uma IA indistinguível de um humano!",
                afirmacao: "Isso parece assustador."
            }
        ]
    },
    {
        enunciado: "Por fim, sua escola apresenta ferramentas que usam IA para gamificação e educação, como Kahoot! e Duolingo. O que você pensa?",
        alternativas: [
            {
                texto: "Adoro, deixa aprender mais divertido!",
                afirmacao: "Prefiro estudos tradicionais. "
            },
            {
                texto: "Adoro, deixa aprender mais divertido!",
                afirmacao: "Prefiro estudos tradicionais. "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
