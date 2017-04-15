var audio, playbutton, replaybutton;
// function for song playing
function initAudioPlayer(){
    audio = new Audio();
    audio.src = "audio/song.mp3";
    audio.loop = true;
    audio.play();

    // object control
    playbutton = document.getElementById("playpausebutton");

    // add event
    playbutton.addEventListener("click",playpause);

    //function
    function playpause(){
        if(audio.paused) {
            audio.play();
            playbutton.style.background = "url(images/start.png) no-repeat";
        }
        else{
            audio.pause();
            playbutton.style.background = "url(images/pause.png) no-repeat";
        }
    }
}
window.addEventListener("load", initAudioPlayer);