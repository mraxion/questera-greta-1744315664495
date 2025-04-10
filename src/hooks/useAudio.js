export function useAudio() {
  const speak = (text, lang = 'en-US') => {
    if ('speechSynthesis' in window) {
      // Cancel any ongoing speech
      window.speechSynthesis.cancel();

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = lang;
      utterance.rate = 0.9; // Slightly slower for better comprehension
      utterance.volume = 1.0; // Maximum volume
      
      // Get voices and select a clear one if available
      const voices = window.speechSynthesis.getVoices();
      const preferredVoice = voices.find(voice => 
        voice.lang.startsWith(lang) && voice.localService
      );
      
      if (preferredVoice) {
        utterance.voice = preferredVoice;
      }

      window.speechSynthesis.speak(utterance);
    }
  };

  const repeatAudio = (text, lang = 'en-US', times = 2, interval = 1500) => {
    speak(text, lang);
    
    let count = 1;
    const intervalId = setInterval(() => {
      if (count < times) {
        speak(text, lang);
        count++;
      } else {
        clearInterval(intervalId);
      }
    }, interval);
  };

  return { speak, repeatAudio };
}