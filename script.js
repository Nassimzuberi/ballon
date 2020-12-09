const screen = document.getElementsByClassName("screen")[0];
let count = 0;
let ray = 0;

function getRandomInt(min, max){
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random()*(max-min))+min;
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }


screen.addEventListener("click", (e) => {
    count += 1;
    ray = getRandomInt(10, 150);
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
    ballon.style.left = posX + "px";
    ballon.style.height = ray + "px";
    ballon.style.width = ray + "px";
    ballon.style.background = getRandomColor();
    screen.appendChild(ballon)
})
