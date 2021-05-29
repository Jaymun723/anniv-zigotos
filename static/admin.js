const socket = io()

const sardocheBtn = document.getElementById("sardoche")

sardocheBtn.addEventListener("click", () => {
  socket.emit("sardoche")
})

const continuerBtn = document.getElementById("continuer")

continuerBtn.addEventListener("click", () => {
  socket.emit("continuer")
})
