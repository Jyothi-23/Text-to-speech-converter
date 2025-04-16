let text = document.getElementById("txt");
let submitBtn = document.getElementById("submit");
let clearBtn = document.getElementById("clear");
let resumeBtn = document.getElementById("resume");
let pauseBtn = document.getElementById("pause");
let audioMessage;

submitBtn.addEventListener("click", () => {
  // set the text and speak it
  audioMessage.text = text.value;
  window.speechSynthesis.speak(audioMessage);
});

clearBtn.addEventListener("click", () => {
  // clear textarea
  text.value = "";
  // cancel any ongoing speech
  window.speechSynthesis.cancel();
});

resumeBtn.addEventListener("click", () => {
  pauseBtn.style.display = "block";
  resumeBtn.style.display = "none";
  if (speechSynthesis.paused) {
    speechSynthesis.resume();
  }
});

pauseBtn.addEventListener("click", () => {
  pauseBtn.style.display = "none";
  resumeBtn.style.display = "block";
  if (speechSynthesis.speaking) {
    speechSynthesis.pause();
  }
});

window.onload = () => {
  resumeBtn.style.display = "none";
  if ("speechSynthesis" in window) {
    audioMessage = new SpeechSynthesisUtterance();
  } else {
    alert("Speech Synthesis is not supported in your browser.");
  }
};
