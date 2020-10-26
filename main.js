window.addEventListener('keydown', function(event){
  const key = document.querySelector(`.key[data-key='${event.keyCode}']`)
  const audio = document.querySelector(`audio[data-key='${event.keyCode}']`)
  if(!audio) return //if we do not have an audio element for that key, stop the function
  audio.currentTime = 0 //rewind key to start so you can play over and over again
  audio.play()
  key.classList.add('playing')
})
