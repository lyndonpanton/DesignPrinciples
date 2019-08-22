window.onload = function(event) {
    var navButton = document.getElementById("nav-button");
    navButton.addEventListener("click", toggleMenu);

    var copyrightYear = document.getElementById("copyright-year");
    copyrightYear.textContent = (new Date()).getFullYear();

    function toggleMenu(event) {
        var navigation = document.getElementById("nav-list");
        navigation.classList.toggle("nav-open");
    }
};