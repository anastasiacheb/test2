let slideIndex = 0;
showSlides()

function showSlides() {
  let cards = document.querySelectorAll(".card-rate");
  for (let i = 0; i < cards.length; i++) {
    cards[i].style.opacity = 0;
  }
  slideIndex++;

  if (slideIndex > cards.length) {
    slideIndex = 1;
  }
  cards[slideIndex - 1].style.opacity = '1';
  setTimeout(showSlides, 3000);
}

