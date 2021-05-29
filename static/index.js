const sardocheAudio = new Audio("/sardoche.mp3")
const continuerAudio = new Audio("/continuer.mp3")
const videoEl = document.getElementById("video")
const unlockBtn = document.getElementById("unlock")

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

const unlock = () => {
  videoEl.style.display = "block"
  videoEl.requestFullscreen()
}
unlockBtn.addEventListener("touchend", unlock)
unlockBtn.addEventListener("mouseup", unlock)

videoEl.addEventListener("ended", () => {
  setTimeout(() => {
    location.href = "https://discord.gg/AemgfJeQJp"
  }, 2000)
})
