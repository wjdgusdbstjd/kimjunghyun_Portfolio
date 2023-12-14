//스크롤 위치 알기위한 코드 - 마지막에 지우기

// function updateScrollPosition() {
//   const scrollPercentage =
//     (window.scrollY /
//       (document.documentElement.scrollHeight - window.innerHeight)) *
//     100;
//   const scrollValueElement = document.getElementById("scroll-value");
//   scrollValueElement.textContent = scrollPercentage.toFixed(2) + "%";
// }

// // 스크롤 이벤트 리스너 등록
// window.addEventListener("scroll", updateScrollPosition);

// // 초기 페이지 로드 시 한 번 실행
// updateScrollPosition();

//----------------------------------------------------------------

document.addEventListener("DOMContentLoaded", function () {
  // 모든 a 태그에 대해서
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        // 부드러운 스크롤 적용
        targetElement.scrollIntoView({
          behavior: "smooth",
        });
      }
    });
  });
});

//----------------------------------------------------------------

// document.addEventListener("DOMContentLoaded", function () {
//   const fadeInElements = document.querySelectorAll(".main-fade-in");

//   // 각 요소에 대해 반복하여 등장 효과를 적용
//   fadeInElements.forEach((element) => {
//     // 화면 상단으로부터 요소의 거리를 계산하여 스크롤 위치와 비교하여 등장 효과 적용
//     function fadeInIfVisible() {
//       const elementTop = element.getBoundingClientRect().top;
//       const windowHeight = window.innerHeight;

//       if (elementTop < windowHeight) {
//         element.classList.add("show");
//         window.removeEventListener("scroll", fadeInIfVisible);
//       }
//     }

//     // 스크롤 이벤트에 등장 효과 함수 연결
//     window.addEventListener("scroll", fadeInIfVisible);

//     // 페이지 로드시에도 등장 효과를 체크하기 위해 한번 실행
//     fadeInIfVisible();
//   });
// });

//----------------------------------------------------------------


// const SEC = 0;

// function clip_text1(dom) {
//     const childs = dom.children;
//     for (let i = 0; i < childs.length; i++) {
//         childs[i].style.animationDelay = `${SEC * i}s`;
//         childs[i].classList.add("on");
//     }
// }

// const test = document.getElementById("main-fade-in");
// const spans = test.querySelectorAll('span'); // 모든 span 요소 선택

// setTimeout(function () {
//     clip_text1(test);
// }, 100); // 2초(2000밀리초) 후에 코드 실행

//----------------------------------------------------------------

$("#overview").ripples({
  resolution: 312,
  dropRadius: 40,
  perturbance: 0.04,
});

//----------------------------------------------------------------

$("#keyword").ripples({
  resolution: 312,
  dropRadius: 40,
  perturbance: 0.04,
});

//----------------------------------------------------------------


// 타겟 요소 선택
const target = document.querySelector(".top-text");
const line = document.querySelector("#overview .line");

// Intersection Observer 생성
const observer = new IntersectionObserver((entries) => {
  // entries는 모든 관찰 대상 요소의 교차 상태 정보를 담은 배열
  entries.forEach((entry) => {
    // isIntersecting 속성은 타겟 요소가 루트 요소와 교차하는지 여부를 나타냄
    if (entry.isIntersecting) {
      line.style.transition = "width 1.7s ease-in-out";
      line.style.width = "68vw";
    } else {
      line.style.width = "0";
    }
  });
});

// 타겟 요소를 관찰 대상으로 추가
observer.observe(target);


//----------------------------------------------------------------

const overviewSection = document.getElementById("overview");

overviewSection.addEventListener("click", function (event) {
  const strongTag = overviewSection.querySelector("strong");
  if (strongTag && event.target !== strongTag) {
    strongTag.style.transition = "opacity 0.5s ease"; // 0.5초 동안 부드럽게 사라지도록 설정
    strongTag.style.opacity = "0"; // opacity를 0으로 변경하여 부드럽게 사라지게 함

    // 애니메이션이 끝나면 요소를 완전히 제거하려면 아래 코드를 사용합니다.
    strongTag.addEventListener(
      "transitionend",
      function () {
        strongTag.style.display = "none"; // 애니메이션이 완료되면 요소를 화면에서 완전히 제거합니다.
      },
      { once: true }
    );
  }
});

//----------------------------------------------------------------

const elements = [
  { card: ".about-card-1", hide: ".hide-1", origin: ".origin-1" },
  { card: ".about-card-2", hide: ".hide-2", origin: ".origin-2" },
  { card: ".about-card-3", hide: ".hide-3", origin: ".origin-3" },
];

