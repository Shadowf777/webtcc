//var usuarios = []; // lista de usuarios
import {adicionarUsuarios , getUsuarios} from "./estadoLogin/estadoLogin.js"

export class Usuario {
    

    constructor(nome, email, celular, cpf, rg, senha)
    {
        this.nome = nome;
        this.email = email;
        this.celular = celular;
        this.cpf = cpf;
        this.rg = rg;
        this.senha = senha;
        console.log("construtor")
    }
     
      
}

////////////////////////////////////////////////////////////////////////////////////////////////

export function adicionarUsuario(u)
{
     const usuario = {
        nome: u.nome,
        email: u.email,
        celular: u.celular,
        cpf: u.cpf,
        rg: u.rg,
        senha: u.senha
    };
    adicionarUsuarios(usuario);
    
}

////////////////////////////////////////////////////////////////////////////////////////////////

export function getUsuario() {
    const usuarios = getUsuarios() || []; // Pega o array de objetos
    return usuarios.map(usuario => {
        const u = new Usuario(); // Cria nova instância
        Object.assign(u, usuario); // Copia as propriedades
        return u;
    });
}

////////////////////////////////////////////////////////////////////////////////////////////////


const u1 = new Usuario("Cecília Pignatelli de Oliveira", "cecilia@gmail.com", "19999100212","47276333884", "585014589", "cecilia123");

adicionarUsuario(u1);



