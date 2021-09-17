var btnClose = document.getElementById('btnCloseMenu');
var btnPopup = document.getElementById('btnOpenMenu');
var overlay = document.getElementById('popup');

btnCloseMenu.addEventListener('click', closeMenu);
btnOpenMenu.addEventListener('click', openMenu);


function closeMenu() {
    overlay.style.display = 'none';
    overlay.style.opacity = 0;
    overlay.style.visibility = "hidden";
}

function openMenu() {
    overlay.style.display = 'flex';
    overlay.style.opacity = 1;
    overlay.style.visibility = "visible";
}