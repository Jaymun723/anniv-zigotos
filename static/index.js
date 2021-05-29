const sardocheAudio = new Audio("/sardoche.mp3")
const continuerAudio = new Audio("/continuer.mp3")
let socket

const setupBtn = document.getElementById("setup")
setupBtn.addEventListener("click", () => {
  // sardocheAudio.play()
  setupBtn.remove()
  socket = io()

  socket.on("sardoche", () => {
    sardocheAudio.play()
  })
  socket.on("continuer", () => {
    continuerAudio.play()
  })
})

const unlockBtn = document.getElementById("unlock")
const unlock = () => {
  location.href = "https://discord.gg/AemgfJeQJp"
}
unlockBtn.addEventListener("touchend", unlock)
unlockBtn.addEventListener("mouseup", unlock)
