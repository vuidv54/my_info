const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const arrowLeft = $('.arrow-left');
const arrowRight = $('.arrow-right');

const listAuthor = $$('.slide-main-item');
const listDot = $$('.slide-dot-item');

const infoItems = $$('.info-item');
const contentItems = $$('.content-item');

let currentIndex = 0;

arrowLeft.onclick = function () {
    getCurrentIndex();
    backSlide();
}

arrowRight.onclick = function () {
    getCurrentIndex();
    nextSlide();
}

for (let Dot of listDot) {
    Dot.onclick = function () {
        getCurrentIndex();
        listDot[currentIndex].classList.remove('slide-dot-item--active');
        listAuthor[currentIndex].classList.remove('slide-main-item--active');
        this.classList.add('slide-dot-item--active');
        getCurrentIndex();
        listAuthor[currentIndex].classList.add('slide-main-item--active');
    }
}

function backSlide() {
    listAuthor[currentIndex].classList.remove('slide-main-item--active');
    listDot[currentIndex].classList.remove('slide-dot-item--active');
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = listAuthor.length - 1;
    }
    listAuthor[currentIndex].classList.add('slide-main-item--active');
    listDot[currentIndex].classList.add('slide-dot-item--active');

}

function nextSlide() {
    listAuthor[currentIndex].classList.remove('slide-main-item--active');
    listDot[currentIndex].classList.remove('slide-dot-item--active');
    currentIndex++;
    if (currentIndex > listAuthor.length - 1) {
        currentIndex = 0;
    }
    listAuthor[currentIndex].classList.add('slide-main-item--active');
    listDot[currentIndex].classList.add('slide-dot-item--active');
}

function getCurrentIndex() {
    Array.from(listDot).filter(function (dot, index) {
        if (dot.classList.contains('slide-dot-item--active')) {
            currentIndex = index;
        };
    })
}

setInterval(function () {
    getCurrentIndex();
    nextSlide();
}, 5000)


const loading = document.querySelector('.loading')
setTimeout(function () {
    loading.classList.remove('active')
}, 3000)

function getInfoIndex() {
    let i
    Array.from(infoItems).forEach(function (infoItem, index) {
        if(infoItem.classList.contains('active')) {
            i = index
        }
    })
    return i
}

function handleClickInfo() {
    for( let i = 0; i < infoItems.length; i++ ) {
    let index = getInfoIndex();
        infoItems[i].onclick = function () {
            let index = getInfoIndex();
            infoItems[index].classList.remove('active');
            infoItems[i].classList.add('active');
            contentItems[index].classList.remove('active');
            contentItems[i].classList.add('active');
        }
    }
}

handleClickInfo();