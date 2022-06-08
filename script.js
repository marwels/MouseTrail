function trail(event) {

    let posX = event.clientX;
    let posY = event.clientY;
    let mouseLocation = `${posX}, ${posY}`;
    console.log(mouseLocation);


    let dot = document.createElement("div");
    document.getElementById("body").appendChild(dot);
    dot.classList.add("dot");
    dot.style.backgroundColor = "rgb(" + Math.random(0, 256) + "," + Math.random(0, 256) + "," + Math.random(0, 256) + ");";
    let randomForSize = Math.random(10, 30);
    dot.style.height = randomForSize + "px";
    dot.style.width = randomForSize + "px";
    let range = 20;
    dot.style.left = Math.random(posX - range - randomForSize, posX + range) + "px;";
    dot.style.top = Math.random(posY - range - randomForSize, posY + range) + "px;";
}


window.addEventListener("mousemove", trail);