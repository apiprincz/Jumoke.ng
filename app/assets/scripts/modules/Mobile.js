
class Header {
    constructor(){
        this.mobileNav = document.querySelectorAll(".mobile-nav-menu > li");
        this.mobileNavLinks = document.querySelectorAll(".mobile-nav-menu a");
        this.navItems = document.querySelectorAll(".header-list a");

        this.navLogos = document.querySelectorAll(".nav-home");
        this.activeMobileNav();
        this.activeNavLogo();
    
    }

    activeMobileNav() {

        for (let i = 0; i < this.mobileNavLinks.length; i++) {

            
    
            this.mobileNavLinks[i].addEventListener('click', (event) => {
                
                
                // event.preventDefault()
                this.addMobileNavStyle(i, event);

                
            });
        }
        
    }
    activeNavLogo() {
        for (let i = 0; i < this.navLogos.length; i++) {
            this.navLogos[i].addEventListener('click', () => {
                for (let x = 0; x < this.mobileNav.length; x++) {
                    this.mobileNav[x].classList.remove('active')
                    
                this.mobileNav[0].classList.add('active')
                
                    
                }
                for (let x = 0; x < this.navItems.length; x++) {
                    this.navItems[x].classList.remove('colored')
                    
                this.navItems[0].classList.add('colored')
                    
                }
                
            } )
            
        }
    }

    addMobileNavStyle(i, event) {
        
        for (let x = 0; x < this.mobileNav.length; x++) {
            this.mobileNav[x].classList.remove('active')
            
        this.mobileNav[i].classList.add('active')
        
            
        }
        
    }
    

}

export default Header