const nav = document.querySelector("#navbar");
const NavTop = nav.offsetHeight;

function fixnavbar() {
  if (window.scrollY >= NavTop) {
    document.body.classList.add("fixed-nav");
    nav.classList.add("fixed-nav");
  } else {
    document.body.classList.remove("fixed-nav");
    nav.classList.remove("fixed-nav");
  }
}
window.addEventListener("scroll", fixnavbar);