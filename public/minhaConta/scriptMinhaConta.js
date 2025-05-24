import { setLoggedIn } from "../estadoLogin/estadoLogin.js";

document.getElementById("excluir").addEventListener('click',excluir);
document.getElementById("mudarSenha").addEventListener('click',mudarSenha);
document.getElementById("semImagem").addEventListener('click',excluirImagem);
document.getElementById("inputFoto").addEventListener('change',exibirImagem);

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


// imagem

var img = false; //pega do banco se tem uma imagem cadastrada ou nao


if(!img){
  document.getElementById('imagemCarregada').src = "../../public/imagens/perfildefault.jpg";
  document.getElementById('imagemCarregada').style.zIndex = "10";
}

else{}
// pega a img do bd msm

function exibirImagem(event) {
    const input = event.target;
    const imagemCarregada = document.getElementById('imagemCarregada');

    const file = input.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function(e) {
        imagemCarregada.src = e.target.result;
        imagemCarregada.classList.add('show');
      };
      reader.readAsDataURL(file);
    }
  }


 function excluirImagem()
 {
  if(true)
  {
      document.getElementById('imagemCarregada').src = "../../public/imagens/perfildefault.jpg";

  }

 }

