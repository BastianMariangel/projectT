
    // Fetch the contents of the navbar.html file
    fetch('navbar.html')
    .then(response => response.text())
    .then(navbarHTML => {
    // Inject the navbar HTML into the designated element
    document.getElementById('navbar-placeholder').innerHTML = navbarHTML;
});
