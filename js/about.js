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



// hamburger menu
const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav__links');

  burger.addEventListener("click", ()=> {
    nav.classList.toggle('nav-active');
  });
}

navSlide();


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