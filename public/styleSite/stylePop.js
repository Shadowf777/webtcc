import { getLoggedIn , setLoggedIn} from '../estadoLogin/estadoLogin.js'

var estadoLogin = getLoggedIn();
console.log(estadoLogin);

var login = document.getElementById("login");
var cadastro = document.getElementById("cadastro");
var minhaConta = document.getElementById("minhaConta");
var logout = document.getElementById("logout");
var imgMenu = document.querySelectorAll(".imgMenu");

if(estadoLogin)
{
    minhaConta.style.display = "contents";
    logout.style.display = "contents";
    login.style.display = "none";
    cadastro.style.display = "none";
    imgMenu.forEach(imagem => {
  imagem.src = '../../public/imagens/homem.png';
});
}

else if(!estadoLogin)
{
    minhaConta.style.display = "none";
    logout.style.display = "none";
    login.style.display = "contents";
    cadastro.style.display = "contents";
}

document.getElementById('logout').addEventListener('click', function(e) {
    setLoggedIn(false);
    window.location.href = "../../view/index/index.php"
  });



