const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function(){
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function(){
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
});
searchInputEl.addEventListener('blur', function(){
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');  
});

new Swiper('.project .swiper-container', {
  // horizontal은 기본값.
  // direction : 'horizontal',
  slidesPerView: 3, // 한번에 보여줄 슬라이드 개수
  spaceBetween: 10, // 슬라이드 사이 여백
  centeredSlides : true, // 1번 슬라이드가 가운데 보이기
  loop : true,
  autoplay : {
    delay : 5000
  },
  pagination : {
    el: '.project .swiper-pagination',
    clickable : true
  },
  navigation : {
    prevEl : '.project .swiper-prev',
    nextEl : '.project .swiper-next'
  }
});