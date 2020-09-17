
class Menu {
    constructor(){
        this.navIcon = document.querySelector(".header-toggle");
        this.nav = document.querySelector('.mobile-nav');
        this.triggerEvent();
    
    }

    triggerEvent() {


        this.navIcon.addEventListener('click', () => {
            this.toggleSlider(event);
            
        });
    }

    toggleSlider(event) {
        this.nav.classList.toggle('mobile-nav--open');
        this.navIcon.classList.toggle("header-toggle--close");
        
    }
}

export default Menu