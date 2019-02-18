## PragmaBrewery

PragmaBrewery is a simple system to monitor the temperature of diferent types of beer while being transported.

## Technologies

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
-Redux to manage the state of the application
-Enzyme
-Bootstrap 4

### Explanation

The refrigerated truck is loaded with multiple containers with beer bottles inside, each set to a specific temperature and each containing a thermometer sensor.
To simulate the temperature changes, a thermostat was added to each container.
And to warn about the temperature changes was added a thermometer for each type of beer.

### Version 2.0 improvements

The challenge instructions mention the factor of opening the doors to unload or forgetting the container doors ajar.
So, in a version 2.0, I would do an automatic temperature decrementer based on the interval that the doors were left open.
Also some improvements on medium and small devices layout.

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.
Run npm test -- --coverage to include a coverage report.
