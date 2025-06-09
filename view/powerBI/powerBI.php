<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../../public/styleSite/style.css">
    <link rel="stylesheet" href="../../public/powerBI/powerBI.css">
    <link rel="icon" type="image/x-icon" href="../../public/imagens/favicon.png">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <title>Página Inicial</title>
</head>
<body>

 <?php
 require("../elementosFixos/menu.html");
 ?>


<div class="container_" id="container_" tabindex="0" onfocus="closeSidebar()">
       
<div class="power">
    <div class="tituloPower">Estatísticas sobre a EcoStuff</div>

    <p>Este painel foi feito com a plataforma Power BI como forma de demonstrar os dados cadastrados na EcoStuff.</P>

    <div class="powerbi">

    </div>





</div>

        

        <?php
        require("../elementosFixos/rodape.html");
        ?>
    </div>


    
    <script type="module" src="../../public/styleSite/stylePop.js"></script>
    <script src="../../public/scriptPopUp.js"></script>
    <script src="../../public/menuResponsivo.js"></script>



    </body>
</html>