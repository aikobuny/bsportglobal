// Glowing 3 bar
var glow = false;
setInterval(()=>{
    let element = document.getElementsByClassName('navbar-toggler-icon')[0];
    if (glow) {
        element.classList.remove('glow-white');
    } else {
        element.classList.add('glow-white');
    }
    glow = !glow;
}, 1000)