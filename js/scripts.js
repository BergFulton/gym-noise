

function play() {
    const audio = document.getElementById('global-play-btn');
    const secondarySounds = document.getElementsByClassName('secondary-btn');

    const plateRattleSlider = document.getElementById('plate-rattle');
    const plateRattleAudio = document.getElementById('plate-rattle-audio');
    // console.log(plateRattleAudio);

    plateRattleSlider.oninput = handleInput;

    function handleInput(event) {
        console.log(`The field's value is ${event.target.value}.`);
        const volumeLevel = event.target.value;
        plateRattleAudio.volume = (volumeLevel/100).toFixed(2);
        console.log(`plateRattleAudio Volume: ${plateRattleAudio.volume}`);
    }
    
    if (audio.paused) {
        // audio.play();
        // audio.volume = 0.1;
        // audio.value = '10';
        // console.log(audio.volume);
        [...secondarySounds].forEach(sound => {
            sound.play();
            // sound.volume = 0.9;
            // sound.value = '90'; 
            // console.log(sound.volume);
   
        });
    } else{
        audio.pause();
        audio.currentTime = 0;
        [...secondarySounds].forEach(sound => {
            sound.pause();
        });
    }
}

//TODO:
// 1) Add more audio
// 2) Function to turn indivudal sound volumes up and down (look at event.target to figure out which item
//is being effected)
// 3) GLobal slider to make all sound quieter
// 4) Styles
