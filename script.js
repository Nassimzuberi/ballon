const screen = document.getElementsByClassName("screen")[0];
let count = 0;


screen.addEventListener("click", (e) => {
    count += 1;
    if(count == 20) {
        const ballon = Array.from(document.getElementsByClassName("ballon"));
        ballon.map(t => t.classList.add("fall"));
        count = 0;
    }
    const posX = e.clientX;
    const posY = e.clientY;
    const ballon = document.createElement("div");
    ballon.classList.add("ballon");
    ballon.id =  'b' + posX + posY;
    ballon.style.top = posY +"px";
    ballon.style.left = posX + "px"
    screen.appendChild(ballon)
})
