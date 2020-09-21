
class Edu {
    constructor(){
        this.navTabs = document.querySelectorAll(".edu-tabs a");
        this.navContent = document.querySelectorAll('.edu-main-container > div');
        this.navLine = document.querySelectorAll('.edu-bar > div');
        this.activeTabs();
    
    }

    activeTabs() {

        for (let i = 0; i < this.navTabs.length; i++) {
    
            this.navTabs[i].addEventListener('click', (event) => {
                event.preventDefault()
                this.contentSwitcher(i);
            console.log(this.navTabs[i])
                this.coloredTabs(i);

                
            });
        }
        
    }

    contentSwitcher(i) {
        for (let x = 0; x < this.navContent.length; x++) {
            this.navContent[x].classList.remove('active')
            this.navContent[i].classList.add('active')
            
        }
        
        
    }
    coloredTabs(i) {
        for (let x = 0; x < this.navLine.length; x++) {
            this.navLine[x].classList.remove('active')
            this.navLine[i].classList.add('active')
            
        }
    }

}

export default Edu