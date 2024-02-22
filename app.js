// for mobile navbar
window.onload = function(){
    window.addEventListener('scroll', function (e){
      if (window.pageYOffset > 100){
        document.querySelector("header").classList.add('is-scrolling');
      } else {
        document.querySelector("header").classList.remove('is-scrolling');
      }
    });
  const menu_btn = document.querySelector('.hamburger');
  
  const mobile_menu = document.querySelector('.mobile-nav');
  menu_btn.addEventListener('click', function () {
  menu_btn.classList.toggle('is-active');
  mobile_menu.classList.toggle('is-active');
  });
} 
// for fixed desktop nav
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("nav").style.padding = "1rem 1rem";
    document.getElementById("nav").style.boxShadow = "0rem  1rem 4rem   #080320";    document.getElementById("nav").style.transition = "0.4s";
  } else {
    // document.getElementById("navbar").style.padding = "10px 20px";
    // document.getElementById("navbar").style.marginBottomBottom = " 30px";
    document.getElementById("nav").style.boxShadow = "0rem  0rem 0rem  ";
  }
}
// active links 
// the active border 
var header = document.getElementById("home");
var btns = header.getElementsByClassName("hom");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  if (current.length > 0) { 
    current[0].className = current[0].className.replace(" active", "");
  }
  this.className += " active";
  });
}

ScrollReveal({ distance: '60px' });
ScrollReveal().reveal('.logo', { origin: 'top' });
ScrollReveal().reveal('.team', { origin: 'bottom' }, { delay: 1000} );
ScrollReveal().reveal('.ads-text', { origin: 'right' }, { delay: 500});

ScrollReveal().reveal('.game-text', { origin: 'top' });
ScrollReveal().reveal('.section-mobile', { origin: 'left' });
ScrollReveal().reveal('.main-her0', { origin: 'left' }, { delay: 1000} );
ScrollReveal().reveal('.ads-text', { origin: 'right' }, { delay: 500});
// for back to top 


// // When the user scrolls down 20px from the top of the document, show the button
// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//     myBtn.style.display = "block";
//   } else{
//     myBtn.style.display = "none";
//   }
// }

// // When the user clicks on the button, scroll to the top of the document
// function topFunction() {
//   document.body.scrollTop = 0;
//   document.documentElement.scrollTop = 0;
// }