let page = document.querySelector('.page');
page.classList.remove('loaded')
let tl = gsap.timeline();

tl.from('.header', { y: -200, opacity: 0, });
tl.from('.own-title', { y: -200, opacity: 0, }, "-=0.5");
tl.from('.ceremony', {opacity: 0, });
tl.from('.site', {opacity: 0, });
tl.from('.social', {opacity: 0, });
tl.from('.news', {y: 200, opacity: 0, });
