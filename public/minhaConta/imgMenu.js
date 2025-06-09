import { getFotoPerfil, getLoggedIn } from "../estadoLogin/estadoLogin.js";

const imgDefault = '../../public/imagens/perfildefault.jpg'; // imagem default
const img = '../../public/imagens/jacinto.jpg';
var foto = document.querySelectorAll(".imgMenu");
const img = "../../public/imagens/jacinto.jpg";
if (getLoggedIn()) {
    foto.forEach(imagem => {
<<<<<<< HEAD
        //imagem.src =img; //getFotoPerfil();
=======
        imagem.src =img;
>>>>>>> e6781026f0ff8e963e4b8fc553395f20d3764890
    });
}
else if(!getLoggedIn())
{
    foto.forEach(imagem => {
        imagem.src = imgDefault;
    });
}
