setInterval(function trail(event) {

    let posX = event.clientX;
    let posY = event.clientY;
    let mouseLocation = `${posX}, ${posY}`;
    console.log(mouseLocation);
}, 2)



window.addEventListener("mousemove", trail);