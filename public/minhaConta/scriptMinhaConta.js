import { setLoggedIn, logout } from "../estadoLogin/estadoLogin.js";
import { apagarConta } from "../usuario.js";

document.getElementById("excluir").addEventListener('click', excluir);
document.getElementById("mudarSenha").addEventListener('click', mudarSenha);


function excluir() {
  Swal.fire({
    title: "Está ação irá excluir sua conta permanentemente. Confirma a exclusão?",
    showDenyButton: true,
    confirmButtonText: "Excluir",
    denyButtonText: `Não excluir`,
    customClass: {
      popup: 'my-swal-popup',
      title: 'my-swal-title',
      content: 'my-swal-content',
      confirmButton: 'my-swal-confirm-button',
      denyButton: 'my-swal-deny-button',
    }
  }).then((result) => {

    if (result.isConfirmed) {
      Swal.fire("Conta excluída!", "", "success").then(() => {
        window.location.href = '../index/index.html';
        apagarConta();
        logout();
      });

    } else if (result.isDenied) {
      Swal.fire("Operação cancelada", "", "info");
    }
  });


}

function mudarSenha() {
  window.location.href = "../mudarASenha/mudarSenha.html";
}




// imagem


