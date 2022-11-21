// Slider
var slide_hero = new Swiper(".slide-hero", {
  effect: 'fade',
  pagination: {
    el: ".s-area-slide-hero .slide-hero .swiper-slide .main-area .area-explore .swiper-pagination",
  },
});

// Open Pokémon details
const cardPokemon = document.querySelectorAll('.js-open-details-pokemon');
const btnCloseModal = document.querySelector('.js-close-details-pokemon');

function openDetailsPokemon() {
  document.documentElement.classList.add('open-modal');
}

function closeDetailsPokemon() {
  document.documentElement.classList.remove('open-modal');
}

cardPokemon.forEach(card => {
  card.addEventListener('click', openDetailsPokemon);
})

btnCloseModal.addEventListener('click', closeDetailsPokemon);