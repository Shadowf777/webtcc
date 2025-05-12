class Usuario {
    constructor(email, senha) {
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

var usuarios = [new Usuario("cecilia@gmail.com", "cecilia123")];

function getUsuarios() {
    return usuarios;
}

var login = false;



var r = "";

function fazerLogin(event) {
    console.log("entrou no fazerLogin");
    event.preventDefault();
    var check = false;

    var email = document.getElementById("email").value;
    var senha = document.getElementById("senha").value;

    if (email == "" || senha == "") {
        r = "CAMPOS VAZIOS";
        return "CAMPOS VAZIOS";
    }
    else if (email == null || senha == null) {
        r = "CAMPOS NULOS";
        return "CAMPOS NULOS";
    }

    else {
        if (login) {
            r = "JA TEM LOGIN";
            return "JA TEM LOGIN";
        }

        if (!login) {
            check = true;
            var usuarios = getUsuarios();

            for (const u of usuarios) {
                if (u.email != email) {
                    check = false;
                }
                if (u.senha != senha) {
                    check = false;
                }

                if (check) {
                    login = true;
                    r = "LOGIN";
                    return "LOGIN";
                }

            }
        }

        r = "NAO FEZ LOGIN";
        return "NAO FEZ LOGIN";
    }
}


console.log(r);



function mudar() {
    window.location.href = "../minhaConta/minhaConta.html";
}

document.getElementById('formLogin').addEventListener('submit', fazerLogin);