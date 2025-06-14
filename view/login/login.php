<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" type="image/x-icon" href="../../public/imagens/favicon.png">
    <link rel="stylesheet" href="../../public/styleSite/style.css">
    <link rel="stylesheet" href="../../public/cadastro/styleLogin.css">
    <link rel="stylesheet" href="../../public/esqueceuASenha/styleSenha.css">
    <title>Login</title>
</head>

<body>
   <?php
 require("../elementosFixos/menu.html");
 ?>


    <div class="container_" id="container_" tabindex="0" onfocus="closeSidebar()">

        <div class="login">
            <strong>Faça login em sua conta</strong>

            <form id="formLogin">
                <input type="email" placeholder="Seu email" id="email" required><br>

                <div><input class="senha" id="senha" type="text" placeholder="Sua senha" required>
                    <button type="button" class="botao" id="botao">
                        <img class="olho" id="olho" src="../../public/imagens/aberto.png"></button>
                </div><br>
                <span id="msgSenha"></span>

                <div style="display: flex; align-items: center;">
                    <input type="submit" value="Fazer login">
                    <p style="margin: 2vw;"> <a href="../esqueceuASenha/esqueceu.php">Esqueceu a Senha </a></p>
                </div>

                <p>Ainda não tem uma conta? <a href="../cadastro/cadastro.php">Clique aqui</a> para realizar o
                    cadastro.</p>

            </form>




        </div>




    </div>
    <script type="module" src="../../public/styleSite/stylePop.js"></script>
    <script src="../../public/cadastro/aparenciaLoginCadastro.js"></script>
    <script src="../../public/scriptPopUp.js"></script>
    <script src="../../public/menuResponsivo.js"></script>
    <script type="module" src="../../public/cadastro/login.js"></script>

</body>

</html>