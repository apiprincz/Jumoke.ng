
class Header {
    constructor(){
        this.navItems = document.querySelectorAll(".header-list a");
        this.activeNav();
    
    }

    activeNav() {

        for (let i = 0; i < this.navItems.length; i++) {

            
    
            this.navItems[i].addEventListener('click', (event) => {
                
                

                this.addNavStyle(i, event);

                
            });
        }
        
    }

    addNavStyle(i, event) {
        
        for (let x = 0; x < this.navItems.length; x++) {
            this.navItems[x].classList.remove('colored')
            if (event.target.classList[0] === 'nav-btn') {
                
            
            }
        this.navItems[i].classList.add('colored')
            
        }
        
    }
    

}

export default Header