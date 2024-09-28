let nextButton = document.getElementById('next');
let prevButton = document.getElementById('prev');
let backButton = document.getElementById('back');
let seeMoreButton = document.querySelectorAll('.seeMore');
let carousel = document.querySelector('.carousel');
let listHtml = document.querySelector('.carousel .list');

nextButton.onclick = function () {
    showSlider('next');
}

prevButton.onclick = function () {
    showSlider('prev');
}
// let unAcceptClick;
const showSlider = (type) => {
    // prevButton.style.pointerEvents = 'none';
    // nextButton.style.pointerEvents = 'none';
    carousel.classList.remove('prev', 'next');
    let items = document.querySelectorAll('.carousel .list .item');
    if (type === 'next') {
        listHtml.appendChild(items[0]);
        carousel.classList.add('next');
    } else {
        listHtml.prepend(items[items.length - 1]);
        carousel.classList.add('prev');
    }
    // clearTimeout(unAcceptClick);
    // unAcceptClick = setTimeout(() => {
    //     nextButton.style.pointerEvents = 'auto';
    //     prevButton.style.pointerEvents = 'auto';
    // }, 2000)
}

seeMoreButton.forEach((button) => {
    button.onclick = function () {
        carousel.classList.remove('prev', 'next');
        carousel.classList.add('showDetail')
    }
})

backButton.onclick = function () {
    carousel.classList.remove('showDetail');
}