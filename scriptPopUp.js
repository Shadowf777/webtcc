const toggleLinks = document.querySelectorAll('.imgConta');
const popup = document.getElementById('popUp');

toggleLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        popup.classList.toggle('hidden');
    });
});

function closePopUp(){
    if (window.innerWidth < 451) {
        popup.classList.add('hidden');
    }
}

document.addEventListener('click', (event) => {
    if (![...toggleLinks].some(link => link.contains(event.target)) && !popup.contains(event.target)) {
        popup.classList.add('hidden');
    }
});

window.addEventListener('resize', closePopUp);