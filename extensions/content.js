document.addEventListener("DOMContentLoaded", function(event) {
    setTimeout(function() {
        const header = document.querySelector('h1[role="heading"]');
        header.innerHTML = `<img width="50px" style="margin-top: 20px; margin-left:10px" src="${chrome.runtime.getURL("icon.png")}">`;
    }, 2000);
});
