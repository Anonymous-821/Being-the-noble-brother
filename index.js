var audio = new Audio("Darling.mp3");
const playButton = document.getElementById('playButton');
const pauseButton = document.getElementById('pauseButton');
playButton.addEventListener("click", () => {
    audio.play();
    playButton.style.display = 'none';
    pauseButton.style.display = 'block';
});
pauseButton.addEventListener("click", () =>{
    audio.pause();
    playButton.style.display = 'block';
    pauseButton.style.display = 'none'; 
});
