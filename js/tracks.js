document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e){
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior : "smooth"
    });
  });
});

// TECH MODAL ----
// modal 1 variable to call
var modal1 = document.getElementById("modal1");

// modal 1 open button variable to call
var modal1Btn = document.getElementById("scienceIntroBtn");

// closeBtn variable to call
var closeBtn1 = document.getElementById("closeBtn1");

// event listener for modal 1 click/open
modal1Btn.addEventListener('click', openModal1);

// event lsitener to for close btn to close
closeBtn1.addEventListener('click', closeModal1);

// event listener fore click outside modal
window.addEventListener('click', outsideModal1);

// opens modal 1 on screen
function openModal1() {
  modal1.style.display = "block";
}

// hides modal 1 on screen when x button is clicked
function closeModal1() {
  modal1.style.display = "none";
}

// hides modal 1 on screen when there is click outside of modal
function outsideModal1(clickLocation) {
  if (clickLocation.target == modal1) {
    modal1.style.display = "none";
  }
}

// TECH MODAL --------------------------------------
// modal variable to call
var modal2 = document.getElementById("modal2");

// modal open button variable to call
var modal2Btn = document.getElementById("techIntroBtn");

// closeBtn variable to call
var closeBtn2 = document.getElementById("closeBtn2");

// event listener for modal click/open
modal2Btn.addEventListener('click', openModal2);

// event lsitener to for close btn to close
closeBtn2.addEventListener('click', closeModal2);

// event listener fore click outside modal
window.addEventListener('click', outsideModal2);

// opens modal  on screen
function openModal2() {
  modal2.style.display = "block";
}

// hides modal on screen when x button is clicked
function closeModal2() {
  modal2.style.display = "none";
}

// hides modal on screen when there is click outside of modal
function outsideModal2(clickLocation) {
  if (clickLocation.target == modal2) {
    modal2.style.display = "none";
  }
}

// ENG MODAL --------------------------------------
// modal variable to call
var modal3 = document.getElementById("modal3");

// modal open button variable to call
var modal3Btn = document.getElementById("engIntroBtn");

// closeBtn variable to call
var closeBtn3 = document.getElementById("closeBtn3");

// event listener for modal click/open
modal3Btn.addEventListener('click', openModal3);

// event lsitener to for close btn to close
closeBtn3.addEventListener('click', closeModal3);

// event listener fore click outside modal
window.addEventListener('click', outsideModal3);

// opens modal  on screen
function openModal3() {
  modal3.style.display = "block";
}

// hides modal on screen when x button is clicked
function closeModal3() {
  modal3.style.display = "none";
}

// hides modal on screen when there is click outside of modal
function outsideModal3(clickLocation) {
  if (clickLocation.target == modal3) {
    modal3.style.display = "none";
  }
}

// ART COW MODAL --------------------------------------
// modal variable to call
var modal4 = document.getElementById("modal4");

// modal open button variable to call
var modal4Btn = document.getElementById("artIntroBtn");

// closeBtn variable to call
var closeBtn4 = document.getElementById("closeBtn4");

// event listener for modal click/open
modal4Btn.addEventListener('click', openModal4);

// event lsitener to for close btn to close
closeBtn4.addEventListener('click', closeModal4);

// event listener fore click outside modal
window.addEventListener('click', outsideModal4);

// opens modal  on screen
function openModal4() {
  modal4.style.display = "block";
}

// hides modal on screen when x button is clicked
function closeModal4() {
  modal4.style.display = "none";
}

// hides modal on screen when there is click outside of modal
function outsideModal4(clickLocation) {
  if (clickLocation.target == modal4) {
    modal4.style.display = "none";
  }
}

// MATH MODAL --------------------------------------
// modal variable to call
var modal5 = document.getElementById("modal5");

// modal open button variable to call
var modal5Btn = document.getElementById("mathIntroBtn");

// closeBtn variable to call
var closeBtn5 = document.getElementById("closeBtn5");

// event listener for modal click/open
modal5Btn.addEventListener('click', openModal5);

// event lsitener to for close btn to close
closeBtn5.addEventListener('click', closeModal5);

// event listener fore click outside modal
window.addEventListener('click', outsideModal5);

// opens modal  on screen
function openModal5() {
  modal5.style.display = "block";
}

// hides modal on screen when x button is clicked
function closeModal5() {
  modal5.style.display = "none";
}

// hides modal on screen when there is click outside of modal
function outsideModal5(clickLocation) {
  if (clickLocation.target == modal5) {
    modal5.style.display = "none";
  }
}

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