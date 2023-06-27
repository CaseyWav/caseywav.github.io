const mainMenu = document.querySelector('.mainMenu');
const menuClose = document.querySelector('.menuClose');
const menuOpen = document.querySelector('.menuOpen');

window.onload = function(){
  loadTopNav()
}


menuOpen.addEventListener('click',show);
menuClose.addEventListener('click',close);

function show(){
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}
function close(){
    mainMenu.style.top = '-160%';
}

function loadTopNav(){

}
