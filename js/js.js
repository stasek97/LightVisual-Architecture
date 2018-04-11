let preview = document.getElementById("preview");
let body = document.getElementById("body");

checkSession();

function tick() {
        preview.classList.add("hidden-preview");
        body.classList.remove("no-scroll");
        body.classList.add("scroll-body");
        setSession();
}

function checkSession(){
    if(!sessionStorage.hasOwnProperty("visited")){
        setTimeout(tick, 3000);
    } else {
        preview.style.display = "none";
        body.classList.remove("no-scroll");
        body.classList.add("scroll-body");
    }
}

function setSession(){
    sessionStorage.setItem("visited", 'true');
}

