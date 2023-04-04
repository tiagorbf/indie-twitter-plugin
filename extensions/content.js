document.addEventListener("DOMContentLoaded", function(event) {
    // only run the code after 2 seconds
    setTimeout(function() {
        const header = document.querySelector('h1[role="heading"]');
        header.innerHTML = '<img width="55px" src="https://abs.twimg.com/icons/apple-touch-icon-192x192.png">';
    }, 2000);
});
