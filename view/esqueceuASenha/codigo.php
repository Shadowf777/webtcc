<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../../public/styleSite/style.css">
    <link rel="stylesheet" href="../../public/esqueceuASenha/styleSenha.css">
    <title>Esqueci minha senha</title>
</head>
<body>

<?php
 require("../elementosFixos/menu.html");
 ?>


    <div class="container_" id="container_" tabindex="0" onfocus="closeSidebar()">


        <div class="esqueceu">
            <strong>Esqueceu sua senha?</strong>
            <p>
                Preencha com o código enviado.</p>
    
            <form action="senhaNova.php">
                <input type="text" placeholder="Código" maxlength="6" required ><br>
                <input type="submit" value="Enviar">
            </form>
    
        </div>
    

</div>    
    

<script type="module" src="../../public/styleSite/stylePop.js"></script>
<script src="../../public/scriptPopUp.js"></script>
<script src="../../public/menuResponsivo.js"></script>

</body>
</html>