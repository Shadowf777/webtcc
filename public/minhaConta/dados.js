import { getUsuario, adicionarUsuario } from "../usuario.js";
import { getUsuarioLogado } from "../estadoLogin/estadoLogin.js";
import { ClienteService } from "../estadoLogin/clienteService.js";


const usuarioLogado = getUsuarioLogado();
loadConta(usuarioLogado);


async function loadConta(usuario) {
  var nome="";
  var email = "";
  var primeiro = "";

  try{
    const uT = await ClienteService.buscarPorEmail(usuario);
    nome = uT.NOME;
    email = usuario;
    primeiro = nome;
    //nome.split(' ')[0];

    document.getElementById("nomeUsuario").textContent = primeiro;

  document.getElementById("nomeCompleto").textContent = nome;

  document.getElementById("emailUsuario").textContent = email;

  console.log(uT.CODIGO);

  const plantas = await ClienteService.buscarPlantasDoCliente(uT.CODIGO);

  if(!plantas)
  {
    const carrossel = document.getElementsByClassName("carrossel");
    carrossel.innerHTML = "<p>Você não possui plantas cadastradas.</p>";
  }

  }
  catch (error) {
    console.log('Erro ao carregar dados do cliente:', error);
  }

}




