const slides = [
  `<div class="carousel__slide">
        <img class="carousel__image" src="./img/services/icon1.svg" />
        <h3>Honey Production</h3>
        <p>We produce, bottle, and sell honey harvested by our beekeepers.</p>
        <a class="services__carousel-button" href="#">Learn More</a>
    </div>`,
  `<div class="carousel__slide">
        <img class="carousel__image" src="./img/services/icon2.svg" />
        <h3>Honey Shop</h3>
        <p>We offer over 10 types of organic raw honey in our online store.</p>
        <a class="services__carousel-button" href="#">Learn More</a>
    </div>`,
  `<div class="carousel__slide">
        <img class="carousel__image" src="./img/services/icon3.svg" />
        <h3>Supplements</h3>
        <p>You can buy bee pollen, propolis, and hive mixtures.</p>
        <a class="services__carousel-button" href="#">Learn More</a>
    </div>`,
  `<div class="carousel__slide">
        <img class="carousel__image" src="./img/services/icon4.svg" />
        <h3>Beekeeping Classes</h3>
        <p>Feel free to book excursions and workshops at our swaths.</p>
        <a class="services__carousel-button" href="#">Learn More</a>
    </div>`,
];

let currentIdx = 0;

function renderSlide() {
  const slideContainer = document.querySelector(".services__carousel-slides");
  slideContainer.innerHTML = slides[currentIdx];
  if (window.matchMedia("(min-width:768px)").matches) {
    const secondSlideIdx = currentIdx + 1 >= slides.length ? 0 : currentIdx + 1;
    slideContainer.innerHTML += slides[secondSlideIdx];
    if (window.matchMedia("(min-width:980px)").matches) {
      const thirdSlideId =
        secondSlideIdx + 1 >= slides.length ? 0 : secondSlideIdx + 1;
      slideContainer.innerHTML += slides[thirdSlideId];
    }
  }
  renderIndicators();
}

function renderIndicators() {
  let indidatorsHtml = "";
  for (let i = 0; i < slides.length; i++) {
    if (i === currentIdx) {
      indidatorsHtml += '<button class="active"></button>';
    } else {
      indidatorsHtml += "<button></button>";
    }
  }
  const indidatorsContainer = document.querySelector(
    ".services__carousel__indicators"
  );
  indidatorsContainer.innerHTML = indidatorsHtml;
}

function nextSlide() {
  currentIdx = currentIdx + 1 >= slides.length ? 0 : currentIdx + 1;
  renderSlide();
}

function prevSlide() {
  currentIdx = currentIdx - 1 < 0 ? slides.length - 1 : currentIdx - 1;
  renderSlide();
}

renderSlide();

const btnNext = document.querySelector(".services__btn-next");
btnNext.addEventListener("click", nextSlide);

const btnPrev = document.querySelector(".services__btn-prev");
btnPrev.addEventListener("click", prevSlide);

window.addEventListener("resize", renderSlide);
