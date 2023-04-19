const image = document.getElementById('terms__more');
const imageContainer = document.getElementById('summary');

let rotated = false;

imageContainer.addEventListener('click', () => {
  if (!rotated) {
    image.style.transform = 'rotate(180deg)';
    rotated = true;
  } else {
    image.style.transform = 'rotate(0deg)';
    rotated = false;
  }
});

$(document).ready(function () {
    $("details").on("toggle", function () {
      if (window.innerWidth <= 912) {
        if ($(this).attr("open")) {
          $(".main-container").css("height", "124vh");
        } else {
          $(".main-container").css("height", "100vh");
        }
      }
      if (window.innerWidth > 540 && window.innerWidth <= 820) {
        if ($(this).attr("open")) {
          $(".main-container").css("height", "120vh");
        } else {
          $(".main-container").css("height", "100vh");
        }
      }
      if (window.innerWidth > 414 && window.innerWidth <= 540) {
        if ($(this).attr("open")) {
          $(".main-container").css("height", "120vh");
        } else {
          $(".main-container").css("height", "100vh");
        }
      }
      if (window.innerWidth > 375 && window.innerWidth <= 414) {
        if ($(this).attr("open")) {
          $(".main-container").css("height", "105vh");
        } else {
          $(".main-container").css("height", "100vh");
        }
      }
      if (window.innerWidth <= 375) {
        if ($(this).attr("open")) {
          $(".main-container").css("height", "124vh");
        } else {
          $(".main-container").css("height", "100vh");
        }
      }
      if (window.innerWidth > 280 && window.innerWidth <= 360) {
        if ($(this).attr("open")) {
          $(".main-container").css("height", "115vh");
        } else {
          $(".main-container").css("height", "100vh");
        }
      }
      if (window.innerWidth <= 280) {
        if ($(this).attr("open")) {
          $(".main-container").css("height", "140vh");
        } else {
          $(".main-container").css("height", "100vh");
        }
      }
    });
  });

  const button = document.querySelector('.button');

  button.addEventListener('click', () => {
    window.open('https://rocketbets.com/br/popup/registration', '_self');
  });
  