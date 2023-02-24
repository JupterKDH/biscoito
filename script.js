const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const openCookie = document.querySelector("#openCookie");
const openCookieAgain = document.querySelector("#openCookieAgain");
let phrasesOfCookie = [
  'Você tera um bom dia hoje!',
  'Coisas boas vem no se caminho!',
  'Espera mudanças positivas em breve na sua vida!',
  'Você é amado e apreciados por aquelea a sua volta',
  'Uma surpresa agradável está ao seu aguardo',
  'Seu esforço em breve será recompensado',
];

let xAttempts = 1;

/* eventos */
openCookie.addEventListener('click', openCookieEvent);
openCookieAgain.addEventListener('click', reloadCookieEvent);
document.addEventListener('keydown', function(e) {
  if(e.key == 'Enter') {
      reloadCookieEvent()
  }
})


/* funções */

function openCookieEvent(event) {
  //event.preventDefault()

  toggleScreen()
  screen2 .querySelector('h2').innerText = randomPhrase(phrasesOfCookie)
  
}

function reloadCookieEvent() {
  toggleScreen() 
  screen2 .querySelector('h2').innerText = randomPhrase(phrasesOfCookie)
}

function toggleScreen() {
  screen1.classList.toggle('hide')
  screen2.classList.toggle('hide')
}

function randomPhrase(items) {
  let index = Math.floor(Math.random() * items.length)
  return items[index]
  
}
