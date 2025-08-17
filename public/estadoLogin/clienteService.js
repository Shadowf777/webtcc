
class ClienteService {
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
                throw new Error(error.error || 'Erro ao buscar cliente por email');
            }

            return text ? JSON.parse(text) : null;
        } catch (error) {
            console.error('Erro ao buscar cliente por email:', error);
            throw error;
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
        } catch (error) {
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
}


ClienteService.verificarSenha('felipe@gmail.com',"12345678")
    .then(cliente => console.log(cliente))
    .catch(error => console.error(error));