
//Webaudio init and SoundFont Playback Logic ::::::::::


//initialization of WebAudiokit that runs native in GoogleChrome and other supported browsers via extensions. declaring and play() function that is called to test that webaudiofont library by surikov is working.
let AudioContextFunc = window.AudioContext || window.webkitAudioContext;
let audioContext = new AudioContextFunc();
let player = new WebAudioFontPlayer();
player.loader.decodeAfterLoading(audioContext, '_tone_0250_SoundBlasterOld_sf2');
player.loader.decodeAfterLoading(audioContext, '_tone_0010_SoundBlasterOld_sf2'); //sf2 patches should also be linked in the CDN in your HTML file.
function play() {
  player.queueWaveTable(audioContext, audioContext.destination
    , _tone_0010_SoundBlasterOld_sf2, 0, 12 * 4 + 7, 2);
  player.queueWaveTable(audioContext, audioContext.destination
    , _tone_0010_SoundBlasterOld_sf2, 0, 13.74 * 4 + 7, 2);
  player.queueWaveTable(audioContext, audioContext.destination
    , _tone_0010_SoundBlasterOld_sf2, 0, 14.99 * 4 + 7, 2);
  return false;  //returning a false boolean kills the function process for each note.  this is important because without this the cpu and memory allocated to produce sound from this function might not terminate without returning false at the end.
}
//Chord Functions.
const playClear = () => {
  player.queueWaveTable(audioContext, audioContext.destination
    , _tone_0010_SoundBlasterOld_sf2, 0, 13.24 * 4 + 7, 2);
  player.queueWaveTable(audioContext, audioContext.destination
    , _tone_0010_SoundBlasterOld_sf2, 0, 13.74 * 4 + 7, 2);
  player.queueWaveTable(audioContext, audioContext.destination
    , _tone_0010_SoundBlasterOld_sf2, 0, 14.99 * 4 + 7, 2);
  return false;
}
const playClouds = () => {
  player.queueWaveTable(audioContext, audioContext.destination
    , _tone_0010_SoundBlasterOld_sf2, 0, 12 * 4 + 7, 2);
  player.queueWaveTable(audioContext, audioContext.destination
    , _tone_0010_SoundBlasterOld_sf2, 0, 14 * 4 + 7, 2);
  player.queueWaveTable(audioContext, audioContext.destination
    , _tone_0010_SoundBlasterOld_sf2, 0, 14.99 * 4 + 7, 2);
  return false;
}
const playHaze = () => {
  player.queueWaveTable(audioContext, audioContext.destination
    , _tone_0010_SoundBlasterOld_sf2, 0, 10.24 * 4 + 7, 2);
  player.queueWaveTable(audioContext, audioContext.destination
    , _tone_0010_SoundBlasterOld_sf2, 0, 14.49 * 4 + 7, 2);
  player.queueWaveTable(audioContext, audioContext.destination
    , _tone_0010_SoundBlasterOld_sf2, 0, 15.26 * 4 + 7, 2);
  return false
}
const playRain = () => {
  player.queueWaveTable(audioContext, audioContext.destination
    , _tone_0010_SoundBlasterOld_sf2, 0, 13.24 * 4 + 7, 2);
  player.queueWaveTable(audioContext, audioContext.destination
    , _tone_0010_SoundBlasterOld_sf2, 0, 14.49 * 4 + 7, 2);
  player.queueWaveTable(audioContext, audioContext.destination
    , _tone_0010_SoundBlasterOld_sf2, 0, 15.76 * 4 + 7, 2);
  return false;
}
const playFog = () => {
  //re ri  li
  player.queueWaveTable(audioContext, audioContext.destination
    , _tone_0010_SoundBlasterOld_sf2, 0, 13.74 * 4 + 7, 2);
  player.queueWaveTable(audioContext, audioContext.destination
    , _tone_0010_SoundBlasterOld_sf2, 0, 14 * 4 + 7, 2);
  player.queueWaveTable(audioContext, audioContext.destination
    , _tone_0010_SoundBlasterOld_sf2, 0, 15.76 * 4 + 7, 2);
  return false;
}
const playMist = () => {
  //do ri si
  player.queueWaveTable(audioContext, audioContext.destination
    , _tone_0010_SoundBlasterOld_sf2, 0, 13.24 * 4 + 7, 2);
  player.queueWaveTable(audioContext, audioContext.destination
    , _tone_0010_SoundBlasterOld_sf2, 0, 14 * 4 + 7, 2);
  player.queueWaveTable(audioContext, audioContext.destination
    , _tone_0010_SoundBlasterOld_sf2, 0, 15.26 * 4 + 7, 2);
  return false
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
//Minor/sharped note functions
const playCshFour = () => {
  player.queueWaveTable(audioContext, audioContext.destination
    , _tone_0250_SoundBlasterOld_sf2, 0, 13.50 * 4 + 7, 2);
  return false;
}
const playDshFour = () => {
  player.queueWaveTable(audioContext, audioContext.destination
    , _tone_0250_SoundBlasterOld_sf2, 0, 14 * 4 + 7, 2);
  return false;
}
const playFshFour = () => {
  player.queueWaveTable(audioContext, audioContext.destination
    , _tone_0250_SoundBlasterOld_sf2, 0, 14.74 * 4 + 7, 2);
  return false;
}
const playGshFour = () => {
  player.queueWaveTable(audioContext, audioContext.destination
    , _tone_0250_SoundBlasterOld_sf2, 0, 15.26 * 4 + 7, 2);
  return false;
}
const playAshFour = () => {
  player.queueWaveTable(audioContext, audioContext.destination
    , _tone_0250_SoundBlasterOld_sf2, 0, 15.76 * 4 + 7, 2);
  return false;
}



//Document selector tags and their respective event listeners to call playback functions upon being clicked on.
const rain = document.querySelector('#rain');
const clear = document.querySelector('#clear');
const clouds = document.querySelector('#clouds');
const haze = document.querySelector('#haze');
const fog = document.querySelector('#fog');
const mist = document.querySelector('#mist');
const majorDo = document.querySelector('#do');
const minorDi = document.querySelector('#di');
const majorRe = document.querySelector('#re');
const minorRi = document.querySelector('#ri');
const majorMe = document.querySelector('#me');
const majorFa = document.querySelector('#fa');
const minorFi = document.querySelector('#fi');
const majorSo = document.querySelector('#so');
const minorSi = document.querySelector('#si');
const majorLa = document.querySelector('#la');
const minorLi = document.querySelector('#li');
const majorTe = document.querySelector('#te');
const majorDoTop = document.querySelector('#do-top');
clear.addEventListener("click", function () {
  playClear();
});
clouds.addEventListener("click", function () {
  playClouds();
});
haze.addEventListener("click", function () {
  playHaze();
});
rain.addEventListener("click", function () {
  playRain();
});
fog.addEventListener("click", function () {
  playFog();
})
mist.addEventListener("click", function () {
  playMist();
})
majorDo.addEventListener("click", function () {
  playCfour();
});
minorDi.addEventListener("click", function () {
  playCshFour();
});
majorRe.addEventListener("click", function () {
  playDfour();
});
minorRi.addEventListener("click", function () {
  playDshFour();
});
majorMe.addEventListener("click", function () {
  playEfour();
});
majorFa.addEventListener("click", function () {
  playFfour();
});
minorFi.addEventListener("click", function () {
  playFshFour();
});
majorSo.addEventListener("click", function () {
  playGfour();
});
minorSi.addEventListener("click", function () {
  playGshFour();
});
majorLa.addEventListener("click", function () {
  playAfour();
});
minorLi.addEventListener("click", function () {
  playAshFour();
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
    const inputZip = input.value.split(" ").join('');
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
      const tones = document.querySelector('.tones');
      const sun = document.querySelector('#clear');
      const stats = document.createElement('ul');
      const skies = document.querySelector('body')
      statsSection.innerHTML = "";  //lists parsed weather object data
      stats.innerHTML = `
        <h1>${locale}</h1>
        <li>Condition: ${condition}</li>
        <li>Current Temp: ${toCelsius}C, ${toFahrenheit}F</li>
        <li>Daily-Low: ${lowToCelsius}C, ${lowToFahrenheit}F</li>
        <li>Daily-High: ${highToCelsius}C, ${highToFahrenheit}F</li>
        <li>Humidity Index: ${humidity}</li>
        <li>Wind Speed: ${windSpd}kph, ${windSpdMph}mph</li>
        <li>Gusts: ${ifGusts(windGst, windGstMph)}</li>
        <li>Wind Direction: ${windDir} Degrees ${windCompass(windDir)} </li>`
      statsSection.appendChild(stats);
      if (weath === "Clear") {  //If statements governing which elements are hidden and which are altered and displayed.  
        skies.style.background = "linear-gradient(to right, white, lightblue, lightpink, lightgreen, lightblue, cyan)"
        rain.style.display = "none"
        sun.style.display = "block"
        clouds.style.display = "none"
        haze.style.display = "none"
        fog.style.display = "none"
        mist.style.display = "none"
        snow.style.display = "none"
        tones.style.display = "block"; //prepare to reset to display: none when building other condition layouts.
        majorDo.style.display = "block"
        minorDi.style.display = "none"
        majorRe.style.display = "block"
        majorMe.style.display = "block"
        majorFa.style.display = "block"
        minorFi.style.display = "none"
        majorSo.style.display = "block"
        minorSi.style.display = "none"
        majorLa.style.display = "block"
        minorLi.style.display = "none"
        majorTe.style.display = "block"
        majorDoTop.style.display = "block"
        return
      } else if (weath === "Clouds") {
        skies.style.background = "linear-gradient(to right, grey, lightblue, lightgrey, lightgreen, lightgrey, cyan)"
        sun.style.display = "none";
        clouds.style.display = "block";
        haze.style.display = "none";
        rain.style.display = "none"
        fog.style.display = "none"
        mist.style.display = "none"
        snow.style.display = "none"
        tones.style.display = "block";
        majorDo.style.display = "block"
        minorDi.style.display = "none"
        majorRe.style.display = "block"
        minorRi.style.display = "block"
        majorMe.style.display = "none"
        majorFa.style.display = "block"
        minorFi.style.display = "none"
        majorSo.style.display = "block"
        minorSi.style.display = "block"
        majorLa.style.display = "none"
        minorLi.style.display = "none"
        majorTe.style.display = "block"
        majorDoTop.style.display = "block"
        return
      } else if (weath === "Haze") {
        clouds.style.display = "none"
        sun.style.display = "none";
        haze.style.display = "block"
        rain.style.display = "none"
        fog.style.display = "none"
        mist.style.display = "none"
        snow.style.display = "none"
        tones.style.display = "block";
        majorDo.style.display = "block"
        minorDi.style.display = "block"
        majorRe.style.display = "none"
        minorRi.style.display = "none"
        majorMe.style.display = "block"
        majorFa.style.display = "block"
        minorFi.style.display = "none"
        majorSo.style.display = "block"
        minorSi.style.display = "block"
        majorLa.style.display = "none"
        minorLi.style.display = "none"
        majorTe.style.display = "block"
        majorDoTop.style.display = "block"
        return
      } else if (weath === "Rain") {
        clouds.style.display = "none"
        sun.style.display = "none";
        haze.style.display = "none";
        rain.style.display = "block"
        fog.style.display = "none"
        mist.style.display = "none"
        snow.style.display = "none"
        tones.style.display = "block";
        majorDo.style.display = "block"
        minorDi.style.display = "none"
        majorRe.style.display = "none"
        minorRi.style.display = "block"
        majorMe.style.display = "none"
        majorFa.style.display = "block"
        minorFi.style.display = "block"
        majorSo.style.display = "block"
        minorSi.style.display = "none"
        majorLa.style.display = "none"
        minorLi.style.display = "block"
        majorTe.style.display = "block"
        majorDoTop.style.display = "block"
        return
      } else if (weath === "Fog") {
        //do re ri fa so si li dotop
        sun.style.display = "none";
        clouds.style.display = "none";
        haze.style.display = "none";
        rain.style.display = "none"
        fog.style.display = "block"
        mist.style.display = "none"
        snow.style.display = "none"
        tones.style.display = "block";
        majorDo.style.display = "block"
        minorDi.style.display = "none"
        majorRe.style.display = "block"
        minorRi.style.display = "block"
        majorMe.style.display = "none"
        majorFa.style.display = "block"
        minorFi.style.display = "none"
        majorSo.style.display = "block"
        minorSi.style.display = "block"
        majorLa.style.display = "none"
        minorLi.style.display = "block"
        majorTe.style.display = "none"
        majorDoTop.style.display = "block"
      } else if (weath === "Mist") {
        //do di ri fa fi si li dotop
        sun.style.display = "none";
        clouds.style.display = "none";
        haze.style.display = "none";
        rain.style.display = "none"
        fog.style.display = "none"
        mist.style.display = "block"
        snow.style.display = "none"
        tones.style.display = "block";
        majorDo.style.display = "block"
        minorDi.style.display = "block"
        majorRe.style.display = "none"
        minorRi.style.display = "block"
        majorMe.style.display = "none"
        majorFa.style.display = "block"
        minorFi.style.display = "block"
        majorSo.style.display = "none"
        minorSi.style.display = "block"
        majorLa.style.display = "none"
        minorLi.style.display = "block"
        majorTe.style.display = "none"
        majorDoTop.style.display = "block"

        return
      } else if (weath === "Snow") {
        //
        sun.style.display = "none";
        clouds.style.display = "none";
        haze.style.display = "none";
        rain.style.display = "none"
        fog.style.display = "none"
        mist.style.display = "none"
        snow.style.display = "block"
        tones.style.display = "block";
        majorDo.style.display = "block"
        minorDi.style.display = "block"
        majorRe.style.display = "none"
        minorRi.style.display = "block"
        majorMe.style.display = "none"
        majorFa.style.display = "block"
        minorFi.style.display = "block"
        majorSo.style.display = "none"
        minorSi.style.display = "block"
        majorLa.style.display = "none"
        minorLi.style.display = "block"
        majorTe.style.display = "none"
        majorDoTop.style.display = "block"
      }
      else {
        clouds.style.display = "none"
        sun.style.display = "none"
        haze.style.display = "none"
        rain.style.display = "none"
        tones.style.display = "none"
        mist.style.display = "none"
        return
      }
    }
    clearSky("Mist");  // function call to determine page layout based on string returned by condition variable. so far I've found Clear, Clouds, Haze, Rain, Fog, Mist, Snow?
  });

  return
}
weatherByZip();




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

