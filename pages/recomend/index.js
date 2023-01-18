app.component('content-display', {
    template:
    /*html*/
    ` <header class="dark:bg-slate-800">
    <div class="container">
        <div class="header-content">
            <a class="header-content__logo-link" href="../../index.html">
                <img class="header-content__logo" src="../../assets/logo/logo.svg" alt="logo">
            </a>

            <nav class="header-content__navbar">
                <ul class="header-content__link-list">
                    <li class="header-content__link-item">
                        <a class="header-content__link dark:text-white" href="index.html">Главный</a>
                    </li>
                    <li class="header-content__link-item">
                        <a class="header-content__link dark:text-white" href="#">О нас</a>
                    </li>
                    <li class="header-content__link-item">
                        <a class="header-content__link dark:text-white" href="#">Сервисы</a>
                    </li>
                    <li class="header-content__link-item">
                        <a class="header-content__link dark:text-white" href="#">Контакты</a>
                    </li>
                </ul>
            </nav>


            <div id="darkmode" class="darkmode-btn dark:bg-slate-800" @click="">
                <img id="darkmodeimg" src="../../assets/icons/dark-mode-6682.svg" alt="darkmode icon">
                <span class="darkmode-txt dark:text-white">Dark mode</span>
            </div>
            <a class="header-content__contact-btn btn" href="#" target="_blank">
                <img class="header-content__contact-telegram-img" src="../../assets/icons/icons8-telegram-app.svg" alt="telegram logo">
                <span class="header-content__contact-btn__content">Telegram</span>
            </a>

        </div>
    </div>
</header>

<main>
    <article class="recommend">
        <div class="container">
            <div class="recommend-content">
                <div class="recommend-main">
                    <h2 class="content-title">{{uzatildi.title}}</h2>
                    <div class="content-imgbox">
                        <img :src="uzatildi.imageUrl" alt="img">
                    </div>
                    <p class="content-description">{{uzatildi.placeSiteUrl}}</p>
                    <p class="content-description">{{uzatildi.description}}</p>
                </div>
                <aside>
                <h2 class="aside-title">Похожие</h2>
                <ul class="aside-list">
                    <li class="aside-item">
                        <a class="item-link" href="#">
                            <img class="item-imgbox" src="../../assets/images/dr.strange.jpg" alt="img">
                            <span class="item-content">
                                <span class="item-title">Lorem ipsum dolor sit amet.</span>
                                <span class="item-subtitle">Lorem</span>
                            </span>
                        </a>
                    </li>
                </ul>
                </aside>
            </div>
        </div>
    </article>
</main>`,
props: {
    uzatildi: {
        type: Object,
        required: true,
    }
},
data(){
    return {
      
    }
  },
methods: {
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
    }
}
})