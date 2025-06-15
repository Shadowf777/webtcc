import { getUsuarioLogado } from '../estadoLogin/estadoLogin.js'

document.getElementById("formSenha").addEventListener("submit", verificarEmail);

function verificarEmail(e) {
    e.preventDefault();
    var emailD = document.getElementById("email").value;
    var msg = document.getElementById("msg");
    //msg.textContent = "";

    const usuarioLogado = getUsuarioLogado();
    var v = false;

    const emailE = usuarioLogado === emailD ? true : false;

    if (!emailE) {
        msg.textContent = "O e-mail inserido é diferente do e-mail da sua conta. Tente novamente.";
        msg.style.color = "red";
        document.getElementById("email").value = "";
        console.log("usuario errado!")
        return;
    }

   if(document.getElementById('senha').value.length < 8)
    {
        msg.textContent="A senha deve ter mais de oito caracteres.";
        return;
    }

    if (document.getElementById('senha').value !== document.getElementById('senha2').value) {
        msg.textContent = "As senhas não coincidem. Tente novamente."
        document.getElementById('senha2').value = "";
        return;
    }

     if (document.getElementById('senha').value === document.getElementById('senha2').value) {
        window.location.href = "../minhaConta/minhaConta.html";
        return;

    }



}