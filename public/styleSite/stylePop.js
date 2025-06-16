import { getLoggedIn , setLoggedIn, logout} from '../estadoLogin/estadoLogin.js'

var estadoLogin = getLoggedIn();
console.log(estadoLogin);

var login = document.getElementById("login");
var cadastro = document.getElementById("cadastro");
var minhaConta = document.getElementById("minhaConta");
var logoutP = document.getElementById("logout");
var imgMenu = document.querySelectorAll(".imgMenu");

if(estadoLogin)
{
    minhaConta.style.display = "contents";
    logoutP.style.display = "contents";
    login.style.display = "none";
    cadastro.style.display = "none";
    imgMenu.forEach(imagem => {
  imagem.src = '../../public/imagens/perfildefault.jpg';
});
}

else if(!estadoLogin)
{
    minhaConta.style.display = "none";
    logoutP.style.display = "none";
    login.style.display = "contents";
    cadastro.style.display = "contents";
}

document.getElementById('logout').addEventListener('click', function(e) {
    setLoggedIn(false);
    logout();
    window.location.href = "../../view/index/index.html"
  });



