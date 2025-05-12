class Usuario
{
    constructor(email, senha)
    {
        this.email = email;
        this.senha = senha;
    }

    /*constructor(nome, email, celular, cpf, rg, senha)
    {
        this.nome = nome;
        this.email = email;
        this.celular = celular;
        this.cpf = cpf;
        this.rg = rg;
        this.senha = senha;
    }*/
}

var usuarios = [new Usuario("cecilia@gmail.com","cecilia123")];

function getUsuarios()
{
    return usuarios;
}

var login = false;


function fazerLogin (email, senha)
{
    var check = false;
    if(login)
    {
        return "JA TEM LOGIN";
    }

    if(!login)
    {
        check = true;
        var usuarios = getUsuarios();
        
        for(const u of usuarios)
        {
            if(u.email!=email)
            {
                check = false;
            }
            if(u.senha!= senha)
            {
                check = false;
            }

            if(check)
            {
                login = true;
                return "LOGIN";
            }
            
        }
    }

    return "NAO FEZ LOGIN";
}

var email = "cecilia@gmail.com";
var senha = "cecilia123";
var r = fazerLogin(email,senha);
console.log(r);