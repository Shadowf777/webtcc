// imagem olhar senha ou nao
const aberto = '../imagens/aberto.png';
const fechado = '../imagens/fechado.png'; //sem visualizar a senha


const botao = document.getElementById("botao");
botao.addEventListener('click', clicar);

var olho = document.getElementById("olho");
olho.src = fechado;
var estado = "fechado";

const texto = document.getElementById("senha")//input que aparece a senha
texto.type = "password";



const botao2 = document.getElementById("botao2");
botao2.addEventListener('click', clicar2);

var olho2 = document.getElementById("olho2");
olho2.src = fechado;
var estado2 = "fechado";

const texto2 = document.getElementById("senha2")//input que aparece a senha
texto2.type = "password";


function clicar2()
{
    
    if (estado2 == "aberto")
    {
        olho2.src = fechado;
        texto2.type = "password";//mudar o estilo pra nao aparecer a senha
        estado2 = "fechado"
    }

    else if(estado2 == "fechado")
    {
        olho2.src = aberto;
        texto2.type = "text";//mudar o estilo pra aparecer a senha
        estado2 = "aberto"

    }
}

function clicar()
{
    
    if (estado == "aberto")
    {
        olho.src = fechado;
        texto.type = "password";//mudar o estilo pra nao aparecer a senha
        estado = "fechado"
    }

    else if(estado == "fechado")
    {
        olho.src = aberto;
        texto.type = "text";//mudar o estilo pra aparecer a senha
        estado = "aberto"

    }
}