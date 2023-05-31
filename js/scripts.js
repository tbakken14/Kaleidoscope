const getRandomColor = function () {
    const max = 256;
    const r = Math.floor(Math.random() * max);
    const g = Math.floor(Math.random() * max);
    const b = Math.floor(Math.random() * max);
    const color_value = "rgb(" + r + "," + b + "," + g + ")";
    return color_value;
};

window.onload = function () {
    document.getElementById("change-color").onclick = function () {
        document.body.style.backgroundColor = getRandomColor();
    };

    document.body.style.backgroundColor = getRandomColor();
};