# Guac-A-Mole
Guac-A-Mole is the guacamole version of the Whack a Mole game.

The user will play a game of whack-a-mole, where the they have to click on every avocado that appears from one of the holes.

Every avocado they hit will turn into guacamole and points will be added to the user. Every round has limited time and the avocados should appear randomly from the holes.

## Installation
```sh
npm install
npm install react-router-dom --save
npm install styled-components
```

## To create the app
```sh
npx create-react-app Guac-A-Mole
```

## Folder Structure

After creation, the project look like this :

* Added my code inside src/

```
GUAC-A-MOLE/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
  src/
    component/
        GameScreen.js
        Holes.js
        HomePage.js
        ScoreScreen.js
    images/
        avocado.png
        guacamole.png    
    App.css
    App.js
    App.test.js
    index.css
    index.js
    logo.svg
    style.js
```

## To run the app
```sh
cd Guac-A-Mole
```

Inside the newly created project, run some built-in commands:

```sh
npm install
npm start
```

Runs the app in development mode.<br>
Open [http://localhost:3000/homePage](http://localhost:3000/homePage) to view it in the browser.