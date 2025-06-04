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
    const listaUsuarios = getUsuarios() || []; // Pega a lista atual (ou vazia)
    listaUsuarios.push(usuario); // Adiciona o objeto USUÁRIO (não stringificado)
    sessionStorage.setItem("usuarios", JSON.stringify(listaUsuarios)); // Salva o ARRAY como JSON
};

export const getUsuarios = () => {
    const usuariosJson = sessionStorage.getItem("usuarios"); // Pega a string JSON
    return usuariosJson ? JSON.parse(usuariosJson) : []; // Converte para array de objetos
};