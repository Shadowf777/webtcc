const toggleLinks = document.querySelectorAll('.imgConta');
const popup = document.getElementById('popUp');

toggleLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        popup.classList.toggle('hidden');
    });
});

document.addEventListener('click', (event) => {
    if (![...toggleLinks].some(link => link.contains(event.target)) && !popup.contains(event.target)) {
        popup.classList.add('hidden');
    }
});
