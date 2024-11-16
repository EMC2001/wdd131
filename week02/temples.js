const menuButton = document.querySelector('.menu-button');
const menu = document.querySelector('.menu');

function toggleMenu() {
    menu.classList.toggle('hide');
}

menuButton.addEventListener('click', toggleMenu);


function handleResize() {
    if (window.innerWidth > 1000) {
        menu.classList.remove('hide');
    } else {
        menu.classList.add('hide');
    }
}

window.addEventListener('resize', handleResize);
handleResize();  

function viewerTemplate(imageSrc, altText) {
    return `
        <div class="viewer">
            <button class="close-viewer">X</button>
            <img src="${imageSrc}" alt="${altText}">
        </div>
    `;
}

function viewHandler(event) {
    const clickedImage = event.target;
    if (clickedImage.tagName === 'IMG') {
        const imgSrc = clickedImage.src.split('-')[0] + '-full.jpeg';  
        const altText = clickedImage.alt;

        
        document.body.insertAdjacentHTML('afterbegin', viewerTemplate(imgSrc, altText));

    
        document.querySelector('.close-viewer').addEventListener('click', closeViewer);
    }
}

function closeViewer() {
    document.querySelector('.viewer').remove();
}

document.querySelector('.gallery').addEventListener('click', viewHandler);