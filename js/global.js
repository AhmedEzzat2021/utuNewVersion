//===== change theme
const themeChange = document.querySelector('.theme-toggler');
const logo = document.querySelector(".navbar-brand .myLogo");
const nightMood = document.querySelector(".theme-toggler span");
themeChange.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme-variables');
    themeChange.querySelector('span:nth-child(1)').classList.toggle('active');
    themeChange.querySelector('span:nth-child(2)').classList.toggle('active');

    // style logo in dark mood
        if(document.body.hasAttribute("class")){
            logo.style.backgroundColor = "rgba(255,255,255,0.4)";
            logo.style.padding = "2px";
            logo.style.borderRadius = "5px";
        }
})

// =========  Side Menu  ==========
const burgIcon = document.querySelector(".buger_ion");
var sideBar = document.getElementById("sidebar__utu");
const closeBar = document.querySelector(".close_bar");
const listBarr = document.querySelector(".list__bar");

burgIcon.onclick = function(){
    sideBar.classList.add("show_bar")
}
closeBar.onclick = function() {
    sideBar.classList.remove("show_bar")
}

window.addEventListener('mouseup', function(event){
	if (event.target != listBarr && event.target.parentNode != listBarr /*event.target != {add here element}*/ ){
        sideBar.classList.remove("show_bar")
    } 
});

// =========  show search header   ==========
const srchHead = document.querySelector(".hide__form");
const ionSrch = document.querySelector(".src__utu");
const ele = document.querySelector(".src__utu:before")
console.log(ele)
ionSrch.addEventListener('click', () => {
    srchHead.classList.add("show__src-head")
    
})
window.addEventListener('mouseup', function(event){
	if (event.target != srchHead && event.target.parentNode != srchHead ){
        srchHead.classList.remove("show__src-head")
    } 
});



// =========  Button UP  ==========
const scrollUp = document.querySelector(".up__utu");
window.onscroll = function () {
    this.scrollY >= 100 ? scrollUp.classList.add("show__up__utu") : scrollUp.classList.remove("show__up__utu");
};

scrollUp.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
};
