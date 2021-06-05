import { NewsArticle } from './components/news-article/news-article.js';
import { Carousel } from './components/carousel/carousel.js';
import { Day } from './components/day/day.js';
import { Time } from './components/time/time.js';


fetch('http://localhost:3000/news.json')
    .then(serverResponse => serverResponse.json())
    .then(responseText => { 
        document.querySelector('app-carousel').myNews(responseText.articles);
    });


// 1.domácí úkol
const section = document.querySelector('section.main-content');
const currentDate = new Date();
const maxDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();

/*
for(let i = 1; i <= 31; i++){
    const day = document.createElement('div');
    day.innerText = i;
    day.classList.add('main-content__day');
    section.appendChild(day);
}
*/

for(let i = 1; i <= maxDate; i++){
    const dayDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), i);
    const day = new Day(dayDate);
    section.appendChild(day);
}

/*
const buttonOpenModal = document.getElementById('open-modal');
const modalContainer = document.querySelector('.modal-container');

buttonOpenModal.addEventListener('click', () => {
   modalContainer.hidden = false;
}); */

/*
const buttonOpenModal = document.querySelector('#open-modal');
buttonOpenModal.addEventListener('click', () => {
        showDayModal().then((result) => console.log(result));
    }); */
/*
function showDayModal(){

    const promiseResult = new Promise((resolve, reject) => {
        const template = document.querySelector('#modal-template');
        const modal = template.content.cloneNode(true);
        
        const closeAction = () => {
            const child = document.querySelector('.modal-container');
            document.body.removeChild(child);
            resolve(null);
        };

        const closeButton = modal.querySelector('#close-modal');
        closeButton.addEventListener('click', closeAction);

        modal.querySelector('#cancel-button').addEventListener('click', closeAction);

        modal.querySelector('#save-button').addEventListener('click', () => {
            const formRef = document.querySelector('#modal-form');
            const formData = new FormData(formRef);
            const isHoliday = formData.get('isHoliday') === 'on';
            resolve({isHoliday: isHoliday});
        });
        document.body.appendChild(modal);
    }); 
    
    return promiseResult;

    }

*/
/*
function hideTheThing(event){
    event.target.style.display = 'none';
}

document.querySelectorAll('app-day').forEach(day => day.addEventListener('click', hideTheThing)); */

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
        const isHoliday = formData.get('isHolidayControl') === 'on';
    });

    // ziskat referenci na input limitAttendeesByGender
    // udalost change napr: check.addEventListener('change', (event) => { })
    // event.target.checked
    // ziskat referenci na div#genderSelectRow
    // if else ->
    // div.classList
    // classList.add('abc')
    // classList.remove('abc')

    const limit = modal.querySelector('#limitAttendeesByGender');
    const gender = modal.querySelector('#genderSelectRow');
    limit.addEventListener('change', (event) => {
        if(event.target.checked){
            gender.classList.remove('hidden');
        }
        else{
            gender.classList.add('hidden');
        }
    })
    
    // pri vytvaření options pridat tridu
    // ziskat referenci na všechny elementy s naší novou třídou
    // querySelectorAll
    // select.removeChild(it)
    // document.removeChild(it)
    // filter

    fetch('http://localhost:3000/contacts')
    .then(serverResponse => serverResponse.text())
    .then(responseText => {
      const data = JSON.parse(responseText);

      // id
      // first_name
      // last_name
      // gender
      // ziskat referenci na select s id eventAttendees
      // vytvorit novy element option
      // <option value="id"></option>
      // option innerText first_name + last_name
      // option.setAttribute('value', ...);
      // option.innerText = firstname + lastnme;
      // vlozit option do selectu
      const attendees = document.querySelector('#eventAttendees');
      data.forEach(it => {
        const option = document.createElement('option');
        option.classList.add('namesByGender');
        const optionsWithClass = document.querySelectorAll('.namesByGender');
      /*  const optionByGender = optionsWithClass.filter(it => {
            const byGender = 
        }); */
        option.setAttribute('value', it.id);
        option.innerText = `${it.first_name} ${it.last_name}`;
        attendees.appendChild(option);
      });
   });


    document.body.appendChild(modal);
}

window.showModal = showDayModal;

function showTime(){
    const appTime = document.querySelector('app-time');
    appTime.classList.remove('hidden');  
}

function hideTime(){
    const appTime = document.querySelector('app-time');
    appTime.classList.add('hidden');  
}

document.addEventListener('keydown', (keyboardEvent) => {
    let password = '';
    if(keyboardEvent.key === 't'){
        password = 't';
        console.log(password);
        document.addEventListener('keydown', (keyboardEvent) => {
            if(keyboardEvent.key === 'i'){
                password = 'ti';
                console.log(password);
                document.addEventListener('keydown', (keyboardEvent) => {
                    if(keyboardEvent.key === 'm'){
                        password = 'tim';
                        console.log(password);
                        document.addEventListener('keydown', (keyboardEvent) => {
                            if(keyboardEvent.key === 'e'){
                                password = 'time';
                                console.log(password);
                                showTime();
                                setTimeout(
                                    () => {
                                      hideTime();
                                    },
                                    5000,
                                );
                            }
                        })
                    }
                })
            }
        })
    }
});





    
    