let hamburger = document.querySelector('.hamburger');
let navigations = document.querySelector('.navigations');
let jobbra = document.querySelector('.keretrendszerek');
let nemmegy =document.querySelector('.nemmegy');
let nemmegy1 =document.querySelector('.nemmegy1');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navigations.classList.toggle('active');
})

nemmegy.addEventListener('click', () => {
    alert("The project is ongoing.")
});

nemmegy1.addEventListener('click', () => {
    alert("The project is ongoing.")
});

