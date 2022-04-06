
  


  //show filter 
  const openFilter = document.querySelector(".open__filt")
  const filterBox = document.querySelector(".left_acc")
  const closeFilter = document.querySelector(".__cls_filt")

  openFilter.addEventListener("click", () => {
    filterBox.classList.add("show__filter")
  })
  
  closeFilter.onclick = function(){
    filterBox.classList.remove("show__filter")
  }

// show more details 
let acc = document.getElementsByClassName("accord_more_info");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "500px";
    } 
  });
}


var swiper = new Swiper(".mySwiper", {
  loop: false,
  spaceBetween: 10,
  slidesPerView: 4,
  autoplay: true,
});
var swiper2 = new Swiper(".mySwiper2", {
  thumbs: {
    swiper: swiper,
  },
  loop: false,
  spaceBetween: 10,
  autoplay: true,
});

