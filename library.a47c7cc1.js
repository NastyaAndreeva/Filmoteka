const e=document.querySelector("#dark-theme"),t=document.querySelector(".body-theme");"dark-theme"===localStorage.getItem("color-theme")&&t.classList.add("dark-theme"),e.addEventListener("click",(function(){t.classList.toggle("dark-theme"),document.querySelector(".dark-theme")?localStorage.setItem("color-theme","dark-theme"):localStorage.removeItem("color-theme")}));
//# sourceMappingURL=library.a47c7cc1.js.map