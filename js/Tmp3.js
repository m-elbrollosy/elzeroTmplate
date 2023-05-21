const brgIcon = document.querySelector(".header .fa-bars");
const otherLinks = document.getElementById("other-links");
const myNav = document.querySelector(".header .container .main-nav");
const megaMenu = document.querySelector(".header .mega-menu");
const scrollTopIcon = document.querySelector(".scroll i");
const modeIcon = document.querySelector("#ch-mode");

brgIcon.addEventListener("click", (eve)=>{
    // console.log(eve.currentTarget);
    myNav.classList.toggle("active");
});
//
otherLinks.addEventListener("click", (ev)=>{
ev.preventDefault();
megaMenu.classList.toggle("activate");
});
//3

// console.log(megaMenu);
const footerIconDiv = document.querySelector("footer .box .social");
const footerIcons = document.querySelectorAll("footer .box .social i");
const myIcon = document.querySelector("footer .copyright img");
window.addEventListener("scroll", function () {
    footerIcons.forEach((singleIcon)=>{
        if(window.innerHeight > footerIconDiv.getBoundingClientRect().bottom) {
            singleIcon.classList.add("animate__slow", "animate__flip");
        }else {
            singleIcon.classList.remove("animate__slow", "animate__flip");
        }
    });
    //2
    if(window.innerHeight > myIcon.getBoundingClientRect().bottom) {
        myIcon.classList.add("animate__rubberBand");
    } else {
        myIcon.classList.remove("animate__rubberBand");
    }
});
//


//
window.onclick = function(cli){
    //for mobile (burger icon and otherlinks)
    if (cli.target != brgIcon && cli.target != otherLinks){
        //if opend (close it)
        if (myNav.classList.contains("active")){
            myNav.classList.remove("active");
        }
        
    }
    //other links without burger icon
    if (cli.target != otherLinks){
        // if opend (close it)
        if (megaMenu.classList.contains("activate")){
            megaMenu.classList.remove("activate");
        }
        
    }

}
//scroll top icon toggle
window.addEventListener("scroll", ()=>{
    if(this.scrollY > 1000) {
        scrollTopIcon.classList.add("activeIcon");
    } else {
        scrollTopIcon.classList.remove("activeIcon");
    }
    // console.log(this.scrollY);
});
//
//scroll top icon click
scrollTopIcon.onclick = ()=>{
window.scroll(0, 0);
};
//
//
modeIcon.onclick = () => {
document.body.classList.toggle("dark-mode");
if(document.body.classList.contains("dark-mode")){
    modeIcon.classList.add("fa-sun");
    modeIcon.classList.remove("fa-moon");
} else {
        modeIcon.classList.remove("fa-sun");
        modeIcon.classList.add("fa-moon");
    }
};
