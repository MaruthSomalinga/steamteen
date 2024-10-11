

// get elements
let questions = document.querySelectorAll('.question');
let faqImg = document.querySelector('.faq__img');

// add event listeners to questions 
questions.forEach((question) => question.addEventListener('click', () => {
  if (question.parentNode.classList.contains('active')) {
    question.parentNode.classList.toggle('active');
  }
  else {
    questions.forEach((question) => question.parentNode.classList.remove('active'));
    question.parentNode.classList.add('active');
  }
}));

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

