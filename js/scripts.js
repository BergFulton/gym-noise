// var volumeControl = document.getElementsByClassName('slider');
// console.log(volumeControl);

// volumeControl.forEach.addEventListener('change', function() {
// });

var audios = document.querySelectorAll('audio');
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
