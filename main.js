// Add event listener
document.addEventListener("mousemove", parallax);
const elem = document.querySelector("#sqr")
const position = 0.5;

function parallax(event) {
    var width = window.innerWidth/2;
    var height = window.innerHeight/2;
    const x = (width - event.clientX * position) / 90;
    const y = (height - event.clientY * position) / 90;

    elem.style.transform = `translateX(${x}px) translateY(${y}px)`;
}
    

