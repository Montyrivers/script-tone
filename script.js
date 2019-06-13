
//Webaudio init and SoundFont Playback Logic ::::::::::


//initialization of WebAudiokit that runs native in GoogleChrome and other supported browsers via extensions. declaring and play() function that is called to test that webaudiofont library by surikov is working.**removed play() function
let AudioContextFunc = window.AudioContext || window.webkitAudioContext;
let audioContext = new AudioContextFunc();
let player = new WebAudioFontPlayer();
player.loader.decodeAfterLoading(audioContext, '_tone_0250_SoundBlasterOld_sf2');
player.loader.decodeAfterLoading(audioContext, '_tone_0010_SoundBlasterOld_sf2');
player.loader.decodeAfterLoading(audioContext, '_tone_0150_SoundBlasterOld_sf2');
player.loader.decodeAfterLoading(audioContext, '_tone_0480_SoundBlasterOld_sf2');
player.loader.decodeAfterLoading(audioContext, '_tone_0530_SoundBlasterOld_sf2');
player.loader.decodeAfterLoading(audioContext, '_tone_0140_SoundBlasterOld_sf2');//sf2 patches should also be linked in the CDN in your HTML file.

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
    , _tone_0150_SoundBlasterOld_sf2, 0, 12 * 4 + 7, 2);
  player.queueWaveTable(audioContext, audioContext.destination
    , _tone_0150_SoundBlasterOld_sf2, 0, 14 * 4 + 7, 2);
  player.queueWaveTable(audioContext, audioContext.destination
    , _tone_0150_SoundBlasterOld_sf2, 0, 14.99 * 4 + 7, 2);

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
    , _tone_0480_SoundBlasterOld_sf2, 0, 13.24 * 4 + 7, 4);
  player.queueWaveTable(audioContext, audioContext.destination
    , _tone_0480_SoundBlasterOld_sf2, 0, 14.49 * 4 + 7, 4);
  player.queueWaveTable(audioContext, audioContext.destination
    , _tone_0480_SoundBlasterOld_sf2, 0, 15.76 * 4 + 7, 4);
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
    , _tone_0140_SoundBlasterOld_sf2, 0, 13.24 * 4 + 7, 2);
  player.queueWaveTable(audioContext, audioContext.destination
    , _tone_0140_SoundBlasterOld_sf2, 0, 14 * 4 + 7, 2);
  player.queueWaveTable(audioContext, audioContext.destination
    , _tone_0140_SoundBlasterOld_sf2, 0, 15.26 * 4 + 7, 2);
  return false
}
const playSnow = () => {
  player.queueWaveTable(audioContext, audioContext.destination
    , _tone_0530_SoundBlasterOld_sf2, 0, 13.54 * 4 + 7, 2);
  player.queueWaveTable(audioContext, audioContext.destination
    , _tone_0530_SoundBlasterOld_sf2, 0, 15.99 * 4 + 7, 2);
  player.queueWaveTable(audioContext, audioContext.destination
    , _tone_0530_SoundBlasterOld_sf2, 0, 16.50 * 4 + 7, 2);
  return false;
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
const snow = document.querySelector('#snow');
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
clear.addEventListener("click", playClear);
clouds.addEventListener("click", playClouds);
haze.addEventListener("click", playHaze);
rain.addEventListener("click", playRain);
fog.addEventListener("click", playFog);
mist.addEventListener("click", playMist);
snow.addEventListener("click", playSnow);
majorDo.addEventListener("click", playCfour);
minorDi.addEventListener("click", playCshFour);
majorRe.addEventListener("click", playDfour);
minorRi.addEventListener("click", playDshFour);
majorMe.addEventListener("click", playEfour);
majorFa.addEventListener("click", playFfour);
minorFi.addEventListener("click", playFshFour);
majorSo.addEventListener("click", playGfour);
minorSi.addEventListener("click", playGshFour);
majorLa.addEventListener("click", playAfour);
minorLi.addEventListener("click", playAshFour);
majorTe.addEventListener("click", playBfour);
majorDoTop.addEventListener("click", playCfive);




//API Call Logic :::::::::::::::::


//Weather API by-ZIP Call
const APIKey = 'f6173d9c1bfcc2cc8e514e4c1c85f90c'
const cityByZip = 'api.openweathermap.org/data/2.5/weather?zip=,us'
const cityByCity = ''
const weatherSearchButton = document.querySelector('button');
const input = document.querySelector('input');

//listener to add enter button functionality for search input bar.
input.addEventListener("keydown", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.querySelector('button').click();
  }
});
// ^ event listener to add ENTER button functionality to input bar instead of just clicking the Current Weather button.



