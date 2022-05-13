const searchEl = document.querySelector(".search");
const searchInputEl = searchEl.querySelector("input");

searchEl.addEventListener("click", function () {
  searchInputEl.focus();
});
searchInputEl.addEventListener("focus", function () {
  searchEl.classList.add("focused");
  searchInputEl.setAttribute("placeholder", "통합검색");
});
searchInputEl.addEventListener("blur", function () {
  searchEl.classList.remove("focused");
  searchInputEl.setAttribute("placeholder", "");
});

const badgeEl = document.querySelector("header .badges");
const toTopEl = document.querySelector("#to-top");

window.addEventListener(
  "scroll",
  _.throttle(function () {
    if (window.scrollY > 500) {
      //배지 숨기기
      // badgeEl.style.display = "none";
      // gsap.to(요소, 지속시간, {옵션})
      gsap.to(badgeEl, 0.6, {
        opacity: 0,
        display: "none",
      });
      //버튼보이기!
      gsap.to(toTopEl, 0.2, {
        x: 0,
      });
    } else {
      //배지 보여주기
      // badgeEl.style.display = "block";
      gsap.to(badgeEl, 0.6, {
        opacity: 1,
        display: "block",
      });
      gsap.to(toTopEl, 0.2, {
        x: 100,
      });
    }
    //버튼숨기기!
  }, 300)
);
//_.throttle(함수, 시간 )
toTopEl.addEventListener("click", function () {
  gsap.to(window, 0.7, {
    scrollTo: 0, //스크롤의 위치를 화면의 위치를 0px위치로 옮겨주겠다.
  });
});
const fadeEls = document.querySelectorAll(".visual .fade-in");
fadeEls.forEach(function (fadeEl, idx) {
  gsap.to(fadeEl, 1, {
    delay: (idx + 1) * 0.7,
    opacity: 1,
  });
});
//new Swiper

new Swiper(".notice-line .swiper-container", {
  direction: "vertical",
  autoplay: true,
  loop: true,
});

new Swiper(".promotion .swiper-container", {
  slidesPerView: 3,
  spaceBetween: 10,
  centeredSlides: true,
  autoplay: {
    delay: 5000,
  },
  loop: true,
  pagination: {
    el: ".promotion .swiper-pagination", //페이지 번호 요소 선택자
    clickable: true, //사용자의 페이지 번호 요소 제어여부
  },
  navigation: {
    prevEl: ".promotion .swiper-prev",
    nextEl: ".promotion .swiper-next",
  },
});

new Swiper(".awards .swiper-container", {
  autoplay: true,
  loop: true,
  slidesPerView: 5,

  navigation: {
    prevEl: ".awards .swiper-prev",
    nextEl: ".awards .swiper-next",
  },
});

const promotionEl = document.querySelector(".promotion");
const promotionToggleBtn = document.querySelector(".toggle-promotion");
let isHidePromotion = false;
promotionToggleBtn.addEventListener("click", function () {
  isHidePromotion = !isHidePromotion;
  if (isHidePromotion) {
    //숨김처리
    promotionEl.classList.add("hide");
  } else {
    promotionEl.classList.remove("hide");
  }
});
// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2));
}

function floatingObject(selector, delay, size) {
  // gsap.to(요소,시간, 옵션);
  gsap.to(selector, random(1.5, 2.5), {
    y: size,
    repeat: -1, //무한반복
    yoyo: true,
    ease: Power1.easeInOut,
    delay: random(0, delay),
  });
}
floatingObject(".floating1", 1, 15);
floatingObject(".floating2", 0.5, 15);
floatingObject(".floating3", 1.5, 20);

const spyEls = document.querySelectorAll("section.scroll-spy");
spyEls.forEach(function (spyEl) {
  new ScrollMagic.Scene({
    triggerElement: spyEl, //보여짐 여부를 감시할 요소를
    triggerHook: 0.8, //뷰포트가 시작하는 부분을 0 마지막부분을 1로 두고 0.8부분에 왔을 때 trigger
  })
    .setClassToggle(spyEl, "show") //show라는 class
    .addTo(new ScrollMagic.Controller());
});

const thisYear = document.querySelector(".this-year");
thisYear.textContent = new Date().getFullYear();
