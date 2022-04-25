//  ===========================================
// Creating a responsive navbar component
// =======================================
const mobNav = document.querySelector('.mobile-navbar-btn');
const headerEle = document.querySelector('.header');

mobNav.addEventListener('click', ()=>{
    headerEle.classList.toggle('active');
})

//  ===========================================
// Creating a sticky responsive navbar component
// =======================================

const heroSec = document.querySelector('.section-hero');

const obs = new IntersectionObserver((entries)=>{
    const ent = entries[0];
    !ent.isIntersecting ? document.body.classList.add('sticky') : document.body.classList.remove('sticky');
    
},{root:null, threshold:0});

obs.observe(heroSec);

//  ===========================================
// Creating a Portfolio tabbed component
// =======================================

let p_btns = document.querySelector(".p-btns");
let p_btn = document.querySelectorAll(".p-btn");
let img_overlay = document.querySelectorAll(".img-overlay");

p_btns.addEventListener("click", (e) => {
  let clicked_button = e.target;

  if (!clicked_button.classList.contains('p-btn')) return ;

  p_btn.forEach((ele) => {
    ele.classList.remove("p-btn-active");
  });

  clicked_button.classList.add("p-btn-active");

  let btn_num = clicked_button.dataset.btnNumber;

  const img_active = document.querySelectorAll(`.p-btn--${btn_num}`);

  img_overlay.forEach((ele) => {
    ele.classList.add("p-image-not-active");
  });

  img_active.forEach((ele) => {
    ele.classList.remove("p-image-not-active");
  });
});

//  ===========================================
// Scroll to top button
// =======================================

const header = document.querySelector(".section-hero");
const footerSelect = document.querySelector(".section-footer");
const scrollEle = document.createElement("div");
scrollEle.classList.add("scrollTop-style");

scrollEle.innerHTML = `<ion-icon name="arrow-up-outline" class="scroll-top"></ion-icon>`;

footerSelect.after(scrollEle);

const scrollTop = () => {
  header.scrollIntoView({ behavior: "smooth" });
};
scrollEle.addEventListener("click", scrollTop);



//  ===========================================
// Scrolling smooth effect
// =======================================

let portfolioSec = document.querySelector(".section-portfolio");
let contactSec = document.querySelector(".section-contact");

document.querySelector(".portfolio-link").addEventListener("click", () => {
  portfolioSec.scrollIntoView({ behavior: "smooth" });
});

document.querySelector(".hireme-btn").addEventListener("click", (e) => {
  e.preventDefault();
  contactSec.scrollIntoView({ behavior: "smooth" });
});

//  ===========================================
// Animated Number
// =======================================




const scrollClass = document.querySelector(".section-work-data");
let scrollObs = new IntersectionObserver((entries, observer)=>{
// const ent = entries[0];
const [ent] = entries;

if(!ent.isIntersecting) return
const fullEle = document.querySelectorAll(".counter-number");
const speed = 20;
fullEle.forEach((ele) => {
  const updateEle = () => {
    const targetEle = parseInt(ele.dataset.number);
    const initialEle = parseInt(ele.innerText);

    const increamentEle = Math.trunc(targetEle / speed);
    if (initialEle < targetEle) {
      ele.innerText = `${initialEle + increamentEle}+`;
      setTimeout(updateEle, 100);
    }
  };

  updateEle();
});
observer.unobserve(scrollClass);
},{root: null, threshold: 0})

scrollObs.observe(scrollClass);

//  ===========================================
// Swiper JS Code
// =======================================

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
  spaceBetween: 20,
  autoplay: {
    delay: 2500,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

//  ===========================================
// lazy loading image
// =======================================

const imgRef = document.querySelector('img[data-src]');
const lazyImg = (entries) =>{
 let ent = entries[0];
if(!ent.isIntersecting) return;

ent.target.src = imgRef.dataset.src;

}
let imgObserver = new IntersectionObserver(lazyImg, {});

imgObserver.observe(imgRef);



//  ===========================================
// media query for responsive the swiper
// =======================================
// const myJsMedia = (widthSize) =>{
// if(widthSize.matches){
//    new Swiper(".mySwiper", {
//     slidesPerView: 1,
//     spaceBetween: 20,
//   });
  
// }else{
//    new Swiper(".mySwiper", {
//     slidesPerView: 2,
//     spaceBetween: 20,
//   });
  
// }
// }
// const widthSize = window.matchMedia("(max-width: 500px)");
// // call listener function at run time 
// myJsMedia(widthSize);
// // Attach listener function pm state changes 
// widthSize.addEventListener('change', myJsMedia);