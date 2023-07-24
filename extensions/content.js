function replaceDogeHeaderLogo() {
    setTimeout(function() {
        const header = document.querySelector('h1[role="heading"]');
        header.innerHTML = `<img width="50px" style="margin-top: 20px; margin-left:10px" src="${chrome.runtime.getURL("icon.png")}">`;
    }, 2000);
}

function replaceDogeLoadingLogo() {
    for(let i = 0; i < 1000; i++) {
        const loading = document.getElementById('placeholder');
        if(loading){
            loading.innerHTML = `<img width="50px" style="margin-top: 20px; margin-left:10px" src="${chrome.runtime.getURL("icon.png")}">`;
        }
    }
}


document.addEventListener("DOMContentLoaded", function(event) {
    replaceDogeLoadingLogo()
    replaceDogeHeaderLogo()
});
