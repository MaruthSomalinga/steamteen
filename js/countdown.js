// countdown start date 

let conference = new Date("07/06/2024").getTime();

let countdown = setInterval(tick, 1000);

function tick () {
  let currentTime = new Date().getTime();
  let timeLeft = conference - currentTime;
  if (timeLeft > 0) {
    let daysUntil = Math.floor(timeLeft / (1000 * 24 * 60 * 60));
    if (daysUntil < 10) {
      daysUntil = "0" + daysUntil;
    };
    let hoursUntil = Math.floor((timeLeft % (60 * 1000 * 60 * 24)) / (1000 * 60 * 60));
    if (hoursUntil < 10) {
      hoursUntil = "0" + hoursUntil;
    };
    let minutesUntil = Math.floor((timeLeft % (1000 * 60 * 60)) / (60 * 1000));
    if (minutesUntil < 10) {
      minutesUntil = "0" + minutesUntil;
    };
    let secUntil = Math.floor((timeLeft % (1000 * 60)) / 1000);
    if (secUntil < 10) {
      secUntil = "0" + secUntil;
    };

    let time = `${daysUntil} : ${hoursUntil} : ${minutesUntil} : ${secUntil}`;
      document.querySelector('.countdown-time').innerText = time;

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