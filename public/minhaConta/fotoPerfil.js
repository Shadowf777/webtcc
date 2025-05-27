
document.getElementById("semImagem").addEventListener('click',excluirImagem);
document.getElementById("inputFoto").addEventListener('change',exibirImagem);



var ifimg = true; //se tem imagem ou nao
const img = '../../public/imagens/homem.png'; // imagem default
//setImagemUsuario(img); 



if(!ifimg){
  document.getElementById('imagemCarregada').src = "../../public/imagens/perfildefault.jpg";
  document.getElementById('imagemCarregada').style.zIndex = "10";
}

else if (ifimg){
    document.getElementById('imagemCarregada').src = img;
}
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
      ifimg = true; // indica que uma imagem foi carregada
    }
  }


 function excluirImagem()
 {
  if(true)
  {
      document.getElementById('imagemCarregada').src = "../../public/imagens/perfildefault.jpg";
      ifimg = false; // indica que a imagem foi excluída

  }

 }
