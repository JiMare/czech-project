import { NewsArticle } from './components/news-article/news-article.js';
import { Carousel } from './components/carousel/carousel.js';
import { Day } from './components/day/day.js';
import { Time } from './components/time/time.js';
import { Select } from './components/select/select.js';

let contactsCache; 

fetch('http://localhost:3000/news.json')
    .then(serverResponse => serverResponse.json())
    .then(responseText => { 
        document.querySelector('app-carousel').myNews(responseText.articles);
    });


const section = document.querySelector('section.main-content');

//6.úkol selecty

const sectionSelect = document.querySelector('.selects');
const selectYear = new Select('year');
sectionSelect.appendChild(selectYear);
const selectMonth = new Select('month');
sectionSelect.appendChild(selectMonth);
 

function createYears(){
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

createYears(); 

function createMonths(){
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

createMonths();


let currentYear = new Date().getFullYear(); 
let currentMonth = new Date().getMonth();
drawCalendar();

 document.querySelector('#year').addEventListener('change', (event)  => {
    currentYear = parseInt(event.target.value);
    section.innerHTML = '';
    drawCalendar();
  });

  document.querySelector('#month').addEventListener('change', (event)  => {
    currentMonth = parseInt(event.target.value);  
    section.innerHTML = '';
    drawCalendar();
  });

 
//vykreslí dny

function drawCalendar(){

    let currentDate = new Date(currentYear, currentMonth);
    const maxDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();

    for(let i = 1; i <= maxDate; i++){
        const dayDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), i);
        const day = new Day(dayDate);
        if(day.innerText == new Date().getDate()){
        day.classList.add('today');
        }
        section.appendChild(day);
    }
}

//funkcionalita modalu

function showDayModal() {
    const template = document.querySelector('#modal-template');
    const modal = template.content.cloneNode(true);
    const closeAction = () => {
        const child = document.querySelector('section.modal-container');
        document.body.removeChild(child);
    };
    modal.querySelector('#close-modal').addEventListener('click', closeAction);
    const cancelButton = modal.querySelector('#cancel-button');
    cancelButton.addEventListener('click', closeAction);
    modal.querySelector('#save-button').addEventListener('click', () => {
        const formRef = document.querySelector('#modal-form');
        const formData = new FormData(formRef);
     // const isHoliday = formData.get('isHolidayControl') === 'on';
        const data = formData.entries(); 

        const object = {};
        for(let formValue of data){
           const key = formValue[0];
           const value = formValue[1];     
           object[key] = value;
        }
    
    });


    const limit = modal.querySelector('#limitAttendeesByGender');
    const gender = modal.querySelector('#genderSelectRow');

    limit.addEventListener('change', (event) => {
        if(event.target.checked){
            gender.classList.remove('hidden');
            const optionsWithClass = document.querySelectorAll('.names');
            optionsWithClass.forEach((elem) => elem.remove());
            const male = document.querySelector('#male');
            male.addEventListener('change', (event) => {
                if(event.target.checked){
                        contactsCache.filter(it => {
                           return it.gender == 'Male'
                           }).forEach(it => {
                            const f = document.querySelectorAll('.females');
                            f.forEach((elem) => elem.remove());   
                            const maleOption = document.createElement('option');
                            maleOption.classList.add('males');
                            maleOption.setAttribute('value', it.id);
                            maleOption.innerText = `${it.first_name} ${it.last_name}`;
                            const at = document.querySelector('#eventAttendees');
                            at.appendChild(maleOption);
                        });
                }
                    
            });
            const female = document.querySelector('#female');
            female.addEventListener('change', (event) => {
                if(event.target.checked){
                    contactsCache.filter(it => {
                        return it.gender == 'Female'
                    }).forEach(it => {
                        const m = document.querySelectorAll('.males');
                        m.forEach((elem) => elem.remove());   
                        const femaleOption = document.createElement('option');
                        femaleOption.classList.add('females');
                        femaleOption.setAttribute('value', it.id);
                        femaleOption.innerText = `${it.first_name} ${it.last_name}`;
                        const at = document.querySelector('#eventAttendees');
                            at.appendChild(femaleOption);
                    });
                   
                }     
            });
       
        }
        else{
            gender.classList.add('hidden');
        }
    });
         
      fetch('http://localhost:3000/contacts')
      .then(serverResponse => serverResponse.text())
      .then(responseText => {
          contactsCache =  JSON.parse(responseText);
          contactsCache.forEach(it => {
        const attendees = document.querySelector('#eventAttendees');
        const option = document.createElement('option');
        option.classList.add('names');
        option.setAttribute('value', it.id);
        option.innerText = `${it.first_name} ${it.last_name}`;
        attendees.appendChild(option);
      });
    });


    document.body.appendChild(modal);
}

function createOptions(contactsCache){

    const attendees = document.querySelector('#eventAttendees');

    contactsCache.forEach(it => {
       
        const option = document.createElement('option');
        option.classList.add('names');
        option.setAttribute('value', it.id);
        option.innerText = `${it.first_name} ${it.last_name}`;
        attendees.appendChild(option);
      });
}

window.showModal = showDayModal;


//funkcionalita k ukazování času
let password = '';

document.addEventListener('keydown', (keyboardEvent) => {   
        password += keyboardEvent.key;
        if(password.indexOf('time') != -1){
            password = '';
            const appTime = document.querySelector('app-time');
            appTime.showTime();                        
        }   
});

    
    