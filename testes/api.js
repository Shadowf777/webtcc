fetch('/api/clientes/todos') // Vite redireciona para Node
import { ClienteService } from './estadoLogin/clienteService.js';
ClienteService.verificarSenha('felipe@gmail.com',"123456789")
    .then(cliente => console.log(cliente))
    .catch(error => console.error(error));