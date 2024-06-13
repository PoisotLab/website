function toggleMainMenu() {
    var nav = document.getElementById("menu");
    var tbar = document.getElementById("topbar");
    var currentScrollPos = window.scrollY;
    if (nav.style.display === "block") {
        nav.style.display = "none";
        if (tbar.classList.contains("scrolled")) {
            tbar.classList.remove("scrolled");
        }
    } else {
        nav.style.display = "block";
        if (!(tbar.classList.contains("scrolled"))) {
            tbar.classList.add("scrolled");
        }
    }
    if (currentScrollPos != 0) {
        document.getElementById("topbar").classList.add("scrolled");
        document.getElementById("logo-navbar").src="logo/colour-black.png";
    }
}

window.onscroll = function () {
    var currentScrollPos = window.scrollY;
    if (currentScrollPos == 0) {
        document.getElementById("topbar").classList.remove("scrolled");
        document.getElementById("logo-navbar").src="logo/colour-black.png";
    } else {
        document.getElementById("topbar").classList.add("scrolled");
        document.getElementById("logo-navbar").src="logo/colour-black.png";
    }
}