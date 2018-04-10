let preview = document.getElementById("preview");
let body = document.getElementById("body");


function tick() {
    preview.classList.add("hidden-preview");
    body.classList.remove("no-scroll");
    body.classList.add("scroll-body");
}

setTimeout(tick, 3000);


//
// function up() {
//     let start = Date.now();
//     let timer = setInterval(function () {
//         let timePassed = Date.now() - start;
//
//         if (timePassed >= 6000) {
//             clearInterval(timer);
//             mainPage.classList.add("show-main-page");
//             return;
//         }
//
//         draw(timePassed);
//
//     }, 20);
// }
// function draw(timePassed) {
//     preview.style.transform = `translateY(${-timePassed / 1.25}px)`;
// }
//
// setTimeout(up, 3000);
