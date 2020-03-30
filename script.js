console.log("Hello world!");

// ----------------NAVIGATION SCROLL-----------------------
document.addEventListener("scroll", onScroll);

function onScroll(event) {
  const curPos = window.scrollY;
  document.querySelectorAll("section").forEach(
    (el) => {      // debugger;
      if (el.offsetTop <= curPos && (el.offsetTop+el.offsetHeight)> curPos) { 
        document.querySelectorAll("#navigation a").forEach((a) => { 
          a.classList.remove("active");
          if (el.getAttribute('id') === a.getAttribute("href").substring(1)) { 
            a.classList.add("active");
          }
        }
        )
      }
    }
  )
}

// ------------------------SLIDER-----------------------

const slides = document.querySelectorAll(".wrapper_phones, .wrapper_slider img");
let current = 0;
let isEnabled = true;

function changeCurrentSlide(n) { 
  current = (n + slides.length) % slides.length;
}
function hideSlide(direction) { 
  isEnabled = false;
  slides[current].classList.remove('active_index');
  slides[current].classList.add(direction);
  slides[current].addEventListener('animationend', function () {
    this.classList.remove('active','active_index', direction);
   
   })
}
function showSlide(direction) { 
  slides[current].classList.add('next',direction);
  slides[current].addEventListener('animationend', function () {
    this.classList.remove('next',direction);
    this.classList.add('active', 'active_index');
    isEnabled = true;
   })
}
function previousSlide() { 
  hideSlide('to-right');
  changeCurrentSlide(current-1);
  showSlide('from-left');
}

function nextSlide() { 
  hideSlide('to-left');
  changeCurrentSlide(current + 1);
  showSlide('from-right');
}

document.querySelector('.bottom_left').addEventListener('click', function () { 
  if (isEnabled) { 
    previousSlide(current);
  }
})
  
document.querySelector('.bottom_right').addEventListener('click', function () { 
  if (isEnabled) { 
    nextSlide(current);
  }
})
// ------------SCREEN PHONE----------------------
const SCREENS = document.querySelectorAll(".screen__phone, .screen__phone-2");
const PHONES = document.querySelectorAll(".phone, .rotate_phone-2");

document.getElementById("phone-1").addEventListener('click', (event) => {
  let screen = document.getElementById("screen-1").classList;
  (screen.contains('screen__phone'))?screen.remove('screen__phone'):screen.add('screen__phone');
});
document.getElementById("phone-2").addEventListener('click', (event) => {
  let screen = document.getElementById("screen-2").classList;
  (screen.contains('screen__phone-2'))?screen.remove('screen__phone-2'):screen.add('screen__phone-2');
});

// ------------PORTFOLIO IMAGES---------------------------
const PORTFOLIO = document.getElementById("buttons_images");
const IMAGES = document.getElementById("wrapper_images");


IMAGES.addEventListener('click', (event) => {
   
    let item = event.target;
    if (item.classList.contains('active_images')) {
        IMAGES.querySelectorAll('img').forEach(el => el.classList.remove('active_images'));
    }
    else {
        IMAGES.querySelectorAll('img').forEach(el => el.classList.remove('active_images'));
        item.classList.add('active_images');
    }
}
)

PORTFOLIO.addEventListener("click", event => {
  PORTFOLIO.querySelectorAll("span").forEach(el => 
    el.classList.remove("active_portfolio")
  );
  shufflePortfolioImages();
  event.target.classList.add("active_portfolio");
});

function shufflePortfolioImages() {
  const imagesAll = IMAGES.querySelectorAll("img");
  let quantity;
  let arr = Array.from(imagesAll).sort((a, b) => Math.random() - 0.5);
  imagesAll.forEach(el=> el.classList.remove("hidden_image"));
  switch (event.target.getAttribute("id")) { 
    case "all":
      quantity = 12; break;
    case 'web':
      quantity = 10; break;
    case 'graphic':
      quantity = 6; break;
    case 'artwork':
      quantity = 3; break;
  }
  for (let i = arr.length-1; i >=0; i--) {
    IMAGES.insertAdjacentElement("afterbegin", arr[i]);
  }
  for (let i = quantity, child; i < arr.length; i++) {
    let childArr = IMAGES.children;
    console.log(childArr[i].classList.add("hidden_image"));
  }
}


const BUTTON = document.getElementById("button");
const CLOSE_BUTTON = document.getElementById("close-btn");
const email = document.getElementById("email");
const name = document.getElementById("name");

BUTTON.addEventListener('click', () => {
    const description = document.getElementById("description").value.toString();
    const subject = document.getElementById("subject").value.toString();
    document.getElementById("result_description").innerText = description ? "Description: " + description : "Without description";
    document.getElementById("result_subject").innerText = subject ? "Subject: " + subject : "Without subject";
  document.getElementById("message-block").classList.remove('hidden');
  
})

CLOSE_BUTTON.addEventListener('click', (event) => {
    document.getElementById("subject").value ="";
    document.getElementById("description").value = "";
    document.getElementById("message-block").classList.add('hidden');
}
)