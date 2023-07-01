const showMenu = document.getElementById("bars-icon");
const menu = document.getElementById("menu");
const closeMenu = document.getElementById("close-icon");
const menuLinks = document.querySelectorAll("#menu a");
const body = document.getElementById('body');

showMenu.addEventListener("click", () => {
  menu.classList.toggle("show-menu");
});

closeMenu.addEventListener("click", () => {
  menu.classList.toggle("show-menu");
});

menuLinks.forEach(function (link) {
  link.addEventListener("click", () => {
    menu.classList.remove("show-menu");
  });
});

document.addEventListener("click", function (event) {
  const target = event.target;
  if (!menu.contains(target) && target !== showMenu) {
    menu.classList.remove("show-menu");
  }
});
