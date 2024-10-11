
// hamburger menu
const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav__links');

  burger.addEventListener("click", ()=> {
    nav.classList.toggle('nav-active');
  });
}

navSlide();

// steam tabs --  home
let tabs = document.querySelectorAll('.steam__tabs__toggle'), 
  contents = document.querySelectorAll('.steam__tabs__content');

tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => {
    contents.forEach((content) => {
      content.classList.remove('is-active');
    })
    tabs.forEach((tab) => {
      tab.classList.remove('is-active');
    });

    contents[index].classList.add('is-active');
    tabs[index].classList.add('is-active');
  });
});

window.addEventListener('scroll', reveal1);

function reveal1() {
  var reveals = document.querySelectorAll('.reveal1');

  for(var i = 0; i < reveals.length; i++) {

    var windowHeight = window.innerHeight;
    var revealTop = reveals[i].getBoundingClientRect().top
    var revealPoint = 150;

    if(revealTop < windowHeight - revealPoint) {
      reveals[i].classList.add('active1');
    }
  }
}


// video carousel -- home
// define variable
const track  = document.querySelector('.carousel-track')
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel-button-right');
const prevButton = document.querySelector('.carousel-button-left');
const dotsNav = document.querySelector('.carousel-nav');
const dots = Array.from(dotsNav.children);

const slideWidth = slides[0].getBoundingClientRect().width;


// arrange slides next to each other
const setSlidePosition = (slide, index) => {
  slide.style.left = slideWidth * index + 'px';
};

slides.forEach(setSlidePosition);

const moveToSlide = (track, currentSlide, targetSlide) => {
  track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
  // switch classes
  currentSlide.classList.remove('current-slide');
  targetSlide.classList.add('current-slide');
}

const updateDots = (currentDot, targetDot) => {
  currentDot.classList.remove('current-slide');
  targetDot.classList.add('current-slide');
}

const hideShowArrows = (slides, prevButton, nextButton, targetIndex) => {
  if (targetIndex === 0 ) {
    prevButton.classList.add('is-hidden');
    nextButton.classList.remove('is-hidden');
  } else if (targetIndex === slides.length - 1) {
    prevButton.classList.remove('is-hidden');
    nextButton.classList.add('is-hidden');
  } else {
    prevButton.classList.remove('is-hidden');
    nextButton.classList.remove('is-hidden');
  }
}

// click left - move slides left
prevButton.addEventListener('click', e => {
  const currentSlide = track.querySelector('.current-slide');
  const prevSlide = currentSlide.previousElementSibling;
  const currentDot = dotsNav.querySelector('.current-slide');
  const prevDot = currentDot.previousElementSibling;
  const prevIndex = slides.findIndex(slide => slide === prevSlide);
  moveToSlide(track, currentSlide, prevSlide);
  updateDots(currentDot, prevDot);
  hideShowArrows(slides, prevButton, nextButton, prevIndex);
})


// click right - move slides right
nextButton.addEventListener('click', e => {
  const currentSlide = track.querySelector('.current-slide');
  const nextSlide = currentSlide.nextElementSibling;
  const currentDot = dotsNav.querySelector('.current-slide');
  const nextDot = currentDot.nextElementSibling;
  const nextIndex = slides.findIndex(slide => slide === nextSlide);
  moveToSlide(track, currentSlide, nextSlide);
  updateDots(currentDot, nextDot);
  hideShowArrows(slides, prevButton, nextButton, nextIndex);
})



// click nav indicators - move to corresponding slide
dotsNav.addEventListener('click', e => {
  // which indicator was clicked
  const targetDot = e.target.closest('button');
  // stop function if not a button
  if(!targetDot) return;

  const currentSlide = track.querySelector('.current-slide');
  const currentDot = dotsNav.querySelector('.current-slide');
  const targetIndex = dots.findIndex(dot => dot === targetDot)
  const targetSlide = slides[targetIndex];
  moveToSlide(track, currentSlide, targetSlide);
  updateDots(currentDot, targetDot);
  hideShowArrows(slides, prevButton, nextButton, targetIndex);
})

// scroll up testimonials
window.addEventListener('scroll', reveal);

function reveal() {
  var reveals = document.querySelectorAll('.reveal');

  for(var i = 0; i < reveals.length; i++) {

    var windowHeight = window.innerHeight;
    var revealTop = reveals[i].getBoundingClientRect().top
    var revealPoint = 150;

    if(revealTop < windowHeight - revealPoint) {
      reveals[i].classList.add('active');
    }
  }
}

// MATH MODAL --------------------------------------
// modal variable to call
var signup1 = document.getElementById("signUpModal1");

// modal open button variable to call
var signup1Btn = document.getElementById("signup1");

// closeBtn variable to call
var closeBtn5 = document.getElementById("closeBtn20");

// event listener for modal click/open
signup1Btn.addEventListener('click', openModal20);

// event lsitener to for close btn to close
closeBtn5.addEventListener('click', closeModal20);

// event listener fore click outside modal
window.addEventListener('click', outsideModal20);

// opens modal  on screen
function openModal20() {
  signup1.style.display = "block";
}

// hides modal on screen when x button is clicked
function closeModal20() {
  signup1.style.display = "none";
}

// hides modal on screen when there is click outside of modal
function outsideModal20(clickLocation) {
  if (clickLocation.target == signup1) {
    signup1.style.display = "none";
  }
}

