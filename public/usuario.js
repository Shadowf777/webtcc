export class Usuario
{
    constructor(email, senha)
    {
        this.email = email;
        this.senha = senha;
    }

    constructor(nome, email, celular, cpf, rg, senha)
    {
        this.nome = nome;
        this.email = email;
        this.celular = celular;
        this.cpf = cpf;
        this.rg = rg;
        this.senha = senha;
    }
}

var usuarios = [Usuario("cecilia@gmail.com","cecilia123")];

export function getUsuarios()
{
    return usuarios;
}