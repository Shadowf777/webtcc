const toggleLink1 = document.getElementById('dadosPessoais');
const toggleLink2 = document.getElementById('enderecoPessoal');

toggleLink1.addEventListener('click', (event) => {
    event.preventDefault();
    window.location.href = 'dados.html';
});

toggleLink2.addEventListener('click', (event) => {
    event.preventDefault();
    window.location.href = 'endereco.html';
});

// imagem olhar senha ou nao
const aberto = document.getElementById().innerHTML = "";
const fechado = document.getElementById().innerHTML = ""; //sem visualizar a senha
var olho = aberto;

const texto = document.getElementById()//input que aparece a senha



function clicar()
{
    if (olho == aberto)
    {
        olho = fechado;
        texto.innerHTML = "";//mudar o estilo pra nao aparecer a senha
    }

    else 
    {
        olho = fechado;
        texto.innerHTML = "";//mudar o estilo pra aparecer a senha

    }
}