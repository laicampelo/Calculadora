
let valor1="";
let valor2="";
let operacao = false;
let icone="";
let tagResultado = document.getElementById("resultado");
var verificarResposta=false;

//pega o conteúdo inserido pelo usuário.
function pegarBotao(botao) {

    verificar(botao)
}

//verifica se o conteúdo inserido é ou não um número.
function verificar(valor) {
    if (verificarResposta==true) {
        
        apagar()
        verificarResposta=false;
    }
    if (typeof valor == "number"){
        console.log( valor + " TIPO NUMERO")
        armazenarNumero(valor)
        
    } else if(valor1!=""){
        if (valor=="=" && valor2 !=""){
            exibir(valor)
            resposta()
            
            console.log(" valor é igual")
            
        } else {
            console.log( valor + " simbolo")
            exibir(valor)

            if (valor=="delete"){
                apagar()
            }
            else if (valor=="%"){
                valor=parseFloat(valor)
                let r=valor1/100
                apagar()
                exibir(r)
                
            }
            else if (valor=="raiz"){
                    valor=parseFloat(valor)
                    let r=Math.sqrt(valor1)
                    apagar()
                    exibir(r)
                    verificarResposta=true
            }
            else if (valor==".") {
                    if (operacao==true) {
                        valor2+="."
                    }
                    else {
                        valor1+="."
                    }
            }else  {
                icone=valor
                operacao=true
            }
        }
        
    }
}

function armazenarNumero(numero) {

    if (operacao==false){

        valor1+=numero
        console.log(valor1 + " armazenado valor1")
    }else {
        valor2+=numero
        console.log(valor2 + " armazenado valor2")
    }
    exibir(numero)
    
}

function resposta(){

valor1=parseFloat(valor1)
valor2=parseFloat(valor2)
verificarResposta=true;
let r
    switch (icone) {
        case "+":
        r=valor1+valor2
            break;
        
        case "-":
            r=valor1-valor2
            break;

        case "/":
            r=valor1/valor2
            break;

        case "*":
            r=valor1*valor2
            break;

        default:
            break;
    }
    apagar()
    exibir(r)
}

function apagar() {
    valor1="";
    valor2="";
    icone="";
    operacao=false;
    tagResultado.innerHTML="";
}

function exibir(informacao) {
    tagResultado.innerHTML+=informacao;
}



