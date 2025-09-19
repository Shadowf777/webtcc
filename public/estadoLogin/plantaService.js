export class PlantaService {
    static BASE_URL = 'http://localhost:3000/plantas';

    static async buscarPlantaPorCodigo(codigoPlanta) {
        try {
            const response = await fetch(`${this.BASE_URL}/plantas/${codigoPlanta}`);

            // Primeiro obtemos a resposta como texto
            const responseData = await response.text();

            // Se for 404, retorna null (planta não encontrada)
            if (response.status === 404) {
                return null;
            }

            // Verifica outros erros HTTP
            if (!response.ok) {
                const error = responseData ? JSON.parse(responseData) : {
                    error: `Erro ${response.status} na requisição`
                };
                throw new Error(error.error || `Erro ${response.status} ao buscar planta`);
            }

            // Sucesso - retorna a planta
            return responseData ? JSON.parse(responseData) : null;

        } catch (error) {
            console.error('Erro ao buscar planta por código:', error);

            // Melhora as mensagens de erro
            if (error.name === 'SyntaxError') {
                throw new Error('Resposta inválida do servidor');
            }

            if (error.name === 'TypeError' && error.message.includes('fetch')) {
                throw new Error('Não foi possível conectar ao servidor');
            }

            // Propaga o erro com mensagem amigável
            throw new Error(error.message || 'Erro ao buscar informações da planta');
        }
    }

    static getUrlImagemPlanta(nomeArquivo) {
        if (!nomeArquivo) return null;
        return `${this.BASE_URL.replace('/plantas', '')}/${nomeArquivo}`;
    }


}
