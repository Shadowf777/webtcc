import { ClienteService } from '../estadoLogin/clienteService.js';
import { getLoggedIn, getUsuarioLogado } from '../estadoLogin/estadoLogin';
var r = document.getElementById('rua');
var cep = document.getElementById('cep');
var c = document.getElementById('cidade');
var e = document.getElementById('estado');
var n = document.getElementById('numero');
var b = document.getElementById('bairro');
var comp = document.getElementById('complemento');

const usuario = getUsuarioLogado();
var cadOuAt = false;

async function loadEnderecoEditar() {
    console.log("Carregando dados do endereço...");
    try {
        const usuarioEndereco = await ClienteService.buscarPorEmail(usuario);

        var codigo = usuarioEndereco.CODIGO;
        const enderecoDados = await ClienteService.buscarEnderecoDoCliente(codigo);
        if (!enderecoDados) {
            cep.value = "";
            r.value = "";
            c.value = "";
            e.value = "";
            n.value = "";
            comp.value = "";
            cadOuAt = false;
        }
        else {
            cep.value = enderecoDados.CEP;
            r.value = enderecoDados.RUA;
            c.value = enderecoDados.CIDADE;
            e.value = enderecoDados.ESTADO;
            n.value = enderecoDados.NUMERO;
            b.value = enderecoDados.BAIRRO;
            cadOuAt = true;
        }
    }
    catch (error) {
        console.error("Erro ao carregar dados do endereço:", error);
    }
}
loadEnderecoEditar();



document.getElementById('formEdicao').addEventListener('submit', (event) => {
    event.preventDefault();

    const enderecoAtualizado = {

        CEP: cep.value,
        RUA: r.value,
        NUMERO: n.value,
        BAIRRO: b.value,
        CIDADE: c.value,
        CLIENTE_CODIGO: 0,
        ESTADO: e.value,
        PAIS: "Brasil",
        COMPLEMENTO: comp.value,
    };
    pegarCodigo(enderecoAtualizado).then(() => {
        alert("Endereço atualizado com sucessoo!");
        window.location.href = "minhaConta.html"; // Redireciona para a página de conta
    }).catch(error => {
        console.error("Erro ao atualizar endereço:", error);
        alert("Erro ao atualizar endereço. Tente novamente.");
    });
})

async function pegarCodigo(end) {

    try {
        if (!cadOuAt) {
            const usuarioDados = await ClienteService.buscarPorEmail(usuario);
            end.CLIENTE_CODIGO = usuarioDados.CODIGO;
            const resp = await ClienteService.criarEndereco(end);
            console.log(usuarioDados.CODIGO);
            return
        }
        else {
            const usuarioDados = await ClienteService.buscarPorEmail(usuario);
            const resp = await ClienteService.atualizarEndereco(usuarioDados.CODIGO, end);
            console.log(usuarioDados.CODIGO);
            return
        }
    }
    catch (error) {
        alert("Erro ao carregar dados do usuário:", error);
    }
}

