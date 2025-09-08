import { ClienteService } from "../estadoLogin/clienteService";

async function verificarEmail(e) {
    e.preventDefault();
    var emailD = document.getElementById("email").value;
    var msg = document.getElementById("msg");
    msg.textContent = "";
    console.log("entrou em pedir codigo");

    try {
        const r = await ClienteService.solicitarRecuperacaoSenha(emailD);
        alert(r.message);
        sessionStorage.setItem("emailTroca",emailD);

        window.location.href = "../../view/mudarASenha/codigo.html";
    }
    catch (error) {
        alert(error.message);
    }

}
document.getElementById("formEmail")?.addEventListener("submit", verificarEmail);

