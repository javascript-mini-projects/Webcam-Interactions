// DOM Elements
let canvas = document.querySelector("#canvas"),
  context = canvas.getContext("2d"),
  video = document.querySelector("#video");

if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
  navigator.mediaDevices
    .getUserMedia({
      video: true,
    })
    .then((stream) => {
      video.srcObject = stream;
      video.play();
    });
}

document.getElementById("snap").addEventListener("click", () => {
  context.drawImage(video, 0, 0, 640, 480);
});
