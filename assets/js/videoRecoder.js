const recordContainer = document.getElementById("jsRecordContainer");
const recordBtn = document.getElementById("jsRecordBtn");
const videoPreview = document.getElementById("jsVideoPreview");

const startRecording = async () => {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      audio: true,
      video: true,
    });
    console.log(stream);
  } catch (error) {
    recordBtn.innerHTML = "😢 Cant record";
    recordBtn.removeEventListener("click", startRecording); // 접근 못하게 막으면 시도할 이유가 x
  }
};

function init() {
  recordBtn.addEventListener("click", startRecording);
}

if (recordContainer) {
  init();
}
