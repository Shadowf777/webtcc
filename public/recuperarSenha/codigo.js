import { ClienteService } from "../estadoLogin/clienteService";

const email = sessionStorage.getItem("emailTroca");
console.log(email);
async function verificarCodigo()
{
    const codigo = document.getElementById("campo").value;
    const msg = document.getElementById("msg");
    try{
        alert("entrou no try")
        const r = await ClienteService.verificarCodigoRecuperacao(email,codigo);
        

        if(r){
            window.location.href="../../view/mudarASenha/senhaNova.html";
        }
        else{
            msg.value = "O código inserido está incorreto. Tente novamente."
            msg.style.color = "red";
        }
        alert(r)
    }
    catch(e)
    {
        alert(e);
    }
}

document.getElementById("form").addEventListener("submit", verificarCodigo);