import { getFotoPerfil, getLoggedIn } from "../estadoLogin/estadoLogin.js";

const imgDefault = '../../public/imagens/perfildefault.jpg'; // imagem default
var foto = document.querySelectorAll(".imgMenu");
const img = "../../public/imagens/jacinto.jpg";
if (getLoggedIn()) {

    
    foto.forEach(imagem => {
        imagem.src =img;
    });
}
else if(!getLoggedIn())
{
    foto.forEach(imagem => {
        imagem.src = imgDefault;
    });
}
