let newsBtn = document.querySelector('.news__title');
let newsName = document.querySelectorAll('.news__name');
let newsDescription = document.querySelectorAll('.news__description');
let newsDate = document.querySelectorAll('.news__date');
let newsLink = document.querySelectorAll('.news__link');
let newsContent = document.querySelector('.news__content');
let preloader = document.querySelector('.news__preloader');
let newsBox = document.querySelectorAll('.news__box');

async function loadNews() {

  let url = `./files/news.json`
  let response = await fetch(url)
  let json = await response.json();
  for (let i = 0; i < json.length; i++) {
    newsName[i].innerHTML = json[i].Name;
    newsDescription[i].innerHTML = json[i].Description;
    newsDate[i].innerHTML = json[i].Date;
    newsLink[i].href = json[i].Link;
  }
  preloader.style.visibility = 'hidden';
  opacityBox()
}

function preloaderActive() {
  preloader.style.visibility = 'visible';
}

function opacityBox(){
  for (let i = 0; i < newsBox.length; i ++){
    newsBox[i].style.opacity = '1'
  }
  
}

function openNews() {
  newsBtn.classList.toggle('active');
  if (newsBtn.classList.contains('active')) {
    newsContent.style.maxHeight = '5000px'
  } else {
    newsContent.style.maxHeight = '0px'
  }
}


newsBtn.addEventListener('click', () => {
  if (!newsBtn.classList.contains('active')) {
    openNews()
    preloaderActive()
    loadNews()
  } else {
    openNews()
  }
})