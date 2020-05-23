// If the Global Play button is clicked, then play all the sounds, at 50% vol to start

// If a user wants to turn down the sound, then use the slider to set the audio


var audios = document.querySelector('global-play-btn');
var soundsArray = document.querySelectorAll('.slider');

function playAllAudios() {
    console.log('in playAllAudios');
    audios.forEach(function(audio) {
        audio.play();
    });
};

soundsArray.forEach(function(elem) {

    elem.addEventListener('change', function() {
        elem.volume = this.value / 100;
        console.log(elem.volume);
    });
});

var btn = document.getElementById('btn');
document.addEventListener(btn, playAllAudios, false);
btn.click();
