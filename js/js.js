let preview = document.getElementById("preview");
let mainPage = document.getElementById("main-page");
let currentX = 0;

function tick() {
    currentX -= 5;

    preview.style.transform = `translateY(${currentX}vh)`;

    if(currentX >= -115){
        requestAnimationFrame(tick);
    }
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
