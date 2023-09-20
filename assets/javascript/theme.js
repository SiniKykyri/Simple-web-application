
const themeToggle = document.getElementById('themeBtn');

function toggleDarkTheme() {
    document.body.classList.toggle('dark-theme');


const icons = document.querySelectorAll('#themeBtn .material-icons');

icons.forEach(icon => {
    if(document.body.classList.contains('dark-theme')) {
        icon.textContent = 'light_mode';
    }
    else {
        icon.textContent = 'dark_mode';
    }
});
}


themeToggle.addEventListener('click', toggleDarkTheme);


