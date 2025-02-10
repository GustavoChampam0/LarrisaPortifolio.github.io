<script>
document.addEventListener('DOMContentLoaded', (event) => {
  // Inicializa Swiper para Trabalhos Recentes
  var swiperTrabalhos = new Swiper('.mySwiper', {
    slidesPerView: 3,
    spaceBetween: 30,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      640: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 3 },
    }
  });

  // Inicializa Swiper para Fotografias
  var swiperFotos = new Swiper('.mySwiperFotos', {
    slidesPerView: 3,
    spaceBetween: 30,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      640: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 3 },
    }
  });

  // Inicializa Fancybox
  Fancybox.bind("[data-fancybox]", {});
});
</script>