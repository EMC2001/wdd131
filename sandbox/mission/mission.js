
const themeSelect = document.getElementById('theme-select');


const logo = document.getElementById('logo');


themeSelect.addEventListener('change', changeTheme);


function changeTheme() {
    
    const selectedTheme = themeSelect.value;

    if (selectedTheme === 'dark') {
        
        document.body.classList.add('dark');
        
        logo.src = 'white-logo.png';
    } else {
        document.body.classList.remove('dark');
        logo.src = 'blue-logo.png';
    }
}