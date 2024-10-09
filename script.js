const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPerguntas = document.querySelector('.caixa-perguntas');
const caixaAlternativas = document.querySelector('.caixa-alternativas');
const caixaResultado = document.querySelector('.caixa-resultado');

const perguntas = [ //serve para abrir lista de perguntas
    {//abre o objeto das perguntas
        enunciado: "A IA faz parte da sua vida?",
        alternativas: 
            [{texto: "sim",
            afirmação: "A IA faz parte da minha vida"},   
            
            {texto:"não",
             afirmação:"A IA não faz parte da minha vida"}
            ]
    },
    {
        enunciado: "è possível que a IA se torne ainda mais dominante no nosso dia a dia?",
        alternativas: [{texto:"sim",
        afirmação: "É possível"}
        ]
        
        [{texto:"não",
        afirmação:"Não é possível"}
        ]
    },
    {
        enunciado: "A IA está se tornando mais presente na vidas das pessoas?",
        alternativas: [{texto:"sim",
        afirmação: "Está mais presente na vida das pessoas"}
        ]
        
        [{texto:"não",
        afirmação:"A IA não esta mais presente na vida das pessoas"}
        ] 
    },
      
{
    enunciado: "Você utiliza da IA em tarefas diárias?",
    alternativas: [{texto:"sim",
    afirmação: "Utilizo"}
    ]
    
    [{texto:"não",
    afirmação:"Não utilizo"}
    ]
},
    {
    enunciado: "Você é usuário ativo das IA's??",
    alternativas: [{texto:"sim",
    afirmação: "Utilizo"}
    ]
    
    [{texto:"não",
    afirmação:"Não utilizo"}
    ]
    },
{
    enunciado: "A IA é perigosa?",
    alternativas: [{texto:"sim",
    afirmação: "É perigosa"}
    ]
    
    [{texto:"não",
    afirmação:"Não é perigosa"}
    ]
},
]

let posicao = 0;
let perguntaAtual;
let historiafinal= "";

function mostraPergunta(){
    if(posicao>= perguntas.length){
        mostraresultado();
        return;
    }
    perguntaAtual = perguntas[posicao];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent= " ";
    mostraAlternativas();
}
function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoalternativas = document.createElement("button");
        botaoalternativas.textContent = alternativa.texto;
        botaoalternativas.addEventListener("click",()=>respostaselecionada(alternativa));
        caixaAlternativas.appendChild(botaoalternativas)
    }
}
function respostaselecionada(opcaoselecionada){
   const afirmacoes =opcaoselecionada.afirmação;
   historiafinal = afirmacoes;
    posicao++
    mostraPergunta();
}
function mostraresultado(){
    caixaPerguntas.textContent = "opala 71...";
    textoresultado.textContent = historiafinal;
    caixaAlternativas.textContent = ""
}
mostraPergunta();

