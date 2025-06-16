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
  sessionStorage.setItem('isLoggedIn', "false");
  sessionStorage.setItem("usuarioLogado", "");
};

export const adicionarUsuarios = (usuario) => {
  const listaUsuarios = getUsuarios() || [];


  const usuarioExistente = listaUsuarios.some(
    (u) => u.email === usuario.email
  );

  if (!usuarioExistente) {
    listaUsuarios.push(usuario);
    sessionStorage.setItem("usuarios", JSON.stringify(listaUsuarios));
  }
};

export const getUsuarios = () => {
  const usuariosJson = sessionStorage.getItem("usuarios"); // Pega a string JSON
  return usuariosJson ? JSON.parse(usuariosJson) : []; // Converte para array de objetos
};

export const getUsuarioLogado = () =>
{
  return sessionStorage.getItem("usuarioLogado");
}

export const setUsuarioLogado = (email) =>
{
  sessionStorage.setItem("usuarioLogado", email)
}

export const setFotoPerfil = (foto)=>
{
  sessionStorage.setItem("foto",foto);
  
}

export const getFotoPerfil = () =>
{
  return sessionStorage.getItem("foto");
}

export const removerUsuario = (email) => {
  const listaUsuarios = getUsuarios() || [];

  const listaAtualizada = listaUsuarios.filter((usuario) => usuario.email !== email);

  sessionStorage.setItem("usuarios", JSON.stringify(listaAtualizada));

};