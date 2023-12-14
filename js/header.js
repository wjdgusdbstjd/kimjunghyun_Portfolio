// $(function () {
//   "use strict";

//   var lastScrollTop = 0;
//   var header = $("header");
//   var headerHeight = header.outerHeight();

//   $(window).on("scroll", function () {
//     var st = $(this).scrollTop();

//     if (st > lastScrollTop) {
//       // 스크롤을 아래로 내릴 때
//       header.css("top", -headerHeight + "px");
//     } else {
//       // 스크롤을 위로 올릴 때
//       header.css("top", "0");
//     }
//     lastScrollTop = st;
//   });
// });

// var controller = new ScrollMagic.Controller();

// var ani04_1 = gsap.timeline();
// ani04_1.from("#wrap header", 0.5, {
//   opacity: 0, // 시작값 0
//   delay: 0,
//   y: "-80vh", // 오른쪽으로 이동 (값은 원하는 만큼 조절)
// });

// var scene1 = new ScrollMagic.Scene({
//   triggerElement: "#wrap",
//   triggerHook: 0,
// })
//   .setTween(ani04_1)
//   .addTo(controller);



  window.addEventListener('wheel',(event) => {
    let wheel = event.wheelDeltaY;
    const list = document.querySelector('.menu-list');
    const menuicon = document.querySelector('.menu-icon');

    if(wheel > 0) {
        list.classList.remove('hide');
        menuicon.classList.remove('bg');
    }
    else {
        list.classList.add('hide');
        menuicon.classList.add('bg');
    }
});

// window.addEventListener('scroll', function() {
//     var scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
//     var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
//     var scrollPercentage = (scrollPosition / scrollHeight) * 100;
    
//     document.getElementById('scroll-line').style.width = scrollPercentage + '%';
//   });

window.addEventListener('scroll', function() {
    var scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    var scrollPercentage = (scrollPosition / scrollHeight) * (100 - 9.7); // 변경된 부분

    document.getElementById('scroll-indicator').style.left = scrollPercentage + 'vw';
});

