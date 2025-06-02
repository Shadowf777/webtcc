import {Usuario} from "../usuario.js";
let isLoggedIn = false;



export const setLoggedIn = (value) => {
  isLoggedIn = value;

  sessionStorage.setItem('isLoggedIn', value.toString());
};


export const getLoggedIn = () => {

  return isLoggedIn || sessionStorage.getItem('isLoggedIn') === 'true';
};


export const logout = () => {
  isLoggedIn = false;
  sessionStorage.removeItem('isLoggedIn');
};

export const adicionarUsuarios = (usuario) =>
{
  sessionStorage.setItem("usuario",usuario);

}

export const getUsuario  = () =>
{
  return sessionStorage.getItem("usuario")
}
/*export const imagemUsuario = () => {
  return sessionStorage.getItem('imagemUsuario') || '../../public/imagens/perfildefault.jpg';
}

export const setImagemUsuario = (bool) => {
  sessionStorage.setItem('imagemUsuario', bool);
}
export const temImagem = () => {
  return sessionStorage.getItem('imagemUsuario');;
}*/