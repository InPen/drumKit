window.addEventListener('keydown', function(event){
  const audio = document.querySelector(`audio[data-key='${event.keyCode}']`)
  if(!audio) return //if we do not have an audio element for that key, stop the function
  audio.play()
  console.log(audio)
})
