import { getUsuario, adicionarUsuario } from "../usuario.js";
import { getUsuarioLogado } from "../estadoLogin/estadoLogin.js";

const usuarios = getUsuario();
const usuarioLogado = getUsuarioLogado();
loadConta(usuarioLogado);

/*const loginOuCadastro = getLoginOuCadastro();
switch (loginOuCadastro) {
  case "cadastro":
    contaCadastro();
    break;

  case "login":
    contaLogin();
    break;

  default:
    console.log("problema com o sessionstorage");
    break;
}*/




function loadConta(usuario) {
  var nome="";
  var email = "";
  var primeiro = "";
  usuarios.forEach(u => {
    if (u.email === usuario) {
      nome = u.nome;
      email = u.email;
      primeiro = nome.split(' ')[0];
    }

  });

  document.getElementById("nomeUsuario").textContent = primeiro;

  document.getElementById("nomeCompleto").textContent = nome;

  document.getElementById("emailUsuario").textContent = email;
}




