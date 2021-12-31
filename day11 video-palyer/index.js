const player = document.querySelector(".player");
const video = player.querySelector(".viewer");
const toggle = player.querySelector(".toggle");
const progress = document.querySelector(".progress");
const progressBar = player.querySelector(".progress__filled");
const skipbutton = player.querySelectorAll("[data-skip]");
const ranges = player.querySelectorAll(".player__slider");
const fullScreen = player.querySelector(".full-screen");

//console.log(skipbutton, player, video, toggle, progress, progressBar, ranges);

function handlerange() {
  //   console.log(this.name, this.value);
  video[this.name] = this.value;
}

function handleprogress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}
function toggleplay() {
  toggle.textContent == "►"
    ? (toggle.innerHTML = "⏸️")
    : (toggle.innerHTML = "►");

  video.paused == true ? video.play() : video.pause();
}
function togglescreen() {
  if (fullScreen.textContent == "❌") {
    fullScreen.innerHTML = "⭕";
    player.classList.add("full_screen");
  } else {
    fullScreen.innerHTML = "❌";
    player.classList.remove("full_screen");
  }
}
function handleprogress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}

function skip() {
  //   console.log(this.dataset.skip);
  video.currentTime += parseFloat(this.dataset.skip);
}

function scrub(e) {
  const scrubtime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubtime;
}
// for volume and playback button
ranges.forEach((range) => range.addEventListener("change", handlerange));
ranges.forEach((range) => range.addEventListener("mousemove", handlerange));
// for play and pause option
toggle.addEventListener("click", toggleplay);
video.addEventListener("click", toggleplay);
// for progress bar
video.addEventListener("timeupdate", handleprogress);
// for skip button
skipbutton.forEach(function (button) {
  button.addEventListener("click", skip);
});

fullScreen.addEventListener("click", togglescreen);

progress.addEventListener("click", scrub);
progress.addEventListener("change", scrub);
