import initMenuMobile from './modules/menu-mobile.js';
// import initModal from "./modules/modal.js";

if(window.SimpleSlide) {

    console.log('Slide OK');

    new SimpleSlide({
        slide: "teste", // nome do atributo data-slide="principal"
        nav: false, // se deve ou não mostrar a navegação
        auto: true, // se o slide deve passar automaticamente
        time: 2000, // tempo de transição dos slides
        pauseOnHover: true // pausa a transição automática
    });

    // new SimpleSlide({
    //     slide: "portfolio",
    //     nav: true, // se deve ou não mostrar a navegação
    //     auto: true, // se o slide deve passar automaticamente
    //     time: 5000, // tempo de transição dos slides
    //     pauseOnHover: true // pausa a transição automática
    // });
}

/*if(window.SimpleAnime) {

    new SimpleAnime();

}*/

initMenuMobile();
