const screen = document.getElementsByClassName("screen")[0];


screen.addEventListener("click", (e) => {
    const posX = e.clientX;
    const posY = e.clientY;
    const ballon = document.createElement("div");
    ballon.classList.add("ballon");
    ballon.id =  'b' + posX + posY;
  })
