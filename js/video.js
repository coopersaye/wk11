var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
  video = document.querySelector('video')
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video")
  video.play()
  document.querySelector('#volume').innerHTML = document.querySelector('#slider').value + '%'
});


document.querySelector("#pause").addEventListener("click", function() {
	console.log("In pause")
  video.pause()
})

document.querySelector("#slower").addEventListener("click", function() {
  console.log("In slower")
  video.playbackRate = video.playbackRate * 0.5;
})

document.querySelector("#faster").addEventListener("click", function() {
  console.log("In faster")
  video.playbackRate = video.playbackRate * 2;
})

document.querySelector("#skip").addEventListener("click", function() {
  console.log("In skip")
  video.currentTime = video.currentTime + 15;
  video.loop = true;
})

document.querySelector("#mute").addEventListener("click", function() {
  console.log("In mute")
  if (video.muted) {
    video.muted = false;
    document.querySelector("#mute").innerHTML = 'Mute'
  } else {
    video.muted = true;
    document.querySelector("#mute").innerHTML = 'Unmute'
  }
})

document.querySelector("#slider").addEventListener("change", function(e) {
  volume = e.target.value
  document.querySelector('#volume').innerHTML = volume + '%'
  video.volume = volume / 100
})

document.querySelector("#vintage").addEventListener("click", function() {
  video.classList.add('oldSchool')
})

document.querySelector("#orig").addEventListener("click", function() {
  video.classList.remove('oldSchool')
})
