const navDropDown = document.querySelector(".navbar-dropdown");
const menuIcon = document.querySelector(".menu-icon");

menuIcon.addEventListener("click", (ev) => {
  navDropDown.classList.toggle("dropdown-closed");
  navDropDown.classList.toggle("dropdown-open");
});
