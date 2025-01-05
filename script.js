var nav = document.getElementById('nav');
var menuBtn = document.getElementById('menu-btn');

menuBtn.onclick = function() {
  nav.classList.toggle('nav-open');
}