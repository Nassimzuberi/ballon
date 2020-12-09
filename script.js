const screen = document.getElementsByClassName("screen")[0];
let count = 0;

screen.addEventListener("click", (e) => {
    count += 1;
    const ballon = document.getElementsByClassName("ballon")[0];
    fall(ballon)
    if(count == 20) {
        const ballon = Array.from(document.getElementsByClassName("ballon"));
        ballon.map(t => t.classList.add("fall"));
        count = 0;
    }
    const posX = e.clientX;
    const posY = e.clientY;
})

function fall(div) {
    console.log( div.style.width )
    div.style.top = "calc(98% - " + div.style.height + "px)"
}