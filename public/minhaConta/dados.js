import { getUsuario, adicionarUsuario } from "../usuario.js";
import { getUsuarioLogado } from "../estadoLogin/estadoLogin.js";
import { ClienteService } from "../estadoLogin/clienteService.js";


const usuarioLogado = getUsuarioLogado();
loadConta(usuarioLogado);


async function loadConta(usuario) {
  var nome = "";
  var email = "";
  var primeiro = "";

  try {
    const uT = await ClienteService.buscarPorEmail(usuario);
    const end = await ClienteService.buscarEnderecoDoCliente(uT.CODIGO);
    nome = uT.NOME;
    email = usuario;
    primeiro = nome.split(' ')[0];
    //nome.split(' ')[0];

    document.getElementById("nomeUsuario").textContent = primeiro;

    document.getElementById("nomeCompleto").textContent = nome;

    document.getElementById("emailUsuario").textContent = email;

    console.log(uT.CODIGO);

    const plantas = await ClienteService.buscarPlantasDoCliente(uT.CODIGO);

    // getElementsByClassName retorna HTMLCollection, precisamos pegar o primeiro elemento
    const carrossel = document.getElementsByClassName("carrosselConta")[0];
    const car = document.getElementsByClassName("carrossel")[0];

    if (plantas === false) {
      // Não há plantas cadastradas (404)
      car.innerHTML = "<div class='naoTem'><p>Você não possui plantas cadastradas...</p><p>Tente acessar o aplicativo Mobile para adicionar uma nova planta.</p></div>";
    } else if (plantas && plantas.length > 0) {
      console.log(plantas);
      carrossel.innerHTML = plantas.map(plant => `
        <div class="car_Conta">
          <img src="../../public/imagens/${plant.URL_IMAGE}" alt="${plant.NOME}">
          <div class="car_Conta_Informacoes">
            <div class="tituloCar">${plant.NOME}</div>
            <div class="texto">${plant.OBSERVACOES}</div>
          </div>
        </div>
      `).join('');

      window.dispatchEvent(new CustomEvent('plantasCarregadas', {
        detail: { quantidade: plantas.length }
      }));

    } else {
      // Array vazio (caso a API retorne [] em vez de 404)
      car.innerHTML = "<div class='naoTem'><p>Você não possui plantas cadastradas...</p><p>Tente acessar o aplicativo Mobile para adicionar uma nova planta.</p></div>";
    }

    if (!end) {
            document.getElementById("enderecoUsuario").textContent = "Nenhum endereço cadastrado.";
 // Pega o primeiro endereço, caso haja mais de um
    } 
    else {
            document.getElementById("enderecoUsuario").textContent = `${end.RUA}, ${end.NUMERO} - ${end.CIDADE}, ${end.ESTADO} - CEP: ${end.CEP}`;

    }

  } catch (error) {
    console.error('Erro no carregamento:', error);

    // Mostra erro para o usuário
    const carrossel = document.getElementsByClassName("carrossel")[0];
    carrossel.innerHTML = `
        <p style="color: red;">Erro ao carregar plantas: ${error.message}</p>
        <button onclick="location.reload()">Tentar novamente</button>
    `;
  }

}






