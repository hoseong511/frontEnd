const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');
const navigation = document.querySelector('.main-menu');
console.log(navigation);
const navItems = Array.from(navigation.children);
const contentsElem = document.querySelector('.contents');
console.log(contentsElem);
const contentItems = Array.from(contentsElem.children);

const throttle = (func, delay) => {
  let throttled = false;
  // do something
  return (...args) => {
    if (!throttled) {
      throttled = true;
      setTimeout(() => {
        func(...args);
        throttled = false;
      }, delay);
    }
  };
};

const debounce = (func, delay) => {
  let timeoutId = null;
  return (...arg) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(func.bind(null, ...arg), delay);
  };
};

let offsetTops = [];
const getOffsetTops = () => {
  offsetTops = contentItems.map(elem => {
    const [ofs, clh] = [elem.offsetTop, elem.clientHeight];
    return [ofs - clh / 2, ofs + clh / 2];
  });
};
getOffsetTops();

window.addEventListener("scroll", throttle(e => {
  const { scrollTop } = e.target.scrollingElement;
  const targetIndex = offsetTops.findIndex(([from, to]) => (
    scrollTop >= from && scrollTop < to
  ))
  Array.from(navigation.children).forEach((c, i) => {
    if (i !== targetIndex) c.classList.remove('on');
    else c.classList.add('on');
  })
}, 300));

navigation.addEventListener('click', e => {
  const targetElem = e.target;
  console.log(targetElem.tagName);
  if (targetElem.tagName === "DIV") {
    const targetIndex = navItems.indexOf(targetElem.parentElement)
    contentItems[targetIndex].scrollIntoView({
      block: 'start',
      behavior: 'smooth'
    });
  }
});

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

const dropdownBtn = document.querySelector('.dropdown-pc-menu');
const dropdownList = document.querySelector('.dropdown-pc-list');
dropdownBtn.addEventListener('click', function(e){
  e.preventDefault();
  dropdownList.classList.add('open')
})
window.addEventListener('click', function(e){
  if (e.target.className !== 'dropdown-pc-menu') {
    console.log(e.target);
    dropdownList.classList.remove('open')
    if (e.target.className === 'dropdown-pc-sub') {
      const value = e.target.textContent;
      console.log(value);
      dropdownBtn.innerText = value;
    }
  } 
})