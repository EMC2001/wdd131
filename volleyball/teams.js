const btn = document.querySelector('.menu-btn');
const nav = document.querySelector('nav');

btn.addEventListener('click', () => {
    nav.classList.toggle('show');  
    btn.classList.toggle('change');
});

const gallery = document.querySelector('.gallery');
const modal = document.querySelector('dialog');
const modalImage = modal.querySelector('img');
const closeButton = modal.querySelector('.close-viewer');

gallery.addEventListener('click', (e) => {
    if (e.target.tagName !== 'IMG') return;

    modalImage.src = e.target.src;
    modalImage.alt = e.target.alt;
    modal.showModal();
});

closeButton.addEventListener('click', () => {
    modal.close();
});

modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.close();
});
