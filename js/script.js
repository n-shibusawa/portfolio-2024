'use script';
// opening

// 空画像変更
const nowTime = new Date().getHours();
const sky = document.querySelector('.bg-img_sky');
if(nowTime > 18 || nowTime < 5) {
    sky.classList.add('night');
}else if(nowTime > 16) {
    sky.classList.add('evening');
}else if(nowTime >= 5) {
    sky.classList.add('morning');
}

// キャラ画像変更
const girl = document.querySelector('.parts-img_girl img');
if(nowTime > 20 || nowTime < 6) {
    girl.src = 'img/parts_girl-sleep.png';
}else {
    girl.src = 'img/parts_girl-popular.png';
}

// cursorStoker
const stalker = document.querySelector('.parts-img_girl');
const stalkerImg = stalker.getElementsByTagName('img');
let stalkerDisplay = true;
document.addEventListener('mousemove', function (e) {
    if(stalkerDisplay == true) {
        let mouseX   = e.clientX,
	    windowX = window.innerWidth;
		direction = (windowX / 2) < mouseX ? 'right' : 'left';
        if(direction == 'left') {
            stalkerImg[0].classList.remove('right');
        } else {
            stalkerImg[0].classList.add('right');
        }
        stalker.style.right = 'calc(100vw + -' + mouseX + 'px - 5%)';
    }
});

// home→work画面移行
const workBtn = document.querySelector('.nav_menu_work');
const container = document.querySelector('.container');
const nav = document.querySelector('.nav');
function workClick() {
    stalkerDisplay = false;
    nav.classList.add('none');
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
        nav.classList.remove('none');
        stalkerDisplay = true;
    }, "5000");
}