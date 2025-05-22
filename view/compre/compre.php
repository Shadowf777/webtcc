<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="../../public/styleSite/style.css">
  <link rel="icon" type="image/x-icon" href="../../public/imagens/favicon.png">
  <link rel="stylesheet" href="../../public/compre/styleCompre.css">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
  <title>Adquira já</title>
</head>

<body>
<?php
 require("../elementosFixos/menu.html");
 ?>


  <div class="container_" id="container_" tabindex="0" onfocus="closeSidebar()">

    <div class="compree">

      <strong>Adquira já uma EcoStuff! </strong>

      <div class="conteudo">
        <div class="texto">
        <p>Você gostaria de ter uma EcoStuff na sua casa?</p>
        <p>A produção desta estufa integrada com minhocário ainda está limitada, mas você pode
          fazer parte do grupo exclusivo que receberá uma EcoStuff no primeiro lote!</p>
        <p>Aproveite esta oportunidade e desfrute da realização que apenas uma EcoStuff pode
          proporcionar!
        </p>
      </div>



      <div class="imgCompre">
        <img src="../../public/imagens/estufa.jpg" alt="EcoStuff">
        <a href="https://www.mercadolivre.com.br/" target="_blank" class="btn-comprar">
            Compre já!
        </a>
    </div>
    </div>

      
    </div>

    <?php
        require("../elementosFixos/rodape.html");
        ?>
  </div>
  <script type="module" src="../../public/styleSite/stylePop.js"></script>
  <script src="../../public/scriptPopUp.js"></script>
  <script src="../../public/menuResponsivo.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
    crossorigin="anonymous"></script>
</body>

</html>