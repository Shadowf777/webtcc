import {getUsuario , adicionarUsuario} from "../usuario.js";
import { getLoginOuCadastro } from "../estadoLogin/estadoLogin.js";

const usuarios = getUsuario();


const loginOuCadastro = getLoginOuCadastro();
switch(loginOuCadastro)
{
    case "cadastro":
        contaCadastro();
        break;

    case "login":
        contaLogin();
        break;

    default:
        console.log("problema com o sessionstorage");
        break;
}


const nome = document.getElementById('nome');
const email = document.getElementById('emai,');
const cpf = document.getElementById('cpf');
const rg = document.getElementById('rg');
const celular = document.getElementById('calular');

function contaLogin() {

  document.getElementById("nomeUsuario").textContent = "Cecília";

  document.getElementById("nomeCompleto").textContent = "Cecília Pignatelli de Oliveira";

  document.getElementById("emailUsuario").textContent = "cecilia@gmail.com";

  var rua = "R. Aristides Lobo";
  var numero = 1146;
  var bairro = "Cidade Universitária";
  var cidade = "Campinas";
  var estado = "SP";
  var endereco = rua + " " + numero + " - " + bairro + ", " + cidade + " - " + estado;

  document.getElementById("enderecoUsuario").textContent = endereco;
}

function contaCadastro() {
  document.getElementById("nomeUsuario").textContent = "Felipe";

  document.getElementById("nomeCompleto").textContent = "Felipe Cassio Rocha de Oliveira Lima";

  document.getElementById("emailUsuario").textContent = "felipe@gmail.com";

}



