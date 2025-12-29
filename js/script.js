
var swiper = new Swiper(".our-expertise__slider", {
  slidesPerView: 6,
  spaceBetween: 0,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});



const benefitsSliderEl = document.querySelector('.benefits__slider.mySwiper');
const tabButtons = benefitsSliderEl.querySelectorAll('.benefits__slider-tabs-button');

const benefitsSwiper = new Swiper(benefitsSliderEl, {
  slidesPerView: 1,
  speed: 600,
  loop: true,
  loopedSlides: tabButtons.length,
  navigation: {
    nextEl: benefitsSliderEl.querySelector('.swiper-button-next'),
    prevEl: benefitsSliderEl.querySelector('.swiper-button-prev'),
  },
  on: {
    init() {
      setActiveTabBenefits(this.realIndex);
    },
    slideChange() {
      setActiveTabBenefits(this.realIndex);
    },
  }
});

function setActiveTabBenefits(activeIndex) {
  tabButtons.forEach((btn, i) => {
    btn.classList.toggle('is-active', i === activeIndex);
    btn.setAttribute('aria-current', i === activeIndex ? 'true' : 'false');
  });
}

tabButtons.forEach((btn, index) => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    benefitsSwiper.slideTo(index);
  });
});