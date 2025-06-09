import { getFotoPerfil, getLoggedIn } from "../estadoLogin/estadoLogin.js";

const imgDefault = '../../public/imagens/perfildefault.jpg'; // imagem default
const img = '../../public/imagens/jacinto.jpg';
var foto = document.querySelectorAll(".imgMenu");
if (getLoggedIn()) {
    foto.forEach(imagem => {
        //imagem.src =img; //getFotoPerfil();
    });
}
else if(!getLoggedIn())
{
    foto.forEach(imagem => {
        imagem.src = imgDefault;
    });
}
