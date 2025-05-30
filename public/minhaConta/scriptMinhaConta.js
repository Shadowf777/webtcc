import { setLoggedIn } from "../estadoLogin/estadoLogin.js";

document.getElementById("excluir").addEventListener('click',excluir);
document.getElementById("mudarSenha").addEventListener('click',mudarSenha);


function excluir()
{
  Swal.fire({
    title: "Está ação irá excluir sua conta permanentemente. Confirma a exclusão?",
    showDenyButton: true,
    confirmButtonText: "Excluir",
    denyButtonText: `Não excluir`
  }).then((result) => {
    
    if (result.isConfirmed) {
      Swal.fire("Conta excluída!", "", "success").then(() => {
        window.location.href = '../index/index.php';
        setLoggedIn(false);
      });
      
    } else if (result.isDenied) {
      Swal.fire("Operação cancelada", "", "info");
    }
  });

  
}

function mudarSenha()
{
  window.location.href = "../mudarASenha/mudarSenha.php";
}

function contaLogin(){

document.getElementById("nomeUsuario").textContent = "Cecília";

document.getElementById("nomeCompleto").textContent = "Cecília Pignatelli de Oliveira";

document.getElementById("emailUsuario").textContent = "cecilia@gmail.com";

var rua = "R. Aristides Lobo";
var numero = 1146;
var bairro = "Cidade Universitária";
var cidade = "Campinas";
var estado = "SP";
var endereco = rua +" "+numero+" - "+bairro+", "+cidade+" - "+estado;

document.getElementById("enderecoUsuario").textContent = endereco;
}

function contaCadastro(nome,email,)
{

}


// imagem


