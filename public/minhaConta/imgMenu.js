import { getFotoPerfil, getLoggedIn } from "../estadoLogin/estadoLogin.js";

const imgDefault = '../../public/imagens/perfildefault.jpg'; // imagem default
const foto = document.querySelectorAll(".imgMenu");
if (getLoggedIn()) {

    
    foto.forEach(imagem => {
        imagem.src = getFotoPerfil();
    });
}
else if(!getLoggedIn())
{
    foto.forEach(imagem => {
        imagem.src = imgDefault;
    });
}
