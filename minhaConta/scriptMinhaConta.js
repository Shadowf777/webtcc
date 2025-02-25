document.getElementById("nomeUsuario").textContent = "Seu nome";

document.getElementById("nomeCompleto").textContent = "Seu nome completo";

document.getElementById("emailUsuario").textContent = "seuemail@gmail.com";

var rua = "R. Tal";
var numero = 123;
var bairro = "Bairro";
var cidade = "Cidade";
var estado = "SP";
var endereco = rua +" "+numero+" - "+bairro+", "+cidade+" - "+estado;

document.getElementById("enderecoUsuario").textContent = endereco;


//vuctcukttfuftfydrrycf

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