const weatherByZip = async () => {
  weatherSearchButton.addEventListener("click", async () => {
    const plusSign = '\uFF0B'
    const input = document.querySelector('input');
    const inputZip = input.value.split(" ").join('');
    const inputCity = input.value.split(" ").join('+');
    // console.log(typeof (input.value - 1)); <- for input value testing when adding search features
    // .split(" ").join('+');
    // .replace(/ /g, "+")


    const whichInput = () => {
      const inputContains = /^[0-9]+$/
      const zip = `zip=${inputZip},us`;
      const city = `q=${inputCity}`;
      if (input.value.match(inputContains)) {
        return zip;
      } else {
        return city;
      }
    };
    // console.log(input.value - 1)
    console.log(whichInput());

    let response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?${whichInput()}&APPID=${APIKey}`,
      {
        "x-api-key": APIKey,
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
    const windDirFloor = Math.floor(windDir * 1);
    const ifDirection = (dir) => {
      if (dir === false) {
        return "None"
      } else {
        return dir;
      }
    };
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
      } else {
        return "No wind."
      }
    }
    const windGst = response.data.wind.gust;
    const windGstMph = Math.floor(windGst / .621371);
    const ifGusts = (gst, gstMph) => { //function with windGst or windGstMph entered as parameter argument.  sometimes when there are no gusting winds this object key is omitted from the API call, resulting in undefined. will return a string if call is omitted.
      if (gst === undefined) {
        return "Barely a Breeze"
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
      const skies = document.querySelector('body');

      //functions that clear and then repopulate elements of applicable image items for weather conditions:
      const chordArt = (imgLink) => {
        clouds.innerHTML = `${imgLink}`
        sun.innerHTML = `${imgLink}`
        haze.innerHTML = `${imgLink}`
        rain.innerHTML = `${imgLink}`
        mist.innerHTML = `${imgLink}`
        snow.innerHTML = `${imgLink}`
        fog.innerHTML = `${imgLink}`
      }
      const chordArtReset = () => {
        clouds.innerHTML = ""
        sun.innerHTML = ""
        haze.innerHTML = ""
        rain.innerHTML = ""
        mist.innerHTML = ""
        snow.innerHTML = ""
      }
      const scaleArt = (imgLink) => {
        majorDo.innerHTML = `${imgLink}`
        minorDi.innerHTML = `${imgLink}`
        majorRe.innerHTML = `${imgLink}`
        minorRi.innerHTML = `${imgLink}`
        majorMe.innerHTML = `${imgLink}`
        majorFa.innerHTML = `${imgLink}`
        minorFi.innerHTML = `${imgLink}`
        majorSo.innerHTML = `${imgLink}`
        minorSi.innerHTML = `${imgLink}`
        majorLa.innerHTML = `${imgLink}`
        minorLi.innerHTML = `${imgLink}`
        majorTe.innerHTML = `${imgLink}`
        majorDoTop.innerHTML = `${imgLink}`
      }
      const scaleArtReset = () => {
        majorDo.innerHTML = ""
        minorDi.innerHTML = ""
        majorRe.innerHTML = ""
        minorRi.innerHTML = ""
        majorMe.innerHTML = ""
        majorFa.innerHTML = ""
        minorFi.innerHTML = ""
        majorSo.innerHTML = ""
        minorSi.innerHTML = ""
        majorLa.innerHTML = ""
        minorLi.innerHTML = ""
        majorTe.innerHTML = ""
        majorDoTop.innerHTML = ""
      }
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
        <li>Wind Direction: ${ifDirection(windDir)} Degrees ${windCompass(windDirFloor)} </li>`
      statsSection.appendChild(stats);
      if (weath === "Clear") {  //If statements governing which elements are hidden and which are altered and displayed.
        scaleArtReset();
        chordArtReset();
        scaleArt(`<img src="assets/white_cloud.png" alt="My test image"></img>`);
        chordArt(`<img src="assets/sun.png" alt="My test image"></img>`);
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
        minorRi.style.display = "none"
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
        scaleArtReset();
        chordArtReset();
        scaleArt(`<img src="assets/grey_cloud.png" alt="My test image"></img>`);
        chordArt(`<img src="assets/clouds.png" alt="My test image"></img>`);
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
        scaleArtReset();
        chordArtReset();
        scaleArt(`<img src="assets/little_smog.png" alt="My test image"></img>`);
        chordArt(`<img src="assets/haze.png" alt="My test image"></img>`);
        skies.style.background = "linear-gradient(to left, orange, lightblue, cyan, orange, grey, orange)";
        //music element display settings:
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
        scaleArtReset();
        chordArtReset();
        scaleArt(`<img src="assets/rain_drop.png" alt="My test image"></img>`);
        chordArt(`<img src="assets/rain_cloud.png" alt="My test image"></img>`);
        skies.style.background = "linear-gradient(to right, grey, whitesmoke, grey, silver, grey, whitesmoke)";
        //
        clouds.style.display = "none"
        sun.style.display = "none";
        haze.style.display = "none";
        rain.style.display = "block"
        fog.style.display = "none"
        mist.style.display = "none"
        snow.style.display = "none"
        tones.style.display = "block"
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
        scaleArtReset();
        chordArtReset();
        scaleArt(`<img src="assets/little_fog.png" alt="My test image"></img>`);
        chordArt(`<img src="assets/fog.png" alt="My test image"></img>`);
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
        scaleArtReset();
        chordArtReset();
        scaleArt(`<img src="assets/little_mist.png" alt="My test image"></img>`);
        chordArt(`<img src="assets/mist.png" alt="My test image"></img>`);
        skies.style.background = "linear-gradient(to right, silver, lightblue, cyan, silver, lightblue, grey)";
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
        scaleArtReset();
        chordArtReset();
        scaleArt(`<img src="assets/little-snow.png" alt="My test image"></img>`);
        chordArt(`<img src="assets/snow.png" alt="My test image"></img>`);
        skies.style.background = "linear-gradient(to left, white, whitesmoke, silver, whitesmoke, white, silver)";
        //do re me fa so si li dotop
        sun.style.display = "none";
        clouds.style.display = "none";
        haze.style.display = "none";
        rain.style.display = "none"
        fog.style.display = "none"
        mist.style.display = "none"
        snow.style.display = "block"
        tones.style.display = "block";
        majorDo.style.display = "block"
        minorDi.style.display = "none"
        majorRe.style.display = "block"
        minorRi.style.display = "none"
        majorMe.style.display = "block"
        majorFa.style.display = "block"
        minorFi.style.display = "none"
        majorSo.style.display = "block"
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
        snow.style.display = "none"
        return
      }
    }
    clearSky(condition);  // function call to determine page layout based on string returned by condition variable. so far I've found Clear, Clouds, Haze, Rain, Fog, Mist, Snow?, can substitute condition argument for condition string to test layouts.
  });
  return
}
weatherByZip();

















//Scratch Code and Example Reference:


//test event listener for qwerty keyboard logging.
// document.addEventListener("keydown", function (event) {
//   console.log(event.which);
// });  


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

