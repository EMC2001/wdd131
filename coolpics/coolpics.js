
const gallery = document.querySelector('.pics');
const modal = document.querySelector('dialog');
const modalImage = modal.querySelector('img');
const closeButton = modal.querySelector('.close-viewer');
const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('nav');

gallery.addEventListener('click', openModal);

function openModal(e) {
    console.log(e.target);
    const img = e.target;

    const src = img.getAttribute('src');
    const alt = img.getAttribute('alt');
    const full = src.replace('sm', 'full');

    modalImage.src = full;
    modalImage.alt = alt;

    modal.showModal();
}

closeButton.addEventListener('click', () => {
    modal.close();
});


modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.close();
    }
});

menuButton.addEventListener('click', () => {
    nav.classList.toggle('hide');
});


