//var usuarios = []; // lista de usuarios
import {adicionarUsuarios , getUsuarios, getUsuarioLogado, removerUsuario} from "./estadoLogin/estadoLogin.js"

export class Usuario {
    

    constructor(nome, email, celular, cpf, rg, senha,end)
    {
        this.nome = nome;
        this.email = email;
        this.celular = celular;
        this.cpf = cpf;
        this.rg = rg;
        this.senha = senha;
        this.end = end;
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
        senha: u.senha,
        end: u.end
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


export function apagarConta()
{
    const usuarioLogado = getUsuarioLogado();
    removerUsuario(usuarioLogado);

}



////////////////////////////////////////////////////////////////////////////////////////////////


const u1 = new Usuario("Cecília Pignatelli de Oliveira", "cecilia@gmail.com", "(19) 99910-0212","472.763.338-84", "58.501.458-9", "cecilia123",0);

adicionarUsuario(u1);



