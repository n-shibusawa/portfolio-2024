// opening

// cursorStoker
const stalker = document.getElementsByClassName('parts-img_girl');
document.addEventListener('mousemove', function (e) {
    stalker[0].style.right = 'calc(100vw + -' + e.clientX + 'px - 5%)';
});

// work画面移行
const workBtn = document.getElementsByClassName('nav_menu_work');
const container = document.getElementsByClassName('container');
function workClick() {
    stalker[0].style.right = 'calc(120vw)';
    setTimeout(() => {
        container[0].style.right = '-100vw';
        stalker[0].style.display = 'none';
    }, "2000");
}