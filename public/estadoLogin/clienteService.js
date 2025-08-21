
export class ClienteService {
    static BASE_URL = 'http://localhost:3000/clientes';

    

    // Buscar cliente por código
    static async buscarPorCodigo(codigo) {
        try {
            const response = await fetch(`${this.BASE_URL}/${codigo}`);
            const text = await response.text();

            if (!response.ok) {
                const error = text ? JSON.parse(text) : { error: 'Erro na requisição' };
                throw new Error(error.error || 'Erro ao buscar cliente');
            }

            return text ? JSON.parse(text) : null;
        } catch (error) {
            console.error('Erro ao buscar cliente:', error);
            throw error;
        }
    }

    // Buscar plantas do cliente
    static async buscarPlantasDoCliente(codigo) {
        try {
            const response = await fetch(`${this.BASE_URL}/${codigo}/plantas`);
            const text = await response.text();

            if (!response.ok) {
                const error = text ? JSON.parse(text) : { error: 'Erro na requisição' };
                throw new Error(error.error || 'Erro ao buscar plantas do cliente');
            }

            return text ? JSON.parse(text) : [];
        } catch (error) {
            console.error('Erro ao buscar plantas do cliente:', error);
            throw error;
        }
    }

    // Buscar cliente por email
    static async buscarPorEmail(email) {
        try {
            const response = await fetch(`${this.BASE_URL}/buscar/${encodeURIComponent(email)}`);
            const text = await response.text();

            if (!response.ok) {
                const error = text ? JSON.parse(text) : { error: 'Erro na requisição' };
                return null;
                //throw new Error(error.error || 'Erro ao buscar cliente por email');
            }

            return text ? JSON.parse(text) : null;
        } catch (error) {
            //console.error('Erro ao buscar cliente por email:', error);
            return null;
        }
    }


    static async verificarSenha(email, senha) {
        try {
            const response = await fetch(`${this.BASE_URL}/verificar-senha`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, senha })
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || 'Erro ao verificar senha');
            }

            return await response.json();
        }
        catch (error) {
            console.error('Erro ao verificar senha:', error);
            throw error;
        }
    }
    // Buscar endereço do cliente
    static async buscarEnderecoDoCliente(codigo) {
        try {
            const response = await fetch(`${this.BASE_URL}/${codigo}/endereco`);
            const text = await response.text();

            if (!response.ok) {
                const error = text ? JSON.parse(text) : { error: 'Erro na requisição' };
                throw new Error(error.error || 'Erro ao buscar endereço do cliente');
            }

            return text ? JSON.parse(text) : null;
        } catch (error) {
            console.error('Erro ao buscar endereço do cliente:', error);
            throw error;
        }
    }

    // Adicionar novo cliente
    static async adicionarCliente(novoCliente) {
        try {
            const response = await fetch(`${this.BASE_URL}/adiciona/cliente`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(novoCliente)
            });

            const text = await response.text();

            if (!response.ok) {
                const error = text ? JSON.parse(text) : { error: 'Erro na requisição' };
                throw new Error(error.error || 'Erro ao adicionar cliente');
            }

            return text ? JSON.parse(text) : { message: 'Cliente adicionado com sucesso' };
        } catch (error) {
            console.error('Erro ao adicionar cliente:', error);
            throw error;
        }
    }

    // Atualizar cliente (exemplo adicional)
    static async atualizarCliente(codigo, dadosAtualizados) {
        try {
            const response = await fetch(`${this.BASE_URL}/${codigo}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(dadosAtualizados)
            });

            const text = await response.text();

            if (!response.ok) {
                const error = text ? JSON.parse(text) : { error: 'Erro na requisição' };
                throw new Error(error.error || 'Erro ao atualizar cliente');
            }

            return text ? JSON.parse(text) : { message: 'Cliente atualizado com sucesso' };
        } catch (error) {
            console.error('Erro ao atualizar cliente:', error);
            throw error;
        }
    }

    // Remover cliente (exemplo adicional)
    static async removerCliente(codigo) {
        try {
            const response = await fetch(`${this.BASE_URL}/${codigo}`, {
                method: 'DELETE'
            });

            const text = await response.text();

            if (!response.ok) {
                const error = text ? JSON.parse(text) : { error: 'Erro na requisição' };
                throw new Error(error.error || 'Erro ao remover cliente');
            }

            return text ? JSON.parse(text) : { message: 'Cliente removido com sucesso' };
        } catch (error) {
            console.error('Erro ao remover cliente:', error);
            throw error;
        }
    }

    static async fazerLogin(email, senha) {
        try {
            // Validação dos inputs
            if (!email || !senha) {
                return {
                    success: false,
                    error: 'Email e senha são obrigatórios',
                    errorType: 'MISSING_CREDENTIALS',
                    statusCode: 400
                };
            }

            // Validação do formato do email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                return {
                    success: false,
                    error: 'Formato de email inválido',
                    errorType: 'INVALID_EMAIL_FORMAT',
                    statusCode: 400
                };
            }

            // Validação do comprimento da senha
            if (senha.length < 5) {
                return {
                    success: false,
                    error: 'Senha deve ter pelo menos 5 caracteres',
                    errorType: 'INVALID_PASSWORD_LENGTH',
                    statusCode: 400
                };
            }

            // Buscar usuário por email
            const usuario = await this.buscarPorEmail(email);
            console.log(usuario);

            if (usuario == "Error: Pessoa não encontrada") {
                return {
                    success: false,
                    error: 'Email não encontrado',
                    errorType: 'EMAIL_NOT_FOUND',
                    statusCode: 404
                };
            }

            // Verificar senha
            const resultadoSenha = await this.verificarSenha(email, senha);

            if (!resultadoSenha.senhaValida) {
                return {
                    success: false,
                    error: 'Senha incorreta',
                    errorType: 'INVALID_PASSWORD',
                    statusCode: 401,
                    //tentativasRestantes: resultadoSenha.tentativasRestantes || 3
                };
            }

            // Autenticação bem-sucedida
            return {
                success: true,
                user: email,
                message: 'Login realizado com sucesso',
                statusCode: 200
            };

        } catch (error) {
            // Se já for um erro estruturado, apenas propaga
            if (error.success === false) {
                throw error;
            }

            // Erro inesperado do banco/sistema
            console.error('Erro na autenticação:', error);
            return {
                success: false,
                error: 'Erro interno do servidor',
                errorType: 'INTERNAL_SERVER_ERROR',
                statusCode: 500
            };
        }



    } catch(error) {
        console.error('Erro no login:', error);

        // Identifica o tipo de erro
        let errorMessage = 'Erro durante o login';
        let errorType = 'UNKNOWN_ERROR';

        if (error.message.includes('Cliente não encontrado')) {
            errorMessage = 'Email não encontrado';
            errorType = 'EMAIL_NOT_FOUND';
            return 1;
        } else if (error.message.includes('network')) {
            errorMessage = 'Problema de conexão. Verifique sua internet';
            errorType = 'NETWORK_ERROR';
            return 2;
        } else if (error.message.includes('fetch')) {
            errorMessage = 'Servidor indisponível no momento';
            errorType = 'SERVER_ERROR';
            return 3;
        }

        return 4;
    }
}


const r = ClienteService.verificarSenha("cecilia@gmail.com", 'cecilia123')
console.log(r.senhaValida)
