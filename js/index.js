


let newsBtn = document.querySelector('.news__title');
let newsContent = document.querySelector('.news__content');
let preloader = document.querySelector('.news__preloader');



async function createElem() {
  let url = `./files/news.json`
  let response = await fetch(url)
  let json = await response.json();

  for (let i = 0; i < json.length; i++) {
    let box = document.createElement("div");
    box.className = 'news__box';
    let h3 = document.createElement("h3");
    h3.className = 'news__name';
    let p = document.createElement("p");
    p.className = "news__description";
    let details = document.createElement("div");
    details.className = 'news__details';
    let date = document.createElement('div');
    date.className = 'news__date';
    let link = document.createElement('a');
    link.className = 'news__link';



    details.appendChild(date)
    details.appendChild(link)
    box.appendChild(h3)
    box.appendChild(p)
    box.appendChild(details)

    newsContent.appendChild(box);

  }
}

createElem()

async function loadNews() {

  let url = `./files/news.json`
  let response = await fetch(url)
  let json = await response.json();

  let newsName = document.querySelectorAll('.news__name');
  let newsDescription = document.querySelectorAll('.news__description');
  let newsDate = document.querySelectorAll('.news__date');
  let newsLink = document.querySelectorAll('.news__link');

  for (let i = 0; i < json.length; i++) {
    newsName[i].innerHTML = json[i].Name;
    newsDescription[i].innerHTML = json[i].Description;
    newsDate[i].innerHTML = json[i].Date;
    newsLink[i].href = json[i].Link;
    newsLink[i].textContent = "читать далее";
  }
  preloader.style.visibility = 'hidden';
  newsContent.style.maxHeight = 'fit-content'
  opacityBox()
}

function preloaderActive() {
  preloader.style.visibility = 'visible';
}

function opacityBox() {
  let newsBox = document.querySelectorAll('.news__box');
  for (let i = 0; i < newsBox.length; i++) {
    newsBox[i].style.opacity = '1'
  }

}

function openNews() {
  newsBtn.classList.toggle('active');
  if (newsBtn.classList.contains('active')) {
    newsContent.style.maxHeight = '200px'
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