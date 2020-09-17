import Swiper from 'swiper/js/swiper';
import { isNull } from 'util';

class SwiperSection {
    constructor() {

        this.rightArrow = document.querySelector('.testimonials__trigger--right');
        this.leftArrow = document.querySelector('.testimonials__trigger--left');
        this.slideInit();
       
    }



    slideInit() {
        // this.mySwiper = new Swiper('.corouzel__container', {
            
        //     loop: true,
        //     speed: 800,
        //     grabCursor: true,
        //     slidesPerView: 4,

        //     pagination: {
        //         el: '.swiper-pagination',
        //     },
        //     navigation: {
        //         nextEl: '.swiper-button-next',
        //         prevEl: '.swiper-button-prev',
        //     },
           

        // });

        this.mySwiper = new Swiper(".corouzel__container", {
            
            speed: 800,
            autoplay: {
              
                disableOnInteraction: false,
            },
            slidesPerView: 5,
            // Responsive breakpoints
            breakpoints: {
                0: {
                    slidesPerView: 1,
                },
                // when window width is >= 320px
                530: {
                    slidesPerView: 2,
                },
                // when window width is >= 480px
                730: {
                    slidesPerView: 3,
                },
                1200: {
                    slidesPerView: 4,
                },
                1250: {
                    slidesPerView: 5
                }
            }
        })
    }


 
}


export default SwiperSection;