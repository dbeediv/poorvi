document.getElementById('startRecording').addEventListener('click', function() {
  const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
  recognition.start();

  recognition.onresult = function(event) {
    const transcript = event.results[0][0].transcript;
    document.getElementById('q1').value = transcript; // Insert voice input into first question
  };
});
