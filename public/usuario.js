//var usuarios = []; // lista de usuarios
import {adicionarUsuarios , getUsuarios, getUsuarioLogado, removerUsuario} from "./estadoLogin/estadoLogin.js"

export class Usuario {
    

    constructor(NOME, EMAIL, CELULAR, CPF_CNPJ, RG, SENHA,END)
    {
        this.NOME = NOME;
        this.EMAIL = EMAIL;
        this.CELULAR = CELULAR;
        this.CPF_CNPJ = CPF_CNPJ;
        this.RG = RG;
        this.SENHA = SENHA;
        this.END = END;
        console.log("construtor")
    }
     
      
}

////////////////////////////////////////////////////////////////////////////////////////////////

export function adicionarUsuario(u)
{
     const usuario = {
        NOME: u.NOME,
        EMAIL: u.EMAIL,
        CELULAR: u.CELULAR,
        CPF_CNPJ: u.CPF_CNPJ,
        RG: u.RG,
        SENHA: u.SENHA,
        END: u.END
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



