const screen = document.getElementsByClassName("screen")[0];
let count = 0;


screen.addEventListener("click", (e) => {
    count += 1;
    if(count == 20) {
        const ballon = Array.from(document.getElementsByClassName("ballon"));
        ballon.map(t => {
                t.classList.add("fall");
                setTimeout(() => screen.removeChild(t), 1000)
        });
        count = 0;
    }
    const posX = e.clientX;
    const posY = e.clientY;
    const ballon = document.createElement("div");
    ballon.classList.add("ballon");
    screen.appendChild(ballon)
    ballon.style.top = (posY - ballon.offsetWidth/2) +"px";
    ballon.style.left =(posX - ballon.offsetWidth/2) + "px"
})
