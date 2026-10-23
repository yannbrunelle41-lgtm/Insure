const menu = document.querySelector("#menu");
const burger = document.querySelector(".burger-menu");

burger.addEventListener("click", () => {
  const visibility = menu.getAttribute("data-visible");

  if (visibility === "false") {
    menu.setAttribute("data-visible", "true");
    burger.setAttribute("aria-expanded", "true");
  } else {
    menu.setAttribute("data-visible", "false");
    burger.setAttribute("aria-expanded", "false");
  }
});