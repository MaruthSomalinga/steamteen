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

// hamburger menu
const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav__links');

  burger.addEventListener("click", ()=> {
    nav.classList.toggle('nav-active');
  });
}


// buttons ids
let scienceBtn = document.getElementById('scienceBtn');
let techBtn = document.getElementById('technologyBtn');
let engBtn = document.getElementById('engineeringBtn');
let artBtn = document.getElementById('artBtn');
let mathBtn = document.getElementById('mathematicsBtn');

// timeline variable
let scienceTimeline = document.getElementById('scienceTimeline');
let techTimeline = document.getElementById('techTimeline');
let engTimeline = document.getElementById('engTimeline');
let artTimeline = document.getElementById('artTimeline');
let mathTimeline = document.getElementById('mathTimeline');

scienceBtn.addEventListener('click', () => {
  scienceTimeline.classList.remove('hiddenTimeline');
  techTimeline.classList.add('hiddenTimeline');
  engTimeline.classList.add('hiddenTimeline');
  artTimeline.classList.add('hiddenTimeline');
  mathTimeline.classList.add('hiddenTimeline');
});

techBtn.addEventListener('click', () => {
  scienceTimeline.classList.add('hiddenTimeline');
  techTimeline.classList.remove('hiddenTimeline');
  engTimeline.classList.add('hiddenTimeline');
  artTimeline.classList.add('hiddenTimeline');
  mathTimeline.classList.add('hiddenTimeline');
});

engBtn.addEventListener('click', () => {
  scienceTimeline.classList.add('hiddenTimeline');
  techTimeline.classList.add('hiddenTimeline');
  engTimeline.classList.remove('hiddenTimeline');
  artTimeline.classList.add('hiddenTimeline');
  mathTimeline.classList.add('hiddenTimeline');
});

artBtn.addEventListener('click', () => {
  scienceTimeline.classList.add('hiddenTimeline');
  techTimeline.classList.add('hiddenTimeline');
  engTimeline.classList.add('hiddenTimeline');
  artTimeline.classList.remove('hiddenTimeline');
  mathTimeline.classList.add('hiddenTimeline');
});

mathBtn.addEventListener('click', () => {
  scienceTimeline.classList.add('hiddenTimeline');
  techTimeline.classList.add('hiddenTimeline');
  engTimeline.classList.add('hiddenTimeline');
  artTimeline.classList.add('hiddenTimeline');
  mathTimeline.classList.remove('hiddenTimeline');
});


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