// document.addEventListener('DOMContentLoaded', function() {
//    document.getElementById('burger').addEventListener('click', function() {
//     document.querySelector('header').classList.toggle('open')
//    document.getElementById('cross').addEventListener('click', function() {
//     document.querySelector('header').classList.toggle('open')
//    })
//    })
// })

const burger = document.getElementById('burger');
const cross = document.getElementById('cross')
const menuContent = document.getElementById('open');

    if(burger){
        burger.addEventListener('click', function () {
            document.querySelector('header').classList.add('open')
        })
    }

    if(cross){
        cross.addEventListener('click', function () {
            document.querySelector('header').classList.remove('open')
    })
};

window.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        document.querySelector("header").classList.remove("open")
    }
});

document.getElementById("menu").addEventListener('click', event => {
    event._isClickWithInMenu = true;
});
document.getElementById("burger").addEventListener('click', event => {
    event._isClickWithInMenu = true;
});
document.body.addEventListener('click', event => {
    if (event._isClickWithInMenu) return;
    document.querySelector("header").classList.remove("open")
});