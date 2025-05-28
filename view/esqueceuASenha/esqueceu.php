<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../../public/styleSite/style.css">
    <link rel="stylesheet" href="../../public/esqueceuASenha/styleSenha.css">
    <link rel="icon" type="image/x-icon" href="../imagens/favicon.png">
    <title>Esqueci minha senha</title>
</head>
<body>

   <?php
 require("../elementosFixos/menu.html");
 ?>


    <div class="container_" id="container_" tabindex="0" onfocus="closeSidebar()">

    <div class="esqueceu">
        <strong>Esqueceu sua senha?</strong>
        <p>Preencha seu email, e um código de verificação será enviado.</p>

<<<<<<< HEAD
        <form action="codigo.php">
=======
        <form id="formEmail" action="codigo.php">
>>>>>>> be1af0933807d7a552ac70e8133e42a0361fd257
            <input id="email" type="email" placeholder="Seu email" required><br>
            <input type="submit" value="Enviar">
        </form>

    </div>



    </div>

    <script type="module" src="../../public/styleSite/stylePop.js"></script>
    <script src="../../public/scriptPopUp.js"></script>
    <script src="../../public/menuResponsivo.js"></script>
<<<<<<< HEAD


   

=======
    <script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
    <script src="../../public/esqueceuASenha/mandarEmail.js"></script>
>>>>>>> be1af0933807d7a552ac70e8133e42a0361fd257
</body>
</html>