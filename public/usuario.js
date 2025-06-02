//var usuarios = []; // lista de usuarios
import {adicionarUsuarios , getUsuarios} from "./estadoLogin/estadoLogin.js"

export class Usuario {
    

    constructor(nome, email, celular, cpf, rg, senha)
    {
        this._nome = nome;
        this._email = email;
        this._celular = celular;
        this._cpf = cpf;
        this._rg = rg;
        this._senha = senha;
    }
      
    // ========== GETTERS ============================
    get nome() {
        return this._nome;
    }
    
    get email() {
        return this._email;
    }
    
    get celular() {
        return this._celular;
    }
    
    get cpf() {
        return this._cpf;//.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4"); // Formata CPF (000.000.000-00)
    }
    
    get rg() {
        return this._rg;//.replace(/(\d{2})(\d{3})(\d{3})(\d{1})/, "$1.$2.$3-$4"); // Formata RG (00.000.000-0)
    }
    

    get senha() {
        return this._senha; 
    }
    
    // ========== SETTERS ===========================
    set nome(novoNome) {
        /*if (typeof novoNome !== "string" || novoNome.trim() === "") {
        throw new Error("Nome inválido!");
        }*/
       console.log(novoNome);
        this._nome = novoNome.trim();
    }
    
    set email(novoEmail) {
        /*const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!regexEmail.test(novoEmail)) {
        throw new Error("E-mail inválido!");
        }*/
       console.log(novoEmail);
        this._email = novoEmail;
    }
    
    set celular(novoCelular) {
        /*const regexCelular = /^\d{10,11}$/; // 10 ou 11 dígitos (DDD + número)
        if (!regexCelular.test(novoCelular)) {
        throw new Error("Celular inválido!");
        }*/
       console.log(novoCelular);
        this._celular = novoCelular;
    }
    
    set cpf(novoCpf) {
        /*const cpfLimpo = novoCpf.replace(/\D/g, ""); // Remove não-dígitos
        if (cpfLimpo.length !== 11) {
        throw new Error("CPF deve ter 11 dígitos!");
        }*/
       console.log(novoCpf);
        this._cpf = novoCpf;
    }
    
    set rg(novoRg) {
        /*const rgLimpo = novoRg.replace(/\D/g, ""); // Remove não-dígitos
        if (rgLimpo.length !== 9) {
        throw new Error("RG deve ter 9 dígitos!");
        }*/
       console.log(novoRg);
        this._rg = novoRg;
    }
    
    set senha(novaSenha) {
        /*if (novaSenha.length < 6) {
        throw new Error("Senha deve ter pelo menos 6 caracteres!");
        }*/
       console.log(novSenha);
        this._senha = novaSenha; // Em um caso real, seria criptografada
    }
      
}

////////////////////////////////////////////////////////////////////////////////////////////////

export function adicionarUsuario(u)
{
    var u2 = JSON.stringify(u)
    adicionarUsuarios(u2);
    
}

////////////////////////////////////////////////////////////////////////////////////////////////

export function getUsuario() {
     const usuariosJson = getUsuarios();
    if (!usuariosJson) {
        return [];
    }

    const listaUsuariosJson = JSON.parse(usuariosJson);
    
    // Converte cada item do array de volta para um objeto Usuario (opcional)
    const listaUsuarios = listaUsuariosJson.map(usuarioJson => {
        const usuarioObj = JSON.parse(usuarioJson);
        const usuario = new Usuario(); // Supondo que você tenha uma classe Usuario
        Object.assign(usuario, usuarioObj); // Copia as propriedades
        return usuario;
    });
    
    return listaUsuarios;
}

////////////////////////////////////////////////////////////////////////////////////////////////


const u1 = new Usuario("Cecília Pignatelli de Oliveira", "cecilia@gmail.com", "19999100212","47276333884", "585014589", "cecilia123");

adicionarUsuario(u1);



