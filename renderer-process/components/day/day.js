
export class Day extends HTMLElement{

    constructor(dayNumber){
        super();
        this.dayNumber = dayNumber;
        this.number = dayNumber.getDate();
        this.innerHTML = `<div id="day-number"></div>`;
        this.querySelector('#day-number').innerText = this.number;
        this.addEventListener('click', this.handleClickEvent);   
    }

    getDayName(){
        switch(this.dayNumber.getDay()){
            case 0:
                return 'Neděle';
            case 1:
                return 'Pondělí';
            case 2: 
                return 'Úterý';
            case 3:
                return 'Středa';
            case 4:
                return 'Čtvrtek';
            case 5: 
                return 'Pátek';
            case 6: 
                return 'Sobota';                         
        }
    }

    handleClickEvent(){
        window.showModal();
    }
}

customElements.define('app-day', Day);