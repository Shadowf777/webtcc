// Seleciona os elementos
const btnLapis = document.querySelector('.lapis');  // O botão lápis
const popupEdicao = document.getElementById('popupEdicao');  // O modal de edição
const fecharPopup = document.getElementById('fecharPopup');  // O botão de fechar
const formEdicao = document.getElementById('formEdicao');

// Função para abrir o popup
btnLapis.addEventListener('click', function () {
    popupEdicao.classList.remove('hidden');  // Exibe o popup
});

// Função para fechar o popup
fecharPopup.addEventListener('click', function () {
    popupEdicao.classList.add('hidden');  // Oculta o popup
});

// Prevenir o envio do formulário (para fins de exemplo)
formEdicao.addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Dados atualizados!');
    popupEdicao.classList.add('hidden');  // Fecha o popup após a atualização
});
