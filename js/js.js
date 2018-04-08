//
// function animation(){
//     var preview = document.getElementById("preview");
//     var mainPage = document.getElementById("main-page");
//
//     preview.classList.add("hidden-preview");
//     mainPage.classList.add("show-main-page");
//     mainPage.classList.remove("main-page");
// }
//
// animation();

let preview = document.getElementById("preview");
function up() {
    let start = Date.now();
    let timer = setInterval(function () {
        let timePassed = Date.now() - start;

        if (timePassed >= 6000) {
            clearInterval(timer);
            return;
        }

        draw(timePassed);

    }, 20);
}
function draw(timePassed) {
    preview.style.bottom = timePassed / 1.25 + 'px';
}

setTimeout(up, 3000);