window.onload = () => {
    main();
}
function main() {
    let root = document.getElementById('root');
    let btn = document.getElementById('change-btn');
    let colorCode = document.getElementById('colorCode');
    btn.addEventListener('click', function() {
        let bgColor = generateHEXColor();
        root.style.backgroundColor = bgColor;
        colorCode.value = bgColor;
    });
}

function generateHEXColor() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
}