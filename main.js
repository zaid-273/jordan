let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains3 = document.getElementById('mountains3');
let mountains4 = document.getElementById('mountains4');
let river = document.getElementById('river');
let boat =document.getElementById('boat');
let nouvil =document.querySelector('.nouvil');
window.onscroll = function(){

    let value =scroll
    stars.style.left = value + "px";
    moon.style.top = value + "px";
}