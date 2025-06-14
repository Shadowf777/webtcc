import { setLoggedIn, getLoggedIn, logout } from "../estadoLogin/estadoLogin.js";
import { getUsuario, Usuario, adicionarUsuario } from "../usuario.js";
import { setUsuarioLogado } from "../estadoLogin/estadoLogin.js";


const u1 = new Usuario("Cecília Pignatelli de Oliveira", "cecilia@gmail.com", "(19) 99910-0212", "472.763.338-84", "58.501.458-9", "cecilia123");

adicionarUsuario(u1);


/////////////////////////////////////////////////


var login;

export function fazerLogin(event) {
    login = getLoggedIn();
    console.log("estado do login" + login);
    console.log("entrou no fazerLogin");
    event.preventDefault();
    var check = false;

    var email = document.getElementById("email").value;
    var senha = document.getElementById("senha").value;
    var styleEmail = document.getElementById("email").style;
    var styleSenha = document.getElementById("senha").style;
    var msgSenha = document.getElementById("msgSenha");

    styleSenha.borderColor = "black";
    msgSenha.textContent = "";




    if (email == "" || senha == "") {
        return "CAMPOS VAZIOS";
    }
    else if (email == null || senha == null) {
        return "CAMPOS NULOS";
    }

    else {
        if (login) {
            console.log("JA TEM LOGIN");
            return "JA TEM LOGIN";
        }

        if (!login) {


            if (senha.length < 5) {
                console.log("A SENHA DEVE TER MAIS DE CINCO CARACTERES");
                styleSenha.borderColor = "red";
                msgSenha.textContent = "A senha deve ter mais de cinco caracteres!";
                limpar(1);
                return "A SENHA DEVE TER MAIS DE CINCO CARACTERES";
            }


            check = true;
            var usuarios = getUsuario();

            console.log(usuarios);
            const usuarioEncontrado = usuarios.find(u => u.email === email && u.senha === senha);

            if (usuarioEncontrado) { // Se encontrou o usuário
                setLoggedIn(true);
                
                setUsuarioLogado(usuarioEncontrado.email);
                console.log("LOGIN");
                mudar();

                return "LOGIN";
            }
            else if (!usuarioEncontrado) {

                msgSenha.textContent = "A senha ou o e-mail estão incorretos.";
                limpar(2);
                console.log("NAO FEZ LOGIN");
                return "NAO FEZ LOGIN";
            }
        }
    }
}

////////////////////////////////////////////////

function limpar(campos) {

    if (campos == 1) {

        document.getElementById("senha").value = "";
    }


    else if (campos == 2) {
        document.getElementById("email").value = "";
        document.getElementById("senha").value = "";
    }
}

////////////////////////////////////////////////

function mudar() {
    window.location.href = "../minhaConta/minhaConta.html";
}

document.getElementById('formLogin').addEventListener('submit', fazerLogin);

