import { setLoggedIn } from "../estadoLogin/estadoLogin.js";
import { apagarConta } from "../usuario.js";

document.getElementById("excluir").addEventListener('click', excluir);
document.getElementById("mudarSenha").addEventListener('click', mudarSenha);


function excluir() {
  Swal.fire({
    title: "Está ação irá excluir sua conta permanentemente. Confirma a exclusão?",
    showDenyButton: true,
    confirmButtonText: "Excluir",
    denyButtonText: `Não excluir`
  }).then((result) => {

    if (result.isConfirmed) {
      Swal.fire("Conta excluída!", "", "success").then(() => {
        window.location.href = '../index/index.php';
        apagarConta();
        setLoggedIn(false);
      });

    } else if (result.isDenied) {
      Swal.fire("Operação cancelada", "", "info");
    }
  });


}

function mudarSenha() {
  window.location.href = "../mudarASenha/mudarSenha.php";
}




// imagem


