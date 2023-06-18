// Get the video element and player controls
const video = document.querySelector('.player__video');
const playButton = document.querySelector('.player__button');
const volumeSlider = document.querySelector('.player__slider[name="volume"]');
const speedSlider = document.querySelector('.player__slider[name="playbackRate"]');
const progressBar = document.querySelector('.progress__filled');
const skipButtons = document.querySelectorAll('.player__button[data-skip]');

// Play or pause the video when the play button is clicked
playButton.addEventListener('click', togglePlay);

// Update the play button icon based on the video playback status
video.addEventListener('play', updatePlayButtonIcon);
video.addEventListener('pause', updatePlayButtonIcon);

// Update the volume and playback speed when the corresponding sliders change
volumeSlider.addEventListener('input', updateVolume);
speedSlider.addEventListener('input', updatePlaybackSpeed);

// Skip the video forward or backward when the skip buttons are clicked
skipButtons.forEach(button => {
  button.addEventListener('click', skipVideo);
});

// Update the video progress bar as the video plays
video.addEventListener('timeupdate', updateProgressBar);

// Handle clicking on the progress bar to seek the video
progressBar.parentNode.addEventListener('click', seekVideo);

// Toggle play or pause of the video
function togglePlay() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

// Update the play button icon based on the video playback status
function updatePlayButtonIcon() {
  playButton.textContent = video.paused ? '►' : '❚ ❚';
}

// Update the volume of the video
function updateVolume() {
  video.volume = volumeSlider.value;
}

// Update the playback speed of the video
function updatePlaybackSpeed() {
  video.playbackRate = speedSlider.value;
}

// Skip the video forward or backward
function skipVideo() {
  const skipSeconds = parseFloat(this.dataset.skip);
  video.currentTime += skipSeconds;
}

// Update the video progress bar
function updateProgressBar() {
  const progress = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${progress}%`;
}

// Seek the video to a specific time
function seekVideo(event) {
  const seekTime = (event.offsetX / progressBar.parentNode.offsetWidth) * video.duration;
  video.currentTime = seekTime;
}

    inputs.forEach(input => input.addEventListener('change', handleUpdate));
    inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
