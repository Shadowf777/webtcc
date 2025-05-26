
document.getElementById("semImagem").addEventListener('click',excluirImagem);
document.getElementById("inputFoto").addEventListener('change',exibirImagem);



var ifimg = true; //pega do banco se tem uma imagem cadastrada ou nao
const img = "../../public/imagens/homem.png";


if(!ifimg){
  document.getElementById('imagemCarregada').src = "../../public/imagens/homem.png";
  document.getElementById('imagemCarregada').style.zIndex = "10";
  console.log("img falsa");
}

else if (ifimg){
    document.getElementById('imagemCarregada').src = img;
    console.log("img true");
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
    }
  }


 function excluirImagem()
 {
  if(true)
  {
      document.getElementById('imagemCarregada').src = "../../public/imagens/homem.png";

  }

 }
