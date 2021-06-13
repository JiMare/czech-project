export class Select extends HTMLElement{
   
    constructor(label){
        super();
        this.label = label;
        this.innerHTML = `
        <label>${this.label}</label> <select id="${this.label}">
        </select>`;   

    }

    createYears(){
       const select = document.querySelector('#year');
        for(let i = new Date().getFullYear() - 80; i <= new Date().getFullYear() + 20; i++){
            const option = document.createElement('option');
            option.setAttribute('value', i);
            option.innerText = i;
            if(i == new Date().getFullYear()){
                option.setAttribute('selected', 'selected');
            }
            select.appendChild(option);
        }
    }

    createMonths(){
        const select = document.querySelector('#month');
        const months = ['leden', 'únor', 'březen', 'duben', 'květen', 'červen', 'červenec', 'srpen', 'září', 
                        'říjen', 'listopad', 'prosinec'];
        for(let i = 0; i < months.length; i++){
            const option = document.createElement('option');
            option.setAttribute('value', i);
            option.innerText = months[i];
            if(i == new Date().getMonth()){
                option.setAttribute('selected', 'selected');
            }
            select.appendChild(option);
        }
    }
    
  

}

customElements.define('app-select', Select);