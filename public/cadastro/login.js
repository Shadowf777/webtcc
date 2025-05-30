import { setLoggedIn, getLoggedIn, logout } from "../estadoLogin/estadoLogin.js";
import { getUsuarios } from "../usuario.js";


////////////////////////////////////////////////



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

            if(senha.length < 5)
            {
                console.log("A SENHA DEVE TER MAIS DE CINCO CARACTERES");
                styleSenha.borderColor = "red";
                msgSenha.textContent = "A senha deve ter mais de cinco caracteres!";
                limpar(1);
                return "A SENHA DEVE TER MAIS DE CINCO CARACTERES";
            }

            
            check = true;
            var usuarios = getUsuarios();

            for (const u of usuarios) {
                if (u.email != email) {
                    check = false;
                }
                if (u.senha != senha) {
                    check = false;
                }

                if (check) {
                    setLoggedIn(true);
                    console.log("LOGIN");
                    mudar();
                    return "LOGIN";
                }

            }
        }


        msgSenha.textContent = "A senha ou o e-mail estão incorretos.";
        limpar(2);
        console.log("NAO FEZ LOGIN");
        return "NAO FEZ LOGIN";
    }
}

////////////////////////////////////////////////

function limpar(campos)
{

if(campos == 1)
{
        
        document.getElementById("senha").value = "";
}


else if(campos == 2)
{
        document.getElementById("email").value = "";
        document.getElementById("senha").value = "";
}
}

////////////////////////////////////////////////

function mudar() {
    window.location.href = "../minhaConta/minhaConta.php";
}

document.getElementById('formLogin').addEventListener('submit', fazerLogin);