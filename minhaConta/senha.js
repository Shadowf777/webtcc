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

const input = document.getElementById("input");
//input.addEventListener('click', senhaNova);

function senhaNova()
{
    alert("entrou na func")
    const senha1 = document.getElementById("texto").value;
    const senha2 = document.getElementById("texto2").value;

    if (true)
    {
        alert("nao ta vazio")
        if(senha1.trim() == senha2.trim())
        {
            alert("as senhas tao engual")
            window.location.href= "minhaConta.html";
        }

        else
        {
            senha1.style.borderColor = "red";
            senha2.style.borderColor = "red";
        }
    }
}



document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();

    const senha1 = document.getElementById("senha").value;
    const senha2 = document.getElementById("senha2").value;
    const senha1Input = document.getElementById("senha");
    const senha2Input = document.getElementById("senha2");
    const alerta = document.getElementById("alerta");
    document.getElementById("alerta").style.color = "red";

    senha1Input.style.borderColor = "";
    senha2Input.style.borderColor = "";

    if (!senha1.trim() || !senha2.trim()) {
        
        senha1Input.style.borderColor = "red";
        senha2Input.style.borderColor = "red";
        return;
    }

    if (senha1.trim() !== senha2.trim()) {
        alerta.innerHTML = "As senhas não coincidem. <br><br>"
        senha1Input.style.borderColor = "red";
        senha2Input.style.borderColor = "red";
        return;
    }

    window.location.href = "minhaConta.html";
});

