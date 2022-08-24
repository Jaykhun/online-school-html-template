let tabs = document.querySelector(".tab");
let tabHeader = tabs.querySelector(".tab__header");
let tabBody = tabs.querySelector(".tab-body");
let tabHeaderNodes = tabs.querySelectorAll(".tab__link");
let tabBodyNodes = tabs.querySelectorAll(".tab-body > div");

for (let i = 0; i < tabHeaderNodes.length; i++) {
    tabHeaderNodes[i].addEventListener("click", function () {
        tabHeader.querySelector(".active").classList.remove("active");
        tabHeaderNodes[i].classList.add("active");
        tabBody.querySelector(".active").classList.remove("active");
        tabBodyNodes[i].classList.add("active");
    });
}
