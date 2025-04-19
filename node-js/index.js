// 
import mysql from 'mysql2/promise';
import express from 'express';

const app = express();
async function connectDB()
{
    try
    {
        const conn = await mysql.createConnection({
            host: '143.106.241.4',
            user: 'cl203237',    
            password: 'cl*31012008',
            database: 'cl203237'
        }); 
        console.log('Conexão Feita');
        return conn;
    } catch(err)
    {
        console.error('Erro ao Iniciar a conexão: ', err);
        throw err;
    }
}

connectDB();




app.listen(3000, () => {
    console.log('🔄 Servidor rodando na porta 3000');
});

