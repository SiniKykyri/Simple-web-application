

const themeToggleBtn = document.getElementById('theme-toggle');

const themeStylesheet = document.getElementById('theme');

let isDarkTheme = false;

function toggleTheme(){
    if(isDarkTheme){
        themeStylesheet.href = 'light-theme.css';
    }
    else{
        themeStylesheet.href = 'dark-theme.css';
    }
    isDarkTheme = !isDarkTheme;
}

themeToggleBtn.addEventListener('click', toggleTheme);

const storedTheme = localStorage.getItem('theme');
if (storedTheme === 'dark') {
    toggleTheme(); // Apply the dark theme
}

themeToggleBtn.addEventListener('click', () => {
    toggleTheme();
    // Store the current theme preference
    localStorage.setItem('theme', isDarkTheme ? 'dark' : 'light');
    console.log("button clicked");

});