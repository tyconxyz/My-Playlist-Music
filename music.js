const audio = new Audio("scott street.mp3")
const tombol = document.getElementById("PlayScott")

const PlayMusic = () => {
    audio.play();
    audio.paused();
}

