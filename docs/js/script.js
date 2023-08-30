
    fetch('navbar.html')
    .then(response => response.text())
    .then(navbarHTML => {
    document.getElementById('navbar-placeholder').innerHTML = navbarHTML;
});
