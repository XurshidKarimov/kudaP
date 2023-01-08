document.addEventListener('DOMContentLoaded', function () {
    new Splide('.splide', {
      type   : 'loop',
      drag   : 'free',
      focus  : 'center',
      perPage: 3,
      gap: '1rem',
      autoScroll: {
        speed: 0,
      },
    }).mount(window.splide.Extensions);
  });