function trail(event) {

    let posX = event.clientX;
    let posY = event.clientY;
    let location = `${posX}, ${posY}`;
    console.log(location);
}

window.addEventListener("mousemove", trail);