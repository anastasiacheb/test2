window.addEventListener("load", () => {
    fillSliderColor();
})

let slider = document.querySelector("#weight");
let sliderValue = document.querySelector("#weight__value")

function fillSliderColor() {
    let value = (slider.value / slider.max) * 100;
    slider.style.background = `linear-gradient(to right, #000000 ${value}% , #EEEEEE ${value}%)`;
    sliderValue.textContent =  slider.value;
}

slider.addEventListener("input", () => {
    fillSliderColor();
})

let btnAnimate = document.querySelector(".button_animate");
let txtAnimate = document.querySelector(".text_animate");
let text1 = document.querySelector(".text1");
let text2 = document.querySelector(".text2");
let section = document.querySelector(".section_animate");

function toggleTransitionWithoutTimeout() {
    text1.removeEventListener("transitionend", onTransitionEnd);
    text1.addEventListener("transitionend", onTransitionEnd);
  
    text1.classList.remove("fade");

    text2.removeEventListener("transitionend", onTransitionEnd);
    text2.addEventListener("transitionend", onTransitionEnd);
  
    text2.classList.remove("fade");

    section.removeEventListener("transitionend", onTransitionEnd);
    section.addEventListener("transitionend", onTransitionEnd);
  
    section.classList.remove("fade");
  }


  function onTransitionEnd() {
    text1.removeEventListener("transitionend", onTransitionEnd);
  
    let content = "Your Personal Plan";
    text1.innerHTML = content;
    text1.classList.add("fade");

    text2.removeEventListener("transitionend", onTransitionEnd);
  
    let content2 = "We estimate that you will be able to reach a weight of 68.0 kg by 14 March 2024nd!"
    text2.innerHTML = content2;
    text2.classList.add("fade");

    section.removeEventListener("transitionend", onTransitionEnd);
  
    let sectionContent = 
    `<div class="card__container footer__card">
          <h2 class="text-h2">Benefits of Your Plan</h2>
          <div class="card">
            <div class="card__info">
              <h3 class="text_bold text">Easy to follow</h3>
              <p class="text_small">Tailored to your unique objectives, whether it's weight loss or muscle gain.</p>
            </div>
            <p class="text_emoji">&#128640;</p>
          </div>

          <div class="card">
            <div class="card__info">
              <h3 class="text_bold text">Customized to Your Goals</h3>
              <p class="text_small">Our program is user-friendly, ensuring a seamless fit into your routine.</p>
            </div>
            <p class="text_emoji">&#127919;</p>
          </div>

          <div class="card">
            <div class="card__info">
              <h3 class="text_bold text">Adapted to Your Daily Routine</h3>
              <p class="text_small">Fits into your daily life, making healthy choices convenient.</p>
            </div>
            <p class="text_emoji">&#9200;</p>
          </div>

          <div class="card">
            <div class="card__info">
              <h3 class="text_bold text">No Diets or Restrictions</h3>
              <p class="text_small">No more restrictive diets – a balanced, sustainable approach.</p>
            </div>
            <p class="text_emoji">&#127856;</p>
          </div>

          <div class="card">
            <div class="card__info">
              <h3 class="text_bold text">Enjoy What You Love</h3>
              <p class="text_small">Discover nourishing meals aligned with your preferences.</p>
            </div>
            <p class="text_emoji">&#128523;</p>
          </div>

          <div class="card">
            <div class="card__info">
              <h3 class="text_bold text">Achievement Support</h3>
              <p class="text_small">Comprehensive tools for informed choices and goal tracking.</p>
            </div>
            <p class="text_emoji">&#127942;</p>
          </div>

          <div class="card">
            <div class="card__info">
              <h3 class="text_bold text">New Healthy Habits</h3>
              <p class="text_small">Cultivate lasting habits for sustained well-being.</p>
            </div>
            <p class="text_emoji">&#127793;</p>
          </div>

          <div class="card">
            <div class="card__info">
              <h3 class="text_bold text">Keep Favorites</h3>
              <p class="text_small">Improved health without giving up your favorite foods. Nothing can stop you!</p>
            </div>
            <p class="text_emoji">&#10084;</p>
          </div>

        </div>
        <div class="button__container">
          <button class="button">Awessome!</button>
          <button class="button button_plain">Back</button>
        </div>`
    section.innerHTML = sectionContent;
    section.classList.add("fade");
  }
  
  btnAnimate.addEventListener("click", toggleTransitionWithoutTimeout);

let image1 = document.querySelectorAll(".image1");
let image2 = document.querySelectorAll(".image2");

btnAnimate.addEventListener("click", () => {
    for (let i = 0; i < image1.length; i ++) {
        image1[i].classList.add("image1_animate");
    }

    for (let i = 0; i < image2.length; i ++) {
        image2[i].classList.add("image2_animate");
    }
})

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



