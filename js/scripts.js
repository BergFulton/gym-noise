

function play() {
    const audio = document.getElementById('global-play-btn');
    const secondarySounds = document.getElementsByClassName('secondary-btn');
    if (audio.paused) {
        audio.play();
        [...secondarySounds].forEach(sound => {
            sound.play();     
        });
    } else{
        audio.pause();
        audio.currentTime = 0;
        [...secondarySounds].forEach(sound => {
            sound.pause();     
        });
    }
}

//Increase & decrease volume
