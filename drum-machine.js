
function playAudio(e){
    //console.log(e.keyCode);
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    //console.log(audio);
    if(!audio) return;
    audio.currentTime = 0;  //rewind to the start (fast fingers)
    audio.play();
    key.classList.add('playing');
}

function removeTransition(e){
    if(e.propertyName !== 'transform') return;  //si no es transform, chau
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playAudio);
  