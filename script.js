//set timeout


function trail(event) {

    let posX = event.clientX;
    let posY = event.clientY;
    let mouseLocation = `${posX}, ${posY}`;
    console.log(mouseLocation);


    let dot = document.createElement("div");
    document.getElementById("body").appendChild(dot);
    dot.style.backgroundColor = "rgb(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + ")";
    let randomForSize = Math.random() * 20 + 10;
    dot.style.height = randomForSize + "px";
    dot.style.width = randomForSize + "px";
    let range = 20;
    dot.style.left = (posX + (Math.random() - 0.5) * range) + "px";
    dot.style.top = (posY + (Math.random() - 0.5) * range) + "px";
    dot.classList.add("dot",);
}

function blank() {
    let dots = document.querySelectorAll(".dot");
    dots.forEach(dot => {
        dot.remove();
    });

}

window.addEventListener("mousemove", trail);
window.addEventListener("click", blank)