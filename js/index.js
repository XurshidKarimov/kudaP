document.addEventListener('DOMContentLoaded', function () {
    new Splide('#splide1', {
      type   : 'loop',
      drag   : 'free',
      focus  : 'center',
      perPage: 3,
      gap: '1rem',
      height: '17rem',
      autoScroll: {
        speed: 1.5,
      },
    }).mount(window.splide.Extensions);
  });

  document.addEventListener('DOMContentLoaded', function () {
    new Splide('#splide2', {
      type   : 'loop',
      drag   : 'free',
      focus  : 'center',
      perPage: 3,
      gap: '1rem',
      height: '17rem',
      autoScroll: {
        speed: 1.5,
      },
    }).mount(window.splide.Extensions);
  });