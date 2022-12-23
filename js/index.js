


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
    h3.innerHTML = json[i].Name;
    let p = document.createElement("p");
    p.className = "news__description";
    p.innerHTML = json[i].Description;
    let details = document.createElement("div");
    details.className = 'news__details';
    let date = document.createElement('div');
    date.className = 'news__date';
    date.innerHTML = json[i].Date;
    let link = document.createElement('a');
    link.className = 'news__link';
    link.href = json[i].Link;
    link.textContent = 'читать далее';



    details.appendChild(date)
    details.appendChild(link)
    box.appendChild(h3)
    box.appendChild(p)
    box.appendChild(details)

    newsContent.appendChild(box);

    preloader.style.visibility = 'hidden';
    newsContent.style.maxHeight = 'fit-content'
    opacityBox()

  }
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
    createElem()
  } else {
    openNews()
  }
})