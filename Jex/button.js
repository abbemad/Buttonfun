var audio, playbutton, multiply;

    function initAudioPlayer(){
        audio = new Audio();
        audio.src = "audio/song.mp3";
        audio.loop = true;
        audio.play();

    playbutton = document.getElementById("playpausebutton");

    playbutton.addEventListener("click",playpause);

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

    function multiply(){
        if (playpause(){

            }
        }
    }
}

window.addEventListener("load", initAudioPlayer);