window.onload = () => {
    main();
}
function main() {
    let root = document.getElementById('root');
    let btn = document.getElementById('change-btn');
    let colorCode = document.getElementById('colorCode');
    let copyBtn = document.getElementById('copy-btn');
    btn.addEventListener('click', function() {
        let bgColor = generateHEXColor();
        root.style.backgroundColor = bgColor;
        colorCode.value = bgColor;
    });
    copyBtn.addEventListener('click', function() {
        window.navigator.clipboard.writeText(colorCode.value);
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })
          
          Toast.fire({
            icon: 'success',
            title: ` ${colorCode.value} Copied Successfully!`
          })
    });
}

function generateHEXColor() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
}