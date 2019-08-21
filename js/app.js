window.onload = function(event) {
    var navButton = document.getElementById("nav-button");
    navButton.addEventListener("click", toggleMenu);

    function toggleMenu(event) {
        var navigation = document.getElementById("nav-list");
        navigation.classList.toggle("nav-open");
    }
};