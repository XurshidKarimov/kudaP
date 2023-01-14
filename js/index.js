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


let body = document.querySelector('body');
let switchMode = document.getElementById('darkmode');
let imgSwitch = document.getElementById('darkmodeimg');
let [darkmodeTXT] = document.getElementsByClassName('darkmode-txt');

switchMode.addEventListener('click', () => {
  body.classList.toggle('dark');
  switchMode.classList.toggle('light');

  if(darkmodeTXT.innerHTML == 'Dark mode'){
      darkmodeTXT.innerHTML = 'Light mode';
      imgSwitch.setAttribute('src', './assets/icons/lightmode.svg');
  }
  else{
    darkmodeTXT.innerHTML = 'Dark mode';
    imgSwitch.setAttribute('src', './assets/icons/dark-mode-6682.svg');
  }

})