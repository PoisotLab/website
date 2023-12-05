function toggleMainMenu() {
    var nav = document.getElementById("menu");
    var tbar = document.getElementById("topbar");
    var currentScrollPos = window.pageYOffset;
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
    var currentScrollPos = window.pageYOffset;
    if (currentScrollPos == 0) {
        document.getElementById("topbar").classList.remove("scrolled");
        document.getElementById("logo-navbar").src="logo/colour-black.png";
    } else {
        document.getElementById("topbar").classList.add("scrolled");
        document.getElementById("logo-navbar").src="logo/colour-black.png";
    }
} 

function changeSplashImage() {
    var nImages = 8;
    var num = Math.ceil( Math.random() * nImages );
    var img = 'backgrounds/'+num+'.jpg';
    document.body.style.backgroundImage = "url('" + img + "')";
}