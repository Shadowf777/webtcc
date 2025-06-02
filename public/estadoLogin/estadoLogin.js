//import {Usuario} from "../usuario.js";
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

export const adicionarUsuarios = (usuario) => {
  const listaUsuarios = getUsuarios() || [];

  // Converte o objeto Usuario para JSON (se necessário)
  const usuarioJson = JSON.stringify(usuario);

  // Adiciona o novo usuário à lista
  listaUsuarios.push(usuarioJson);

  // Salva a lista atualizada no sessionStorage
  sessionStorage.setItem("usuarios", JSON.stringify(listaUsuarios));

}

export const getUsuarios = () => {
  return sessionStorage.getItem("usuario")
}
