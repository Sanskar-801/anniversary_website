// Example: Animated gradient background
const body = document.body;
let colors = ["#FF5733", "#33FF57", "#3357FF"];
let currentIndex = 0;

function changeBackground() {
    body.style.background = `linear-gradient(to right, ${colors[currentIndex]}, ${colors[(currentIndex + 1) % colors.length]})`;
    currentIndex = (currentIndex + 1) % colors.length;
}

setInterval(changeBackground, 3000); // Change every 3 seconds
