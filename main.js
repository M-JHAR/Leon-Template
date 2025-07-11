const headerIcon = document.getElementById("icon");
const linksDropdown = document.getElementById("links-dropdown");

headerIcon.addEventListener("click", () => {
  linksDropdown.classList.toggle("nav-toggle");
});
