var instr = null;
var AudioContextFunc = window.AudioContext || window.webkitAudioContext;
var audioContext = new AudioContextFunc();
var player = new WebAudioFontPlayer();
function changeInstrument(path, name) {
  player.loader.startLoad(audioContext, path, name);
  player.loader.waitLoad(function () {
    instr = window[name];
  });
}
changeInstrument('https://surikov.github.io/webaudiofontdata/sound/0290_Aspirin_sf2_file.js', '_tone_0290_Aspirin_sf2_file');