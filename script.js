const galeri = document.querySelector('.galeri');
const big = document.querySelector('.big');

let opacity = 0;
function fade(){
    if (opacity >= 1) {
        return;
    }
    opacity += 0.05;
    big.firstElementChild.style.opacity = opacity;
    requestAnimationFrame(fade);
}
galeri.addEventListener('click', function(e){
    if(e.target.nodeName == 'IMG'){
        const src = e.target.getAttribute('src');
        big.firstElementChild.setAttribute('src', src);
        big.classList.replace('big', 'big-show');
        requestAnimationFrame(fade);
    };
});
big.addEventListener('click', function(e){
    if(e.target.className == 'close'){
        big.classList.replace('big-show', 'big');
        big.firstElementChild.style.opacity = 0;
        opacity = 0;
    }
});