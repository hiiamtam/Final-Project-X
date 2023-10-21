let search = document.querySelector('.search-box');

document.querySelector('#search-icon').onclick = () => {
    search.classList.toggle('active');
    navbar.classList.remove('active');
}


let navbar = document.querySelector('navbar');

window.onscroll = () => {
    navbar.classList.remove('active');
    search.classList.remove('active');
}