elements.forEach(({ card, hide, origin }) => {
  const aboutCard = document.querySelector(card);
  const hideP = document.querySelector(hide);
  const firstP = document.querySelector(origin);

  hideP.style.opacity = "0";
  hideP.style.pointerEvents = "none";

  // 기본 폰트 크기 설정
  const defaultFontSize = getComputedStyle(firstP).fontSize;

  aboutCard.addEventListener("mouseenter", () => {
    firstP.style.transform = "translateX(-32vw)";
    firstP.style.fontSize = "calc(100vw * 120 / 1920)";
    hideP.style.opacity = "1";
    hideP.style.pointerEvents = "auto";
  });

  aboutCard.addEventListener("mouseleave", () => {
    firstP.style.transform = "translateX(0)";
    firstP.style.fontSize = defaultFontSize;
    hideP.style.opacity = "0";
    hideP.style.pointerEvents = "none";
  });

  hideP.style.transition = "opacity 0.3s ease-in-out";
  firstP.style.transition =
    "transform 0.9s ease-in-out, font-size 0.3s ease-in-out";
});


//----------------------------------------------------------------

const year1 = document.querySelector(".overview-year .year-1");
new IntersectionObserver(
  ([entry], observer1) => {
    if (entry.isIntersecting) {
      setTimeout(
        () =>
          year1.animate(
            [
              { transform: "translateY(0)" },
              { transform: "translateY(-25vw)" },
            ],
            {
              duration: 1000,
              fill: "forwards",
              easing: "cubic-bezier(0.4, 0.0, 0.2, 0.9)",
            }
          ),
        100
      );
      observer1.unobserve(entry.target);
    }
  },
  { rootMargin: "0px", threshold: 0.5 }
).observe(document.querySelector(".overview-year"));

//----------------------------------------------------------------

const year2 = document.querySelector(".overview-year .year-2");
new IntersectionObserver(
  ([entry], observer2) => {
    if (entry.isIntersecting) {
      setTimeout(
        () =>
          year2.animate(
            [
              { transform: "translateY(0)" },
              { transform: "translateY(-20vw)" },
            ],
            {
              duration: 1000,
              fill: "forwards",
              easing: "cubic-bezier(0.4, 0.0, 0.2, 0.9)",
            }
          ),
        100
      );
      observer2.unobserve(entry.target);
    }
  },
  { rootMargin: "0px", threshold: 0.5 }
).observe(document.querySelector(".overview-year"));

//----------------------------------------------------------------

const year3 = document.querySelector(".overview-year .year-3");
new IntersectionObserver(
  ([entry], observer3) => {
    if (entry.isIntersecting) {
      setTimeout(
        () =>
          year3.animate(
            [
              { transform: "translateY(0)" },
              { transform: "translateY(-15vw)" },
            ],
            {
              duration: 1000,
              fill: "forwards",
              easing: "cubic-bezier(0.4, 0.0, 0.2, 0.9)",
            }
          ),
        100
      );
      observer3.unobserve(entry.target);
    }
  },
  { rootMargin: "0px", threshold: 0.5 }
).observe(document.querySelector(".overview-year"));

//----------------------------------------------------------------
const year4 = document.querySelector(".overview-year .year-4");
new IntersectionObserver(
  ([entry], observer4) => {
    if (entry.isIntersecting) {
      setTimeout(
        () =>
          year4.animate(
            [
              { transform: "translateY(0)" },
              { transform: "translateY(-10vw)" },
            ],
            {
              duration: 1000,
              fill: "forwards",
              easing: "cubic-bezier(0.4, 0.0, 0.2, 0.9)",
            }
          ),
        100
      );
      observer4.unobserve(entry.target);
    }
  },
  { rootMargin: "0px", threshold: 0.5 }
).observe(document.querySelector(".overview-year"));

//----------------------------------------------------------------

$(document).ready(function() {
  var current = 0;
  var images = $('.slideshow img');
  images.eq(current).addClass('fade');

  setInterval(function() {
    images.eq(current).removeClass('fade');
    current = (current + 1) % images.length;
    images.eq(current).addClass('fade');
  }, 3000); // 3초마다 이미지가 바뀝니다.
});

//----------------------------------------------------------------


