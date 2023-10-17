
const themeToggle = document.getElementById('themeBtn');

function toggleDarkTheme() {
    document.body.classList.toggle('dark-theme');


const icons = document.querySelectorAll('#themeBtn .material-icons');

icons.forEach(icon => {
    if(document.body.classList.contains('dark-theme')) {
        icon.textContent = 'light_mode';
        document.cookie = "theme=dark";  
    }
    else {
        icon.textContent = 'dark_mode';
        document.cookie = "theme=light";
    }
});
}

function checkThemePreference(){
    const themeCookie = document.cookie.split(';').find(cookie => cookie.startsWith('theme='));
    if(themeCookie) {
        const themeValue = themeCookie.split('=')[1];
        if(themeValue === 'dark') {
            document.body.classList.add('dark-theme');
        }
    }
}
document.addEventListener('DOMContentLoaded', checkThemePreference);

themeToggle.addEventListener('click', toggleDarkTheme);


