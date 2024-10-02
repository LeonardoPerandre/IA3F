const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPerguntas = document.querySelector('.caixa-perguntas');
const caixaAlternativas = document.querySelector('.caixa-alternativas');
const caixaResultado = document.querySelector('.caixa-resultado');

const perguntas = [ //serve para abrir lista de perguntas
    {//abre o objeto das perguntas
        enunciado: "A IA faz parte da sua vida?",
        alternativas: 
            [{texto: "sim",
            afirmação: "afirmação da alternativa"},   
            
            {texto:"não",
             afirmação:"afirmação da alternativa"}
            ]
    },
    {
        enunciado: "è possível que a IA se torne ainda mais dominante no nosso dia a dia?",
        alternativas: [{texto:"sim",
        afirmação: "afirmação da alternativa"}
        ]
        
        [{texto:"não",
        afirmação:"afirmação da alternativa"}
        ]
    },
    {
        enunciado: "A IA está se tornando mais presente na vidas das pessoas?",
        alternativas: [{texto:"sim",
        afirmação: "afirmação da alternativa"}
        ]
        
        [{texto:"não",
        afirmação:"afirmação da alternativa"}
        ] 
    },
      
{
    enunciado: "Você utiliza da IA em tarefas diárias?",
    alternativas: [{texto:"sim",
    afirmação: "afirmação da alternativa"}
    ]
    
    [{texto:"não",
    afirmação:"afirmação da alternativa"}
    ]
},
    {
    enunciado: "Você é usuário ativo das IA's??",
    alternativas: [{texto:"sim",
    afirmação: "afirmação da alternativa"}
    ]
    
    [{texto:"não",
    afirmação:"afirmação da alternativa"}
    ]
    },
{
    enunciado: "A IA é perigosa?",
    alternativas: [{texto:"sim",
    afirmação: "afirmação da alternativa"}
    ]
    
    [{texto:"não",
    afirmação:"afirmação da alternativa"}
    ]
}
]

let posicao = 0;
let perguntaAtual;
let historiafinal= "";

function mostraPergunta(){
    perguntaAtual = perguntas[posicao];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
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

mostraPergunta();

