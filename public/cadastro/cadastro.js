import { Usuario, adicionarUsuario, getUsuario } from "../usuario.js";
import { getLoggedIn, setLoggedIn } from "../estadoLogin/estadoLogin.js";
//import { setLoginOuCadastro } from "../estadoLogin/estadoLogin.js";

var login;

var nomeStyle = document.getElementById('nome').style;
var senhaStyle = document.getElementById('senha').style;
var emailStyle = document.getElementById('email').style;

var msg = document.getElementById('msg');
msg.style.color = "red";
var u1;//usuario para o cadastro
var usuarios = getUsuario();



//adicionarUsuario(u1);

function cadastro(event) {
    login = getLoggedIn();
    console.log("estado do login" + login);

    var nome = document.getElementById('nome').value;
    var cpf = document.getElementById('cpf').value;
    var rg = document.getElementById('rg').value;
    var email = document.getElementById('email').value;
    var celular = document.getElementById('celular').value;
    var senha = document.getElementById('senha').value;

    console.log("ENTROU NA FUNC DE CADASTRO");
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
            msg.textContent = "O nome deve ter mais de 10 caracteres.";
            return "NOME PRECISA DE MAIS CARAC";

        }
        else if (senha.length < 8) {
            console.log("A SENHA DEVE TER MAIS DE 5 CARACTERES");
            senhaStyle.borderColor = "red";
            msg.textContent = "A senha deve ter mais de 8 caracteres.";
            return "SENHA PRECISA DE MAIS CARAC"

        }

        else {
            const usuarioExistente = usuarios.find(usuario => usuario.email === email);
            if (usuarioExistente) {
                emailStyle.borderColor = "red";
                console.log("Este email já está cadastrado!");
                document.getElementById('email').value = "";
                msg.textContent = "Email já cadastrado!";
                
                return "EMAIL JA CADASTRADO";
            }

            u1 = new Usuario(nome, email, celular, cpf, rg, senha);

            adicionarUsuario(u1);

            console.log("CADASTRO FEITO COM SUCESSO");


            Swal.fire({
                title: "Cadastro concluído com sucesso!",
                text: "Adicione mais informações para completar sua conta.",
                confirmButtonText: "Yay",
                customClass: {
                    popup: 'my-swal-popup',
                    title: 'my-swal-title',
                    content: 'my-swal-content',
                    confirmButton: 'my-swal-confirm-button',
                }
            }).then((result) => {

                if (result.isConfirmed) {
                    window.location.href = '../../view/login/login.html';
                }

            });




            return "FEZ CADASTRO";
        }

        //console.log("NAO FEZ CADASTRO");

    }

}



document.getElementById('formCadastro').addEventListener('submit', function (event) { cadastro(event) });
