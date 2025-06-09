import { getLoggedIn, setFotoPerfil } from "../estadoLogin/estadoLogin.js";

var imgMenu = document.querySelectorAll('.imgMenu');
const imgDefault = '../../public/imagens/perfildefault.jpg'; // imagem default
const img = '../../public/imagens/jacinto.jpg'; // imagem homem

if(!getLoggedIn())
{
  imgMenu.forEach(imagem => {
      imagem.src = imgDefault;
    });
}
else if (getLoggedIn()) {


document.getElementById("semImagem").addEventListener('click', excluirImagem);
document.getElementById("inputFoto").addEventListener('change', exibirImagem);



var ifimg = false; //se tem imagem ou nao

//setImagemUsuario(img); 




if (!ifimg) {
  document.getElementById('imagemCarregada').src = imgDefault;
  document.getElementById('imagemCarregada').style.zIndex = "10";
  /*imgMenu.forEach(imagem => {
      imagem.src = '../../public/imagens/perfildefault.jpg';
    });*/
}

else if (ifimg) {
  document.getElementById('imagemCarregada').src = img;
  imgMenu.forEach(imagem => {
      imagem.src = img;
    });
}
// pega a img do bd msm

function exibirImagem(event) {
  const input = event.target;
  const imagemCarregada = document.getElementById('imagemCarregada');

  const file = input.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      const img = e.target.result;
      imagemCarregada.src = e.target.result;
      imagemCarregada.classList.add('show');
      /*imgMenu.forEach(imagem => {
      imagem.src = e.target.result;
    });*/
      setFotoPerfil(img);
    };
    reader.readAsDataURL(file);
    ifimg = true; // indica que uma imagem foi carregada
  }
}


function excluirImagem() {
  if (true) {
    document.getElementById('imagemCarregada').src = imgDefault;
    ifimg = false; // indica que a imagem foi excluída
    
    imgMenu.forEach(imagem => {
      imagem.src = imgDefault;
    });
  }

}

}
