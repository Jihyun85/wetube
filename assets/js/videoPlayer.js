const videoContainer = document.getElementById("jsVideoPlayer");
// 여러 함수에서 사용하기 위해 let videoPlayer로 해줌(public)
const videoPlayer = videoContainer.querySelector("video");
const playBtn = document.getElementById("jsPlayButton");

function handlePlayClick() {
  if (videoPlayer.paused) {
    videoPlayer.play();
  } else {
    videoPlayer.pause();
  }
}

function init() {
  playBtn.addEventListener("click", handlePlayClick);
}

if (videoContainer) {
  init();
}
