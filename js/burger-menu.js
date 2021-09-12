var btnPopup = document.getElementById('btnOpenMenu');
var btnClose = document.getElementById('btnCloseMenu');
var overlay = document.getElementById('popup');

btnOpenMenu.addEventListener('click', openMenu);
btnCloseMenu.addEventListener('click', closeMenu);


function openMenu() {
    overlay.style.display = 'block';
}

function closeMenu() {
    overlay.style.display = 'none';
}