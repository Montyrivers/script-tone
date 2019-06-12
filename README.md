# weather-font
-objective:
access and playback soundfonts thru webaudio using webaudiofont api library linked through the CDM.  
dynamically display national weather data searched by zip code using openweathermap api.  create a responsive web app that alters tones and styling based on data returned from weather API and provides a fun easter egg in the form of clickable elements that produce tones and have relevant styling/animation.

So far:
-successful API call made to openweathermap, relevant object keys identified and unpacked from returned object.

-parsed weather data to display in readable form i.e. wind direcrion n, s, e, w and temperature in F/C, wind speed in mph/kph, location, etc

-webaudiofont library functions created and implemented with associated click event listeners.  

-multiple layouts created and rendered upon page load which are displayed based on openweathermap object key data.

-added enhanced search functionality.  you can now enter a city name which will search globally on top of just using a US  zip code.


-----
immediate goals:  identify more weather conditions and create layouts accordingly.
add styling and structure to existing web page and layouts.

