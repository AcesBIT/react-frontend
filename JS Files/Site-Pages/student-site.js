//Circular Progess Bar animation
let number = document.getElementById("precentage");

let counter = 0;

setInterval(() => {
    if(counter == 80)
        clearInterval();
    else {
        counter += 1;
        document.getElementById("percentage").innerHTML = ++counter + "%";
    }
}, 50);

// Percentage value and stroke-dashoffset in keyframes will be affected by the data