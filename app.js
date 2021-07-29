
let lightPara =  document.querySelector(".light")
const body = document.querySelector("body");

const toggle = document.querySelector("i");
let singleBox = document.querySelectorAll(".single-box");
let bottomSingle = document.querySelectorAll(".bottom-single");
let leftBox = document.querySelector(".left-box");
let rightBox = document.querySelector(".header");
let title = document.querySelector(".title");

toggle.onclick = function () {
    if (body.hasAttribute("class")=== true ) {
     
        toggle.setAttribute("class", "far fa-toggle-off fa-2x");
        body.removeAttribute("class");
        lightPara.innerText = "Light Mode";
        lightPara.style.color = "#000";
        toggle.style.color = "gray";
        leftBox.style.color = "#000";
        title.style.color = "#000";
        title.style.opacity = 1;
         singleBox.forEach(function (e) {
            e.style.backgroundColor = "rgb(233, 255, 224)";
        });
        bottomSingle.forEach(function (e) {
         e.style.backgroundColor = "rgb(233, 255, 224)";
    })
        
    }
    
    else if ( body.hasAttribute("class") === false){
        body.setAttribute("class", "dark-bg");
        toggle.setAttribute("class", "far fa-toggle-on fa-2x");
        lightPara.innerText = "Dark Mode";
        lightPara.style.color = "#fff";
        toggle.style.color = "#00FF80";
        leftBox.style.color = "#fff";
        rightBox.style.color = "gray";
        title.style.color = "#fff";
         title.style.opacity = .5;
        singleBox.forEach(function (e) {
            e.style.backgroundColor = "#35464F";

        });
        bottomSingle.forEach(function (e) {
         e.style.backgroundColor = "#35464F";
    })
    }

    
}