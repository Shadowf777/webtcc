<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../../public/styleSite/style.css">
    <link rel="stylesheet" href="../../public/contato/styleContato.css">
    <link rel="icon" type="image/x-icon" href="../../public/imagens/favicon.png">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <title>Fale conosco</title>
</head>
<body>

  <?php
 require("../elementosFixos/menu.html");
 ?>

<div class="container_" style="align-items: center" id="container_" tabindex="0" onfocus="closeSidebar()">

    <div class="contato">
        <strong>Gostaria de falar conosco?</strong>
        <p>Preecha os campos com as suas informações, ou utilize um dos modos de contato.</p>
        <h3><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dot" viewBox="0 0 16 16">
            <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"/>
          </svg> Para dúvidas, comentários, feedback, elogios ou bate-papo.</h3>
        <div class="formas">
        <form>
            <div class="formulario">

            <input id="nome" type="text" placeholder="Nome completo" required><br>

            <input id="email" type="email" placeholder="Email" required><br>

            <input id="assunto" type="text" placeholder="Assunto (não obrigatório)"><br>

            <div id="msg">

            <input id="mensagem" placeholder="Mensagem" required></div>

            <input onclick="formulario()" id="enviar" type="submit" value="Enviar"></div>
        </form>
        <div class="span">
            <div>
              <h2><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
              </svg> Telefone: </h2>
            <h4>+55 (19) 8765-4321</h4>
            </div>

            <div>
              <h2><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-whatsapp" viewBox="0 0 16 16">
                <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
              </svg> Celular (WhatsApp): </h2>
            <h4>+55 (19) 98765-4321</h4>
            </div>

            <div>
              <h2><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
              </svg> Endereço: </h2>
            <h4>Rua 123, 321 - Bairro, Limeira - SP</h4>
            </div>
            
            <div>
              <h2><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
              </svg> Email: </h2>
            <h4>ecostuff.cotil@gmail.com</h4>
            </div>
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
      <script>
        const inputs = document.querySelectorAll('.formulario input');

        function ajustarInputs() {
            const larguraTela = window.innerWidth; 

            inputs.forEach(input => {
                if (larguraTela > 1240) {
                    input.style.width = "477px";
                } else if (larguraTela > 910) {
                    input.style.width = "400px";
                } else if (larguraTela > 848){
                    input.style.width = "350px";
                } else if (larguraTela > 796){
                    input.style.width = "300px";
                } else if (larguraTela > 650){
                    input.style.width = "500px";
                } else if (larguraTela > 450){
                    input.style.width = "400px";
                } else if (larguraTela > 400){
                    input.style.width = "350px";
                } else if (larguraTela < 401){
                    input.style.width = "300px";
                }
            });
        }

        window.addEventListener('resize', ajustarInputs);
        window.addEventListener('load', ajustarInputs);
      </script>

</body>
</html>