let btn = document.getElementById('btn');


btn.addEventListener('click', function () {
    var red = Math.floor(Math.random() * 255);
    var green = Math.floor(Math.random() * 255);
    var blue = Math.floor(Math.random() * 255);
    var colors = `rgba(${red},${green},${blue})`;
    document.body.style.backgroundColor = colors;
    console.log(colors)

})