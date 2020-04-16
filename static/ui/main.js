function toggleMainMenu() {
    var nav = document.getElementById("menu");
    var tbar = document.getElementById("topbar");
    if (nav.style.display === "block") {
        nav.style.display = "none";
        tbar.classList.toggle("scrolled");
    } else {
        nav.style.display = "block";
        tbar.classList.toggle("scrolled");
    }
}

window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (currentScrollPos == 0) {
        document.getElementById("topbar").classList.remove("scrolled");
    } else {
        document.getElementById("topbar").classList.add("scrolled");
    }
} 