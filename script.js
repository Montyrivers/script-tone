
//Webaudio init and SoundFont Playback Logic ::::::::::


//initialization of WebAudiokit that runs native in GoogleChrome and other supported browsers via extensions. declaring and play() function that is called to test that webaudiofont library by surikov is working.
var AudioContextFunc = window.AudioContext || window.webkitAudioContext;
var audioContext = new AudioContextFunc();
var player = new WebAudioFontPlayer();
player.loader.decodeAfterLoading(audioContext, '_tone_0250_SoundBlasterOld_sf2');
function play() {
  player.queueWaveTable(audioContext, audioContext.destination
    , _tone_0250_SoundBlasterOld_sf2, 0, 12 * 4 + 7, 2);
  return false;  //returning a false boolean kills the function process for each note.  this is important because without this the cpu and memory allocated to produce sound from this function might not terminate without returning false at the end.
}
//major scale note functions.  When called each generates a tone by note number multiplied up to an audible frequency, as well as a parameter that includes note duration.
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
//Document selector tags and their respective event listeners to call playback functions upon being clicked on.
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
    // weather api call object data node break down:
    console.log(response);
    console.log(response.data);
    console.log(response.data.weather);
    console.log(response.data.weather[0]);
    console.log(response.data.weather[0].main); //string describing condition.  recorded API weather call outcomes: "Clear" eg: {id: 800, main: "Clear","Clouds","Haze" description: "clear sky", icon: "01d"}
    console.log(response.data.wind.deg); //wind direction in degrees of orientation.
    console.log(response.data.wind.gust); //gusting windspeed
    console.log(response.data.wind.speed); //average wind speed
    console.log(response.data.main.temp); // current temp in kelvin
    console.log(response.data.main.temp_min); // temp daily low in kelvin
    console.log(response.data.main.temp_max); //temp daily low in kelvin
    console.log(response.data.main.humidity); // humidity index
    console.log(response.data.name); // name of nearest data node based on zip
    const condition = response.data.weather[0].main //data object key to be parsed when selecting render function.
    const windDir = response.data.wind.deg;
    const windCompass = (dir) => {  //windDir is called as the parameter argument to produce a directional translation of the numerical node.
      if (dir <= 9 || dir >= 352) {
        return "N";
      } else if (dir >= 10 && dir <= 85) {
        return "NE"
      } else if (dir >= 86 && dir <= 95) {
        return "E"
      } else if (dir >= 96 && dir <= 175) {
        return "SE"
      } else if (dir >= 176 && dir <= 185) {
        return "S"
      } else if (dir >= 186 && dir <= 264) {
        return "SW"
      } else if (dir >= 265 && dir <= 275) {
        return "W"
      } else if (dir >= 276 && dir <= 351) {
        return "NW"
      }
    }
    const windGst = response.data.wind.gust;
    const windGstMph = Math.floor(windGst / .621371);
    const ifGusts = (gst, gstMph) => { //function with windGst or windGstMph entered as parameter argument.  sometimes when there are no gusting winds this object key is omitted from the API call, resulting in undefined. will return a string if call is omitted.
      if (gst === undefined) {
        return "Gentle Breeze"
      } else {
        return `${gst}kph, ${gstMph}mph`
      }
    }
    const windSpd = response.data.wind.speed; //kilometers per hour
    const windSpdMph = Math.floor(windSpd / .621371);
    const temp = response.data.main.temp;
    const toFahrenheit = Math.floor(1.8 * (temp - 273) + 32);
    const toCelsius = Math.floor(temp - 273);
    const tempLow = response.data.main.temp_min;
    const lowToFahrenheit = Math.floor(1.8 * (tempLow - 273) + 32);
    const lowToCelsius = Math.floor(tempLow - 273);
    const tempHigh = response.data.main.temp_max;
    const highToFahrenheit = Math.floor(1.8 * (tempHigh - 273) + 32);
    const highToCelsius = Math.floor(tempHigh - 273);
    const humidity = response.data.main.humidity;
    const locale = response.data.name;



    const clearSky = (weath) => {
      const statsSection = document.querySelector('.weather-stats');
      const tones = document.querySelector('.major-tones');
      const stats = document.createElement('ul');
      if (weath === "Clear") {
        tones.style.display = "block";
        statsSection.innerHTML = "";
        stats.innerHTML = `
        <h1>${locale}</h1>
        <li>Condition: ${condition}</li>
        <li>Current Temp: ${toCelsius}C ${toFahrenheit}F</li>
        <li>Daily-Low: ${lowToCelsius}C ${lowToFahrenheit}F</li>
        <li>Daily-High: ${highToCelsius}C ${highToFahrenheit}F</li>
        <li>Humidity Index: ${humidity}</li>
        <li>Wind Speed: ${windSpd}kph, ${windSpdMph}mph</li>
        <li>Gusts: ${ifGusts(windGst, windGstMph)}</li>
        <li>Wind Direction: ${windDir} Degrees ${windCompass(windDir)} </li>`
        statsSection.appendChild(stats);
        return
      }
    }
    clearSky("Clear");  // function call to determine page layout based on string returned by condition variable. so far I've found Clear, Clouds, Haze
  })

  return
}
weatherByZip();

const tones = document.querySelector('.tones');

//tentative page/weather/tone render functions
const cloudySky = (weath) => {
}


// const clearSky = (weath) => {
//   const majorTones = document.createElement('div');
//   const tones = document.querySelector('#tones');
//   if (weath === "Clear") {
//     tones.innerHTML = ' ';

//     majorTones.innerHTML = `
//   <div id="do">do</div>
//   <div id="re">re</div>
//   <div id="me">me</div>
//   <div id="fa">fa</div>
//   <div id="so">so</div>
//   <div id="la">la</div>
//   <div id="te">te</div>
//   <div id="do-top">do</div>
//         `
//     tones.appendChild(majorTones)
//   }

// }

