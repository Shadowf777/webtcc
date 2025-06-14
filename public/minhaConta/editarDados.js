import { getUsuarioLogado } from "../estadoLogin/estadoLogin.js";
import { getUsuario } from "../usuario.js";

const nome = document.getElementById('nome');
const email = document.getElementById('email');
const cpf = document.getElementById('cpf');
const rg = document.getElementById('rg');
const celular = document.getElementById('celular');

var nomeU = "";
var emailU = "";
var cpfU = "";
var rgU = "";
var celularU = "";


var usuarios = getUsuario();

usuarios.forEach(usuario => {
    if(usuario.email === getUsuarioLogado())
    {
        nome.value = usuario.nome;
        email.value = usuario.email;
        cpf.value = usuario.cpf;
        rg.value = usuario.rg;
        celular.value = usuario.celular;
    }
    
});

document.getElementById('formEdicao').addEventListener('submit', ()=>{

    
}

)

