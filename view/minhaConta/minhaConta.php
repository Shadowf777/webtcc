<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" type="image/x-icon" href="../../public/imagens/favicon.png">
    <link rel="stylesheet" href="../../public/styleSite/style.css">
    <link rel="stylesheet" href="../../public/minhaConta/styleConta.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=edit_square" /> <title>Sua Conta</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/sweetalert2@11/dist/sweetalert2.min.css">

  </head>
<body>
 
 <?php
 require("../elementosFixos/menu.html");
 ?>


<div class="container_" id="container_" tabindex="0" onfocus="closeSidebar()">



        <div class="minhaConta">
            <div class="titulo"><b>Olá, <span id="nomeUsuario"></span>!</b></div>
            <div class="informacoes">


              <div class="imagemConta">
              <div class="image-container">
                <input id="inputFoto" class="inputFoto" type="file" accept="image/*">
                <img id="imagemCarregada" class="imagem-carregada " src="../../public/imagens/homem.png" alt="">
                <div id="editar">
                  <div class="lapis"><span class="material-symbols-outlined">
                    edit_square
                    </span>
                  </div>
                </div>
                
              </div>
              <button id="semImagem">Excluir a imagem</button>
            </div>

              <div class="informacoesPessoais1">
                <div class="informacoesPessoais">
                  <div class="infos">
                    <div class="lapis"><svg id="dadosPessoais" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                      <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                      <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
                    </svg></div>
                    <div><p><b>Nome: </b><span id="nomeCompleto"></span></p></div>
                    <div><p><b>Email: </b><span id="emailUsuario"></span></p></div>
                  </div>

                    <div class="endereco">
                      <div class="lapis"><svg id="enderecoPessoal" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                        <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
                      </svg></div>
                    <div><p><b>Endereço: </b><span id = "enderecoUsuario"></span></p></div>
                  </div>
                </div>
                <div id="mais1">
                  <div id="mais">

                    <button id="excluir">Excluir conta</button>
                    <button id="mudarSenha">Mudar sua senha</button>
                  </div>
                </div>
              </div>
                
            </div>
          </div>

       

      
        <div class="tituloConta">Suas Plantas</div>
          <div class="carrossel">
            <div class="carrosselConta">
              <div class="car_Conta">
                <img src="../../public/imagens/orquidea.jpg" alt="Orquídea">
                <div class="car_Conta_Informacoes">
                  <div class="tituloCar">Orquídea</div>
                  <div class="texto">Lorem ipsum enetur sequi ipsa quis consequatur aperiam provident nisi accusamus corrupti, sunt qui neque cumque amet.</div>
                </div>
              </div>
              <div class="car_Conta">
                <img src="../../public/imagens/morango.jpg" alt="Morango">
                <div class="car_Conta_Informacoes">
                  <div class="tituloCar">Morango</div>
                  <div class="texto">Lorem ipsum enetur sequi ipsa quis consequatur aperiam provident nisi accusamus corrupti, sunt qui neque cumque amet.</div>
                </div>
              </div>
              <div class="car_Conta">
                <img src="../../public/imagens/planta.jfif" alt="Planta">
                <div class="car_Conta_Informacoes">
                  <div class="tituloCar">Planta</div>
                  <div class="texto">Lorem ipsum enetur sequi ipsa quis consequatur aperiam provident nisi accusamus corrupti, sunt qui neque cumque amet.</div>
                </div>
              </div>
              <div class="car_Conta">
                  <img src="../../public/imagens/samambaia.jpg" alt="Samambaia">
                  <div class="car_Conta_Informacoes">
                    <div class="tituloCar">Samambaia</div>
                    <div class="texto">Lorem ipsum enetur sequi ipsa quis consequatur aperiam provident nisi accusamus corrupti, sunt qui neque cumque amet.</div>
                  </div>
              </div>
              <div class="car_Conta">
                <img src="../../public/imagens/tomate2.jpg" alt="Tomate">
                <div class="car_Conta_Informacoes">
                  <div class="tituloCar">Tomate</div>
                  <div class="texto">Lorem ipsum enetur sequi ipsa quis consequatur aperiam provident nisi accusamus corrupti, sunt qui neque cumque amet.</div>
                </div>
              </div>
              <!-- colocar mais -->
            </div>
          </div>




          <?php
        require("../elementosFixos/rodape.html");
        ?>
    </div>
    <script type="module" src="../../public/minhaConta/fotoPerfil.js"></script>
    <script type="module" src="../../public/styleSite/stylePop.js"></script>
    <script src="../../public/minhaConta/script.js"></script>
    <script src="../../public/scriptPopUp.js"></script>
    <script src="../../public/menuResponsivo.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
    <script type="module" src="../../public/minhaConta/scriptMinhaConta.js"></script>
    <script>
      document.addEventListener("DOMContentLoaded", () => {
  const items = Array.from(document.querySelectorAll(".car_Conta")); // Itens do carrossel
  let currentIndex = 0; // Índice do item atual
  let rotateInterval;

  // Atualiza o carrossel
  const updateCarrossel = () => {
    const prevIndex = (currentIndex - 1 + items.length) % items.length; // Índice do item anterior
    const nextIndex = (currentIndex + 1) % items.length; // Índice do próximo item

    // Resetar estilos de todos os itens
    items.forEach((item) => {
      item.classList.remove("central");
      item.style.transform = "";
      item.style.opacity = "0"; // Por padrão, todos ficam invisíveis
    });

    // Determina as larguras e transformações para cada item
    const windowWidth = window.innerWidth;

    const transformations = {
      prev: windowWidth > 1499 ? "translateX(-500px)" :
             windowWidth >= 1041 ? "translateX(-350px)" :
             windowWidth >= 700  ? "translateX(-10px)" :
             "translateX(-50px)",
      next: windowWidth > 1499 ? "translateX(500px)" :
             windowWidth >= 1041 ? "translateX(350px)" :
             windowWidth >= 700  ? "translateX(10px)" :
             "translateX(50px)",
      center: "translateX(0px)",
    };

    // Determina a opacidade para telas pequenas
    const isSmallScreen = windowWidth < 1041;
    const opacityValue = isSmallScreen ? "0" : "1";

    // Aplicar transformações e opacidade para os itens
    items[prevIndex].style.transform = transformations.prev;
    items[nextIndex].style.transform = transformations.next;

    items[prevIndex].style.opacity = opacityValue;
    items[nextIndex].style.opacity = opacityValue;

    // Configurar o item atual
    items[currentIndex].style.transform = transformations.center;
    items[currentIndex].style.opacity = "1";
    items[currentIndex].classList.add("central");
  };

  // Gira automaticamente o carrossel
  const autoRotate = () => {
    currentIndex = (currentIndex + 1) % items.length; // Avança o índice
    updateCarrossel();
  };

  // Inicia o carrossel automático
  const startAutoRotate = () => {
    rotateInterval = setInterval(autoRotate, 3000);
  };

  // Para o carrossel automático
  const stopAutoRotate = () => {
    clearInterval(rotateInterval);
  };

  // Adicionar evento de redimensionamento
  window.addEventListener("resize", () => {
    updateCarrossel(); // Atualiza o carrossel ao redimensionar a tela
  });

  // Inicialização
  updateCarrossel();
  startAutoRotate();

  // Pausar rotação ao interagir com o carrossel
  items.forEach((item) => {
    item.addEventListener("mouseenter", stopAutoRotate);
    item.addEventListener("mouseleave", startAutoRotate);
  });
});

    </script>
    
</body>
</html>