document.body.insertAdjacentHTML("afterbegin", '<div class="speech-bubble"></div>');

function hoverH1() {
    var h1 = document.querySelector('.hover-stroke');
    h1.classList.add('hover-stroke-hover');
}

function resetH1() {
    var h1 = document.querySelector('.hover-stroke');
    h1.classList.remove('hover-stroke-hover');
}

