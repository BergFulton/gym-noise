const playBtn = document.getElementById('global-play-btn');
const pauseBtn = document.getElementById('global-pause-btn');
const sounds = document.querySelectorAll('.sound-sample');
const volume = document.querySelectorAll(sounds.volume);
// console.log(sounds);
const volumeSlider = document.querySelectorAll('.vol_slider');
//turn all sounds on
function playSounds() {
   sounds.forEach(sound => sound.play());
  };
  //turn all sounds off
  function pauseSounds() {
    sounds.forEach(sound => sound.pause());
};

function volumeConvert(e){
    var associatedAudioElement = e.target.previousElementSibling;
    var volumeLevel = e.target.value;
    associatedAudioElement.volume = volumeLevel;
}
//allow users to adjust volume on specific sounds
function setVolume(){
    // listen for onChange
    // use something like event.target and pass that through

    // to your function so that you can identify which input was clicked
    // and then figure out a way to associate that input with the audio element
    // then set the audio volume value to the input value
    // sounds.forEach(sound => {
    //     // sound.volume = volumeSlider.value / 100;
    //     // get the value from the input
    //     // set that value to a var
    //     // use that variable to set sound.volume
    //     sound.volume = 
    // })
}

// add an event listener to each input
volumeSlider.forEach((slider) => {
    slider.addEventListener('change', volumeConvert);
});

playBtn.addEventListener('click', playSounds);
pauseBtn.addEventListener('click', pauseSounds);