window.onload = function() {
  var keywordSection = document.getElementById('keyword');

  // var keywordUl = document.querySelector('.keword-ul')
  var keyword1 = document.querySelector('.keyword-1');
  var keyword1_p = document.querySelector('.keyword-1-p');
  var keywordline1 = document.querySelector('.keyword-line-1')
  
  keyword1.onmouseover = function() {
    keywordSection.style.backgroundColor = '#8AA8F2';
    keyword1.style.borderColor = 'white';
    keyword1.style.color = 'white';
    keyword1.style.width = '22vw';
    keyword1.style.height = '22vw';
    keyword1_p.style.display = 'block';
    keyword1_p.style.transform = 'translateY(0vw)';
    keywordline1.style.height = '4vw';
    keywordline1.style.opacity = '1';
  }
  
  keyword1.onmouseout = function() {
    keywordSection.style.backgroundColor = 'initial';
    keyword1.style.borderColor = '#8AA8F2';
    keyword1.style.color = '#8AA8F2';
    keyword1.style.width = '13vw';
    keyword1.style.height = '13vw';
    keyword1_p.style.display = 'none';
    keyword1_p.style.transform = 'translateY(-9vw)';
    keywordline1.style.height = '0vw';
    keywordline1.style.opacity = '0';
  }

  var keyword2 = document.querySelector('.keyword-2');
  var keyword2_p = document.querySelector('.keyword-2-p');
  var keywordline2 = document.querySelector('.keyword-line-2')
  
  keyword2.onmouseover = function() {
    keywordSection.style.backgroundColor = '#8AA8F2';
    keyword2.style.borderColor = 'white';
    keyword2.style.color = 'white';
    keyword2.style.width = '22vw';
    keyword2.style.height = '22vw';
    keyword2_p.style.display = 'block';
    keyword2_p.style.transform = 'translateY(0vw)';
    keywordline2.style.height = '4vw';
    keywordline2.style.opacity = '1';
  }
  
  keyword2.onmouseout = function() {
    keywordSection.style.backgroundColor = 'initial';
    keyword2.style.borderColor = '#8AA8F2';
    keyword2.style.color = '#8AA8F2';
    keyword2.style.width = '13vw';
    keyword2.style.height = '13vw';
    keyword2_p.style.display = 'none';
    keyword2_p.style.transform = 'translateY(-9vw)';
    keywordline2.style.height = '0vw';
    keywordline2.style.opacity = '0';
  }
  
  var keyword3 = document.querySelector('.keyword-3');
  var keyword3_p = document.querySelector('.keyword-3-p');
  var keywordline3 = document.querySelector('.keyword-line-3')
  
  keyword3.onmouseover = function() {
    keywordSection.style.backgroundColor = '#8AA8F2';
    keyword3.style.borderColor = 'white';
    keyword3.style.color = 'white';
    keyword3.style.width = '22vw';
    keyword3.style.height = '22vw';
    keyword3_p.style.display = 'block';
    keyword3_p.style.transform = 'translateY(0vw)';
    keywordline3.style.height = '4vw';
    keywordline3.style.opacity = '1';
  }
  
  keyword3.onmouseout = function() {
    keywordSection.style.backgroundColor = 'initial';
    keyword3.style.borderColor = '#8AA8F2';
    keyword3.style.color = '#8AA8F2';
    keyword3.style.width = '13vw';
    keyword3.style.height = '13vw';
    keyword3_p.style.display = 'none';
    keyword3_p.style.transform = 'translateY(-9vw)';
    keywordline3.style.height = '0vw';
    keywordline3.style.opacity = '0';
  }
}

//----------------------------------------------------------------



//----------------------------------------------------------------
//----------------------------------------------------------------
//----------------------------------------------------------------
//----------------------------------------------------------------
//----------------------------------------------------------------
//----------------------------------------------------------------
//----------------------------------------------------------------
//----------------------------------------------------------------
//----------------------------------------------------------------
//----------------------------------------------------------------
//----------------------------------------------------------------
//----------------------------------------------------------------
//----------------------------------------------------------------
//----------------------------------------------------------------
//----------------------------------------------------------------
//----------------------------------------------------------------
//----------------------------------------------------------------
//----------------------------------------------------------------
//----------------------------------------------------------------
//----------------------------------------------------------------
//----------------------------------------------------------------
//----------------------------------------------------------------
//----------------------------------------------------------------
//----------------------------------------------------------------
//----------------------------------------------------------------
//----------------------------------------------------------------
//----------------------------------------------------------------
//----------------------------------------------------------------
//----------------------------------------------------------------
//----------------------------------------------------------------
//----------------------------------------------------------------
//----------------------------------------------------------------
//----------------------------------------------------------------
//----------------------------------------------------------------
//----------------------------------------------------------------
//----------------------------------------------------------------
//----------------------------------------------------------------
//----------------------------------------------------------------
//----------------------------------------------------------------
//----------------------------------------------------------------