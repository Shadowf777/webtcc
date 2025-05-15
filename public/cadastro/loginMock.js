import { Usuario , adicionarUsuario, getUsuarios , fazerLogin} from "./login.js";

document.getElementById('formLogin').addEventListener('submit', fazerLogin);

var u1 = new Usuario("Cecília Pignatelli de Oliveira", "cecilia@gmail.com", "19999100212","47276333884", "585014589", "cecilia123");

adicionarUsuario(u1);

