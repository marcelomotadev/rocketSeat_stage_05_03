export default function() {

  const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
  const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")
  const bgAudio = new Audio("https://archive.org/download/InterstellarMainThemeExtraExtendedSoundtrackByHansZimmer/Interstellar%20Main%20Theme%20-%20Extra%20Extended%20-%20Soundtrack%20by%20Hans%20Zimmer.mp3")

  bgAudio.loop = true
  
  function pressButton() {
    buttonPressAudio.play()
  }

  function timerEnd() {
    kitchenTimer.play()
  }

  return{
    pressButton,
    timerEnd,
    bgAudio
  }
}
