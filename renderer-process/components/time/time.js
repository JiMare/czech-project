export class Time extends HTMLElement {

    getTime(){
        this.innerText = new Date().toLocaleTimeString();
        const interval = setInterval(
            () => {
              this.innerText = new Date().toLocaleTimeString();
            },
            1000,
        );
        setTimeout(
            () => {
              clearInterval(interval);
            },
            5000,
        ); 
    }

    showTime(){
       this.getTime();
       this.classList.remove('hidden'); 
       setTimeout(
        () => {
          this.hideTime();
        },
         5000,
       ); 
    }
    
    hideTime(){
        this.innerText = '';
        this.classList.add('hidden');   
    }

}

customElements.define('app-time', Time);