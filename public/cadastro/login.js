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
      
    // ========== GETTERS ==========
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
    
    // ========== SETTERS ==========
    set nome(novoNome) {
        /*if (typeof novoNome !== "string" || novoNome.trim() === "") {
        throw new Error("Nome inválido!");
        }*/
        this._nome = novoNome.trim();
    }
    
    set email(novoEmail) {
        /*const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!regexEmail.test(novoEmail)) {
        throw new Error("E-mail inválido!");
        }*/
        this._email = novoEmail;
    }
    
    set celular(novoCelular) {
        /*const regexCelular = /^\d{10,11}$/; // 10 ou 11 dígitos (DDD + número)
        if (!regexCelular.test(novoCelular)) {
        throw new Error("Celular inválido!");
        }*/
        this._celular = novoCelular;
    }
    
    set cpf(novoCpf) {
        /*const cpfLimpo = novoCpf.replace(/\D/g, ""); // Remove não-dígitos
        if (cpfLimpo.length !== 11) {
        throw new Error("CPF deve ter 11 dígitos!");
        }*/
        this._cpf = novoCpf;
    }
    
    set rg(novoRg) {
        /*const rgLimpo = novoRg.replace(/\D/g, ""); // Remove não-dígitos
        if (rgLimpo.length !== 9) {
        throw new Error("RG deve ter 9 dígitos!");
        }*/
        this._rg = novoRg;
    }
    
    set senha(novaSenha) {
        /*if (novaSenha.length < 6) {
        throw new Error("Senha deve ter pelo menos 6 caracteres!");
        }*/
        this._senha = novaSenha; // Em um caso real, seria criptografada
    }
      
}

////////////////////////////////////////////////

var usuarios = []; // lista de usuarios

////////////////////////////////////////////////

export function adicionarUsuario(u)
{
    usuarios.push(u);
};

////////////////////////////////////////////////

export function getUsuarios() {
    return usuarios;
}

////////////////////////////////////////////////

var login = false;




export function fazerLogin(event) {
    console.log("entrou no fazerLogin");
    event.preventDefault();
    var check = false;

    var email = document.getElementById("email").value;
    var senha = document.getElementById("senha").value;
    var styleEmail = document.getElementById("email").style;
    var styleSenha = document.getElementById("senha").style;
    var msgSenha = document.getElementById("msgSenha");

    styleSenha.borderColor = "black";
    msgSenha.textContent = "";




    if (email == "" || senha == "") {
        return "CAMPOS VAZIOS";
    }
    else if (email == null || senha == null) {
        return "CAMPOS NULOS";
    }

    else {
        if (login) {
            console.log("JA TEM LOGIN");
            return "JA TEM LOGIN";
        }

        if (!login) {

            if(senha.length < 5)
            {
                console.log("A SENHA DEVE TER MAIS DE CINCO CARACTERES");
                styleSenha.borderColor = "red";
                msgSenha.textContent = "A senha deve ter mais de cinco caracteres!";
                limpar(1);
                return "A SENHA DEVE TER MAIS DE CINCO CARACTERES";
            }

            
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
                    console.log("LOGIN");
                    mudar();
                    return "LOGIN";
                }

            }
        }


        msgSenha.textContent = "A senha ou o e-mail estão incorretos.";
        limpar(2);
        console.log("NAO FEZ LOGIN");
        return "NAO FEZ LOGIN";
    }
}

////////////////////////////////////////////////

function limpar(campos)
{

if(campos == 1)
{
        
        document.getElementById("senha").value = "";
}


else if(campos == 2)
{
        document.getElementById("email").value = "";
        document.getElementById("senha").value = "";
}
}

////////////////////////////////////////////////

function mudar() {
    window.location.href = "../minhaConta/minhaConta.html";
}

