(function() {

    var loadProgressBarElement = document.querySelector('#load-progress-bar');

    if (loadProgressBarElement) {
        loadProgressBar();
    }



}())

function loadProgressBar() {

    var customProgressBar = document.createElement('div');

    customProgressBar.className = 'progress-container';
    //FADE IN THE SCROLL BAR 
    customProgressBar.style.opacity = 0;

    customProgressBar.innerHTML = '<div class="progress-bar" id="custom-progress-bar"></div>'

    var canvasContentContainer = document.querySelector('.user_content');
    var firstCanvasContentAreaElement = canvasContentContainer.firstElementChild;

    canvasContentContainer.insertBefore(customProgressBar, firstCanvasContentAreaElement)

    if (document.documentElement.scrollHeight >= document.documentElement.clientHeight) {
        window.onscroll = function() { moveProgressBar() };
        moveProgressBar();
    }
}


function moveProgressBar() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    var scrolled = (winScroll / height) * 100;
    var customProgressBar = document.querySelector('.progress-container');

    if (scrolled > 20) {
        customProgressBar.style.opacity = 'initial';
    } else {
        customProgressBar.style.opacity = 0;
    }

    document.getElementById("custom-progress-bar").style.width = scrolled + "%";
}


console.log('test')