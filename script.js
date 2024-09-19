const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPerguntas = document.querySelector('.caixa-perguntas');
const caixaAlternativas = document.querySelector('.caixa-alternativas');
const caixaResultado = document.querySelector('.caixa-resultado');

const perguntas = [ //serve para abrir lista de perguntas
    {//abre o objeto das perguntas
        enunciado: "A IA faz parte da sua vida?",
        alternativas: ["Alternativa 1","Alternativa 2"]
    },
    {
        enunciado: "è possível que a IA se torne ainda mais dominante no nosso dia a dia?",
        alternativas: ["Alternativa 1","Alternativa 2"]
    },
    {
        enunciado: "A IA está se tornando mais presente na vidas das pessoas?",
        alternativas: ["Alternativa 1","Alternativa 2"]
    },
      
{
    enunciado: "Você utiliza da IA em tarefas diárias?",
    alternativas: ["Alternativa 1","Alternativa 2"]
},
    {
    enunciado: "Você é usuário ativo das IA's??",
    alternativas: ["Alternativa 1","Alternativa 2"]
    },
{
    enunciado: "A IA é perigosa?",
    alternativas: ["Alternativa 1","Alternativa 2"]
}
]

let posicao = 0;
let perguntaAtual;

function mostraPergunta(){
    perguntaAtual = perguntas[posicao];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}
function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoalternativas = document.createElement("button");
        botaoalternativas.textContent = alternativa;
        caixaAlternativas.appendChild(botaoalternativas)
    }
}

mostraPergunta();