# Weather Reader

Uses the geolocation API to determine your local weather with an exciting GIF background based on the time of day/current weather.

## Installation and Setup Instructions

Use the three command lines below to clone the repository and download dependencies. You will need `node` installed globally on your machine. Your browser also needs to have CORS (cross-enabled resource sharing) on. See more about CORS[here](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS).

```
$ git clone https://github.com/kellyjacksonio/weather-reader.git
$ cd weather-reader
$ npm install
```
After that, the `config.DARKSKY_KEY` variable in the `script.js` file must be replaced with a working Dark Sky API key from the [Dark Sky Website](https://darksky.net/dev).

Finally, use the command line below to run the program and enjoy getting your very specific weather.

`$ npm start`

To Visit App:

`localhost:8080`

## Additional Information

The geolocation API used to gather information about the user's location has been depricated from non-secure origins and does not have a live build. As of now, there are no plans to remodel the application to work otherwise. However, the app will still work when hosted locally wheh cross-origin resource sharing is on.

## Reflection

In order to practice JSON requests, I decided to make a weather reader app. My first call came back specified to 15 decimal places, inspiring me to give it the silly theme of 'Very Specific Weather'. Continuing the playful/whimsical theme, I gave the more frequent weather types an interchangable GIF background.

The application was originally written in JavaScript/jQuery, but I reworked it as a Node.js application for additional practice, as well as the ability to locally host it.

Right now, the geolocation API that the app uses is deprecated and any future updates would include a more updated and secure method of garnering the user's current location. Perhaps through a zip code or a city search function. Other updates could include hourly weather or a more specific description of the current weather outside.