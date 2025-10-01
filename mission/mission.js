
let selectElem = document.querySelector('select');
let logo = document.querySelector('img');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current == 'dark') {
        document.body.style.backgroundColor = '#333';
        document.getElementById('content').style.color = 'white';
        document.getElementById('logo').src = 'byui-logo-white.png'
    } 
    else {
        document.body.style.backgroundColor = 'white';
        document.getElementById('content').style.color = 'black';
        document.getElementById('logo').src = 'byui-logo-blue.webp'
    }
}           
                    