// ketika hamburger menu di klik
const hamburger = document.getElementById("hamburger");
const navbarNav = document.getElementById("navbar-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("hamburger-active");
  navbarNav.classList.toggle("hidden");
});

// Ketika window di scroll
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;
  const toTop = document.getElementById("backtotop");

  if (window.pageYOffset > fixedNav) {
    headerp.classList.add("navbar-fixed");
    toTop.classList.remove("hidden");
    toTop.classList.add("flex");
  } else {
    toTop.classList.remove("flex");
    toTop.classList.add("hidden");
    header.classList.remove("navbar-fixed");
  }
});

// keitka yang bukan hamburger atau menu di klik
window.addEventListener("click", (e) => {
  if (e.target != navbarNav && e.target != hamburger) {
    hamburger.classList.remove("hamburger-active");
    navbarNav.classList.add("hidden");
  }
});

// dark mode
const darkToggle = document.getElementById("dark-toggle");
const html = document.querySelector("html");

darkToggle.addEventListener("click", () => {
  if (darkToggle.checked) {
    html.classList.add("dark");
    localStorage.theme = "dark";
  } else {
    html.classList.remove("dark");
    localStorage.theme = "light";
  }
});

// pindahkan posisi toggle sesuai mode
if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  darkToggle.checked = true;
} else {
  darkToggle.checked = false;
}

// Typing Text
let typing = new Typed(".typing", {
  strings: ["Web Developer", "Fullstack Developer"],
  typedSpeed: 150,
  backSpeed: 50,
  loop: true,
});

// Form Validation

const form = document.querySelector("form");
const send = document.getElementById("btn");

function validateForm() {
  const nameValue = document.getElementById("name").value;
  const emailValue = document.querySelector("#email").value;
  const pesanValue = document.querySelector("#textarea").value;
  const errorMes = document.getElementById("messagePesan");
  if (nameValue === "" || emailValue === "" || pesanValue === "") {
    errorMes.innerHTML = "PLEASE FILL ALL INPUT";
  } else {
    console.log("berhasil");
    errorMes.innerHTML = "";
  }
}
