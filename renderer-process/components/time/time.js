export class Time extends HTMLElement {

     constructor(){
        super();
        this.getTime();
     }

     getTime(){
        return setInterval(
            () => {
              this.innerText = new Date().toLocaleTimeString();
            },
            1000,
        );
    }

    showTime(){
       this.classList.remove('hidden');  
    }
    
    hideTime(){
        this.classList.add('hidden');  
    }

}

customElements.define('app-time', Time);