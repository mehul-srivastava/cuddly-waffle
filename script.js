// define const, let, var 
const lightBulb = document.getElementsByClassName('light-bulb');



// parallax-type effect on header section
document.addEventListener('mousemove', (event) => {
    var xOffset = (event.clientX / 50);
    var yOffset = (event.clientY / 50);
    for(let i = 0; i < lightBulb.length; i++) {
        lightBulb[i].style.setProperty('--offset-x', xOffset+'px');
        lightBulb[i].style.setProperty('--offset-y', yOffset+'px');
    }
});