
import { getUsuario } from "../usuario.js";

document.getElementById("formSenha").addEventListener("submit", verificarEmail);

function verificarEmail(e)
{
e.preventDefault();
var emailD = document.getElementById("email").value;
var msg = document.getElementById("alerta");
msg.textContent = "";

const usuarios = getUsuario();
var v = false;

const emailE = usuarios.find(u => u.email === emailD);

if(emailE == null)
{
    msg.textContent = "Não foi encontrada uma conta vinculada ao e-mail digitado. Tente novamente.";
    msg.style.color = "red";
    document.getElementById("email").value = "";
}

else
{
    //window.location.href="codigo.php";
}


}