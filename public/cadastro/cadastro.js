import { Usuario, adicionarUsuario } from "./login.js";

var login = false;



var nomeStyle = document.getElementById('nome').style;
var senhaStyle = document.getElementById('senha').style;




var u1;//usuario para o cadastro

//adicionarUsuario(u1);

function cadastro(event) {

    var nome = document.getElementById('nome').value;
    var cpf = document.getElementById('cpf').value;
    var rg = document.getElementById('rg').value;
    var email = document.getElementById('email').value;
    var telefone = document.getElementById('telefone').value;
    var celular = document.getElementById('celular').value;
    var senha = document.getElementById('senha').value;

    console.log("ENTROU NA FUNC DE CADASTRO");
    console.log(nome);
    event.preventDefault();

    if (login) {
        console.log("JA TEM LOGIN");
        return "JA TEM LOGIN";
    }
    else {
        if (nome.length < 10) {
            console.log("O NOME DEVE TER MAIS DE 10 CARACTERES");
            console.log(nome.length)
            nomeStyle.borderColor = "red";
            return "NOME PRECISA DE MAIS CARAC";

        }
        else if (senha.length < 5) {
            console.log("A SENHA DEVE TER MAIS DE 5 CARACTERES");
            senhaStyle.borderColor = "red";
            return "SENHA PRECISA DE MAIS CARAC"

        }

        else {
            console.log("antes do usuario");
            u1 = new Usuario(nome, email, celular, cpf, rg, senha);
            console.log(nome);
            console.log(email);
            console.log(celular);
            console.log(cpf);
            console.log(rg);
            console.log(senha);

            console.log("dps do usuario");
            adicionarUsuario(u1);
            console.log("CADASTRO FEITO COM SUCESSO");
            return "FEZ CADASTRO";
        }

        //console.log("NAO FEZ CADASTRO");

    }

}

document.getElementById('formCadastro').addEventListener('submit', function (event) {
    cadastro(
        event
    )
});
