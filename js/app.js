let footerBtn = document.querySelectorAll('.footer__head-btn');
let footerCentr = document.querySelectorAll('.footer__center');
let backWhite = document.querySelector('.back-white');

function footCenter(){
    backWhite.classList.toggle('active');
    for(i=0;i<=footerCentr.length;i++){
        footerCentr[i].classList.toggle('active')
        console.log('salom');
    }
}