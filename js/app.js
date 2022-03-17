let footerBtn = document.querySelectorAll(".footer__head-btn");
let footerCentr = document.querySelectorAll(".footer__center");
let backWhite = document.querySelector(".back-white");
let modalWindow = document.querySelector(".modal__cabinet");
let searchInput = document.querySelector(".menu-input");

function footCenter() {
  backWhite.classList.toggle("active");
  for (i = 0; i <= footerCentr.length; i++) {
    footerCentr[i].classList.toggle("active");
  }
}
function modalClose() {
  modalWindow.classList.remove("active");
}
function modalActive() {
  modalWindow.classList.add("active");
}
function searchBtnOpen() {
  searchInput.classList.add("active");
}

/* header responsiv*/
function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
/* ----------------- */
