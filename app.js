const nav = document.querySelector("#nav");
const bars = document.querySelector("#bars");
const xMark = document.querySelector("#x-mark");
const elDel = document.getElementById("del");
const search = document.getElementById("search");
const header = document.querySelector("header")
function toggle() {
  if (nav.classList.contains("hidden")) {
    nav.classList.remove("hidden");
    nav.classList.add("flex");
    bars.classList.add("hidden");
    xMark.classList.remove("hidden");
    console.log(nav.className);
  } else {
    nav.classList.add("hidden");
    nav.classList.remove("flex");
    bars.classList.remove("hidden");
    xMark.classList.add("hidden");
    console.log(nav.className);
  }
}

function del() {
  elDel.style.display = "none";
}


window.addEventListener("scroll", () => {
    if (window.scrollY > 10) {
      header.classList.add("md:fixed");
      header.classList.add("shadow-md")
      header.classList.add("shadow-black")

    } else {
        header.classList.remove("shadow-md")
        header.classList.remove("shadow-black")
      header.classList.remove("md:fixed");
    }
  });