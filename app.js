let videoStream = function () {
  // DOM Elements
  let canvas = document.querySelector("#canvas"),
    context = canvas.getContext("2d"),
    video = document.querySelector("#video");

  (function deviceSetup() {
    if (navigator.mediaDevices) {
      navigator.mediaDevices
        .getUserMedia({
          video: true,
        })
        .then((stream) => {
          video.srcObject = stream;
          video.play();
        });
    }
  })();

  function drawToCanvas() {
    context.drawImage(video, 0, 0, 640, 480);
  }

  document.getElementById("snap").addEventListener("click", () => {
    drawToCanvas();
  });
};

videoStream();
