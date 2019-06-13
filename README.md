# weather-font

Deployed app now on Surge:  http://weather-font.surge.sh

-objective:
-access and playback soundfonts thru webaudio using webaudiofont library 
(https://surikov.github.io/webaudiofont/#how-to-use) linked through the CDM. get back an object from openweathermap

-dynamically display national weather data searched by zip code (and now any city name globally) using openweathermap api (https://openweathermap.org/appid#get).  create a responsive web app that alters tones and styling based on data returned from weather API and provides a fun easter egg in the form of clickable elements that produce tones and have relevant styling/animation.

So far:
-successful API call made to openweathermap, relevant object keys identified and unpacked from returned object.

-parsed weather data to display in readable form i.e. wind direcrion n, s, e, w and temperature in F/C, wind speed in mph/kph, location, etc

-webaudiofont library functions created and implemented with associated click event listeners.  

-multiple layouts created and rendered upon page load which are displayed based on openweathermap object key data.

-added enter key functionality to search bar execution.

-added enhanced search functionality.  you can now enter a city name which will search globally on top of just using a US  zip code.

-added responsive design for mobile and landscape orientations.


---------
about the tools used: 
openweathermap returns the current local weather data nodes as an object.  the params enable you to search via zip, city name and country code or tag.  

Google Chrome has a back end hard coded into it called WebAudio.  This enables the user to create libraries and tools to connect other sound playback technologies.  In this case I used a library created for the sole purpose of playing back old fashioned soundcard wavetables. 

win: I was able to find a way to initialize the webaudio back end and make use of the webaudiofont library to load low resolution wavetables for sound playback upon clicking button elements.  The openweathermap API had its quirks but reading and parsing through the object data wasn't overly difficult.  I was able to add enter button functionality for my search input, I was also able to enable it to accept either city name or zip code into the same field and adjust the params call accordingly using string interpolation.

struggle:  inexperience developing with webaudio technologies and lack of time to test the associated soundfont js library lead to some redundant code.  looking back I could likely refactor a lot of it to be more streamlined and easier to read.  still learning my way around the behaviors of the async/await calls to the weather api using Axios.  I had a significant hangup trying to work around switching params in the initial call caused by storing a seperate await call in a variable which caused strange behavior that was very difficult to trace back to.


-------------------------------
Post depoloyment goals:  identify more weather conditions and create layouts accordingly.  Add styling and structure to existing web page and layouts.  look into testing the webmidi (https://www.w3.org/TR/webmidi/#introduction) backend and using a library to easily (http://djipco.github.io/webmidi/latest/classes/WebMidi.html) capture and use midi noteon/off, sustain, and modulation wheel data to control wavetable playback.
refactor code where possible for better readability and cleaner functionality.

