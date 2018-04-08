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

var preview = document.getElementById("preview");
function up() {
    var start = Date.now();
    var timer = setInterval(function () {
        var timePassed = Date.now() - start;

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

setTimeout(up(),4000);