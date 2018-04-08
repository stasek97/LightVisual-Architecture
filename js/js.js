function hidePreview(){
    let preview = document.getElementById("preview");
    let mainPage = document.getElementById("main-page");

    preview.classList.add("hidden-preview");
    mainPage.classList.add("show-main-page");
    mainPage.classList.remove("main-page");
}