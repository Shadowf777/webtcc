import { getUsuarioLogado } from "../estadoLogin/estadoLogin.js";
import { getUsuario } from "../usuario.js";
import { ClienteService } from "../estadoLogin/clienteService.js";
import SSAAPassNode from "three/examples/jsm/tsl/display/SSAAPassNode.js";

const nome = document.getElementById('nome');
const email = document.getElementById('email');
const cpf = document.getElementById('cpf');
const rg = document.getElementById('rg');
const celular = document.getElementById('celular');


const usuario = getUsuarioLogado();

async function loadDadosEditar() {
    try {
        const usuarioDados = await ClienteService.buscarPorEmail(usuario);
        console.log(usuarioDados);
        nome.value = usuarioDados.NOME;
        email.value = usuarioDados.EMAIL;
        cpf.value = usuarioDados.CPF_CNPJ;
        rg.value = usuarioDados.RG;
        celular.value = usuarioDados.CELULAR;
    }
    catch (error) {
        console.error("Erro ao carregar dados do usuário:", error);
    }
}
loadDadosEditar();
document.getElementById('formEdicao').addEventListener('submit', () => {
    event.preventDefault();
    const usuarioAtualizado = {
        NOME: nome.value,
        EMAIL: email.value,
        CPF_CNPJ: cpf.value,
        RG: rg.value,
        CELULAR: celular.value,
        SENHA: "",
        URL_IMAGE: "",
    };
    var uLogado = 0;
    pegarCodigo(usuario).then(codigo => {
        uLogado = codigo;
        console.log(uLogado);
        ClienteService.atualizarCliente(uLogado, usuarioAtualizado)
            .then(response => {
                console.log("Usuário atualizado com sucesso:", response);
                alert("Dados atualizados com sucesso!");
                window.location.href = "minhaConta.html"; // Redireciona para a página de conta
            })
            .catch(error => {
                console.error("Erro ao atualizar usuário:", error);
                alert("Erro ao atualizar dados. Tente novamente.");
            });
    });



}

)
async function pegarCodigo(uLogado) {
    try {
        const usuarioDados = await ClienteService.buscarPorEmail(uLogado);
        const r = usuarioDados.CODIGO;
        return r;

    }
    catch (error) {
        console.error("Erro ao carregar dados do usuário:", error);
    }
}

