// const COLOR_1 = '#665252';
// const COLOR_2 = '#997A5C';
// const COLOR_3 = '#7A9999';

function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function isScrolledIntoView(el) {
  var elemTop = el.getBoundingClientRect().top;
  var elemBottom = el.getBoundingClientRect().bottom;

  return elemTop >= 0 && elemBottom <= window.innerHeight;
}

// document.addEventListener("DOMContentLoaded", function () {
//   var element = document.querySelector(".video-containers");

//   window.addEventListener("scroll", function () {
//       var scrollPosition = window.scrollY;
//       var elementPosition = element.offsetTop;

//       if (scrollPosition > elementPosition - window.innerHeight + 100) {
//         element.classList.add("show");
//       }
//   });

// });

// var videos = document.querySelectorAll('.video');
// var controlls = [];
// for (let i = 0; i < videos.length; i++) {
//   controlls.push([videos[i], false]);
//   window.addEventListener('scroll', function(e) {
//     if (isScrolledIntoView(controlls[i][0]) && !controlls[i][1]) {
//       controlls[i][1] = true;
//       controlls[i][0].play();
//       // console.log(`INTO VIEW ${i}`);
//     }
//   });
// }