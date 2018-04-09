let preview = document.getElementById("preview");
let currentX = 0;

function tick() {
    preview.classList.add("hidden-preview");
}

// setTimeout(tick, 3000);


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
