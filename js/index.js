// document.addEventListener('DOMContentLoaded', function () {
//     new Splide('#splide1', {
//       type   : 'loop',
//       drag   : 'free',
//       focus  : 'center',
//       perPage: 3,
//       gap: '1rem',
//       height: '17rem',
//       autoScroll: {
//         speed: 1.5,
//       },
//     }).mount(window.splide.Extensions);
//   });

// document.addEventListener('DOMContentLoaded', function () {
//     new Splide('#splide2', {
//       type   : 'loop',
//       drag   : 'free',
//       focus  : 'center',
//       perPage: 3,
//       gap: '1rem',
//       height: '17rem',
//       autoScroll: {
//         speed: 1.5,
//       },
//     }).mount(window.splide.Extensions);
//   });

let app = Vue.createApp({
  data(){
    return {
      post: [],
      darkstate: false,
      uzat: 0,
    }
  },
  methods: {
    getPost(){
      fetch('http://45.8.97.85/api/places/1').then(response => response.json()).then(data =>
        this.post = data.map(function(obj){
          obj.imageUrl = `http://45.8.97.85/${obj.imageUrl}`;
        return obj;
        })
      ).then(data => this.uzat = data[0]);
    },
    addDark(){
        let [body] = document.getElementsByTagName('body'),
            [darkbtninner] = document.getElementsByClassName('darkmode-txt'),
            imgSwitch = document.getElementById('darkmodeimg');

        body.classList.toggle('dark');
        if(darkbtninner.innerHTML == 'Dark mode'){
            darkbtninner.innerHTML = 'Light mode';
            imgSwitch.setAttribute('src', './assets/icons/lightmode.svg');
        }
        else{
          darkbtninner.innerHTML = 'Dark mode';
          imgSwitch.setAttribute('src', './assets/icons/dark-mode-6682.svg');
        }
    },
    goProp(objIndex){
      this.uzat = this.post[objIndex];
    }

  },
  mounted(){
    this.getPost();
    this.uzat = this.post[0];
  }
})