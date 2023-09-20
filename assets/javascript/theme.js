
const themeToggle = document.getElementById('themeBtn');

function toggleDarkTheme(){
    document.body.classList.toggle('dark-theme');
}

themeToggle.addEventListener('click', toggleDarkTheme);


