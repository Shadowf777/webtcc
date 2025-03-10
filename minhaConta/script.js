const toggleLink1 = document.getElementById('dadosPessoais');
const toggleLink2 = document.getElementById('enderecoPessoal');

toggleLink1.addEventListener('click', (event) => {
    event.preventDefault();
    window.location.href = 'dados.html';
});

toggleLink2.addEventListener('click', (event) => {
    event.preventDefault();
    window.location.href = 'endereco.html';
});

fetch('../geral/menu.html')
      .then(response => response.text()) // Convert the response to text
      .then(data => {
        document.getElementById('menu').innerHTML = data; // Insert the HTML
      })
      .catch(error => console.error('Error loading the header:', error));