
//SoundFont Playback Logic ::::::::::


//initialize WebAudiokit that runs native in GoogleChrome and other supported browsers via extensions
var AudioContextFunc = window.AudioContext || window.webkitAudioContext;
var audioContext = new AudioContextFunc();
var player = new WebAudioFontPlayer();
player.loader.decodeAfterLoading(audioContext, '_tone_0250_SoundBlasterOld_sf2');
function play() {
  player.queueWaveTable(audioContext, audioContext.destination
    , _tone_0250_SoundBlasterOld_sf2, 0, 12 * 4 + 7, 2);
  return false;
}
//major scale note functions.  Each generates a tone by note number multiplied up to an audible frequency, as well as a parameter that includes note duration.
const playCfour = () => {
  player.queueWaveTable(audioContext, audioContext.destination
    , _tone_0250_SoundBlasterOld_sf2, 0, 13.24 * 4 + 7, 2);
  return false;
}
const playDfour = () => {
  player.queueWaveTable(audioContext, audioContext.destination
    , _tone_0250_SoundBlasterOld_sf2, 0, 13.74 * 4 + 7, 2);
  return false;
}
const playEfour = () => {
  player.queueWaveTable(audioContext, audioContext.destination
    , _tone_0250_SoundBlasterOld_sf2, 0, 14.24 * 4 + 7, 2);
  return false;
}
const playFfour = () => {
  player.queueWaveTable(audioContext, audioContext.destination
    , _tone_0250_SoundBlasterOld_sf2, 0, 14.49 * 4 + 7, 2);
  return false;
}
const playGfour = () => {
  player.queueWaveTable(audioContext, audioContext.destination
    , _tone_0250_SoundBlasterOld_sf2, 0, 14.99 * 4 + 7, 2);
  return false;
}
const playAfour = () => {
  player.queueWaveTable(audioContext, audioContext.destination
    , _tone_0250_SoundBlasterOld_sf2, 0, 15.49 * 4 + 7, 2);
  return false;
}
const playBfour = () => {
  player.queueWaveTable(audioContext, audioContext.destination
    , _tone_0250_SoundBlasterOld_sf2, 0, 15.99 * 4 + 7, 2);
  return false;
}
const playCfive = () => {
  player.queueWaveTable(audioContext, audioContext.destination
    , _tone_0250_SoundBlasterOld_sf2, 0, 16.24 * 4 + 7, 2);
  return false;
}
//Tags and their respective event listeners to call playback functions upon being clicked on.
const majorDo = document.querySelector('#do');
const majorRe = document.querySelector('#re');
const majorMe = document.querySelector('#me');
const majorFa = document.querySelector('#fa');
const majorSo = document.querySelector('#so');
const majorLa = document.querySelector('#la');
const majorTe = document.querySelector('#te');
const majorDoTop = document.querySelector('#do-top');
majorDo.addEventListener("click", function () {
  playCfour();
});
majorRe.addEventListener("click", function () {
  playDfour();
});
majorMe.addEventListener("click", function () {
  playEfour();
});
majorFa.addEventListener("click", function () {
  playFfour();
});
majorSo.addEventListener("click", function () {
  playGfour();
});
majorLa.addEventListener("click", function () {
  playAfour();
});
majorTe.addEventListener("click", function () {
  playBfour();
});
majorDoTop.addEventListener("click", function () {
  playCfive();
});



//API Call Logic :::::::::::::::::


//Weather API by-ZIP Call
const APIKey = 'f6173d9c1bfcc2cc8e514e4c1c85f90c'
const cityByZip = 'api.openweathermap.org/data/2.5/weather?zip=,us'
const weatherSearchButton = document.querySelector('button');
const weatherByZip = () => {
  weatherSearchButton.addEventListener("click", async () => {
    const input = document.querySelector('input');
    const inputZip = input.value;
    const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?zip=${inputZip},us&APPID=${APIKey}`,
      {
        "x-api-key": APIKey
      })
    console.log(response.data);

  })
}
weatherByZip();
