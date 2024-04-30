'use script';

// opening
const nav = document.querySelector('.nav');
const titleBox = document.querySelector('.logo');
const title = titleBox.querySelector('h1');
const stalker = document.querySelector('.parts-img_girl');
window.addEventListener('load', function () {
    stalkerDisplay = false;
    title.classList.toggle('none');
    title.classList.toggle('show');
    setTimeout(() => {
        title.classList.toggle('none');
        title.classList.toggle('show');
    }, "2000");
    setTimeout(() => {
        titleBox.classList.toggle('logo-none');
    }, "3000");
    setTimeout(() => {
        nav.classList.toggle('nav-active');
        stalker.style.right = '10%';
    }, "4000");
    setTimeout(() => {
        stalkerDisplay = true;
        title.classList.toggle('none');
        title.classList.toggle('show');
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
}

// キャラ画像変更
const girl = document.querySelector('.parts-img_girl img');
if(nowTime >= 22 || 6 >= nowTime) {
    girl.src = 'img/parts_girl-sleep.png';
}else {
    girl.src = 'img/parts_girl-popular.png';
}

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
}

// home→about画面移行
function aboutClick() {
    stalkerDisplay = false;
    navNone();
    stalker.style.right = 'calc(44vw)';
    setTimeout(() => {
        stalker.querySelector('img').src = 'img/parts_girl-about1.png';
        stalker.classList.toggle('anime-walk');
    }, "3000");
    setTimeout(() => {
        stalker.querySelector('img').src = 'img/parts_girl-about2.png';
    }, "4000");
    setTimeout(() => {
        aboutClickToggle();
    }, "5000");
}

// about→home画面移行
function backAboutClick() {
    aboutClickToggle();
    setTimeout(() => {
        stalker.querySelector('img').src = 'img/parts_girl-about2.png';
    }, "1000");
    setTimeout(() => {
        stalker.querySelector('img').src = 'img/parts_girl-about1.png';
    }, "2000");
    setTimeout(() => {
        stalker.querySelector('img').src = 'img/parts_girl-popular.png';
        stalker.classList.toggle('anime-walk');
        stalkerDisplay = true;
        navDisplay();
    }, "3000");
}


// home→work画面移行
const workBtn = document.querySelector('.nav_menu_work');
function workClick() {
    stalkerDisplay = false;
    navNone();
    stalker.style.right = 'calc(120vw)';
    setTimeout(() => {
        container.classList.add('work-area');
        stalker.style.display = 'none';
    }, "2000");
}

// work→home画面移行
const backWorkBtn = document.querySelector('.back_work');

function backWorkClick() {
    container.classList.remove('work-area');
    setTimeout(() => {
        stalker.style.display = 'block';
        stalkerImg[0].classList.add('right');
    }, "3000");
    setTimeout(() => {
        stalker.style.right = 'calc(45vw)';
        navDisplay();
        stalkerDisplay = true;
    }, "5000");
}