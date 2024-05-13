'use script';

// opening
const nav = document.querySelector('.nav');
const stalker = document.querySelector('.parts-img_girl');
window.addEventListener('load', function () {
    window.scroll({
        top: 0,
        behavior: "smooth",
    });
    stalkerDisplay = false;
    setTimeout(() => {
        nav.classList.toggle('nav-active');
        stalker.style.right = '10%';
    }, "4000");
    setTimeout(() => {
        stalkerDisplay = true;
    }, "5000");
});

// 空画像変更
const nowTime = new Date().getHours();
const sky = document.querySelector('.bg-img_sky');
if(nowTime > 18 || nowTime < 5) {
    sky.classList.add('night');
}else if(nowTime >= 16) {
    sky.classList.add('evening');
}else if(nowTime >= 5) {
    sky.classList.add('morning');
};

// キャラ画像変更
const girl = document.querySelector('.parts-img_girl img');
function sleep() {
    if(nowTime >= 22 || 6 >= nowTime) {
        girl.src = 'img/parts_girl-sleep.png';
    }else {
        girl.src = 'img/parts_girl-popular.png';
    }
};
sleep();

// cursorStoker
const stalkerImg = stalker.querySelector('img');
let stalkerDisplay = true;
document.addEventListener('mousemove', function (e) {
    if(stalkerDisplay == true) {
        let mouseX   = e.clientX,
	    windowX = window.innerWidth;
		direction = (windowX / 2) < mouseX ? 'right' : 'left';
        if(direction == 'left') {
            stalkerImg.classList.remove('right');
        } else {
            stalkerImg.classList.add('right');
        }
        stalker.style.right = 'calc(100vw + -' + mouseX + 'px - 5%)';
    }
});

// nav表示切り替え
function navNone() {
    nav.classList.toggle('nav-active');
    setTimeout(() => {
        nav.classList.toggle('none');
        nav.classList.toggle('show');
    }, "1000");
};

function navDisplay() {
    nav.classList.toggle('none');
    nav.classList.toggle('show');
    setTimeout(() => {
        nav.classList.toggle('nav-active');
    }, "1000");
};

// 共通about画面移行
const body = document.querySelector('body');
const container = document.querySelector('.container');
const aboutBtn = document.querySelector('.nav_menu_about');
const about =document.querySelector('.about');

function aboutClickToggle() {
    about.classList.toggle('active');
    body.classList.toggle('about-active');
    container.classList.toggle('about-area');
};

// home→about画面移行
function aboutClick() {
    stalkerDisplay = false;
    navNone();
    stalker.style.right = 'calc(44vw)';
    setTimeout(() => {
        stalker.querySelector('img').src = 'img/parts_girl-about1.png';
        stalker.classList.toggle('anime-walk');
    }, "2500");
    setTimeout(() => {
        stalker.querySelector('img').src = 'img/parts_girl-about2.png';
    }, "3500");
    setTimeout(() => {
        aboutClickToggle();
    }, "4500");
};

// about→home画面移行
function backAboutClick() {
    window.scroll({
        top: 0,
        behavior: "smooth",
    });
    aboutClickToggle();
    setTimeout(() => {
        stalker.querySelector('img').src = 'img/parts_girl-about2.png';
    }, "1000");
    setTimeout(() => {
        stalker.querySelector('img').src = 'img/parts_girl-about1.png';
    }, "2000");
    setTimeout(() => {
        sleep();
        stalker.classList.toggle('anime-walk');
        stalkerDisplay = true;
        navDisplay();
    }, "3000");
};


// home→work画面移行
const workBtn = document.querySelector('.nav_menu_work');
const slider = document.querySelector('.swiper');
function workClick() {
    stalkerDisplay = false;
    navNone();
    stalker.style.right = 'calc(120vw)';
    setTimeout(() => {
        container.classList.add('work-area');
        stalker.style.display = 'none';
    }, "2000");
    setTimeout(() => {
        slider.classList.toggle('none');
        slider.classList.toggle('show');
    }, "3500");
};

// work→home画面移行
const backWorkBtn = document.querySelector('.back_work');
function backWorkClick() {
    container.classList.remove('work-area');
    slider.classList.toggle('none');
    slider.classList.toggle('show');
    setTimeout(() => {
        stalker.style.display = 'block';
        stalkerImg.classList.add('right');
    }, "3000");
    setTimeout(() => {
        stalker.style.right = 'calc(45vw)';
        navDisplay();
        stalkerDisplay = true;
    }, "3500");
};

//swiper
const workSwiper = new Swiper('.swiper', {
    direction: "vertical",
    spaceBetween: 32,
    slidesPerView: 1.3,
    watchSlidesProgress: true,
    loop: true,
    loopAdditionalSlides: 1,
    centeredSlides: true,
    speed: 1000,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});