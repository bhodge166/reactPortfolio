import lasso from "../images/lassoSportspage.PNG";
import marvel from "../images/Project1Comics.png";
import weather from "../images/Homework6_Screenshot.png";
import planner from "../images/Homework5_Screenshot.png";
import texteditor from "../images/textEditor.PNG";
import eldenMarket from "../images/eldenmarket.png";

const projects = [
  {
    img: eldenMarket,
    title: "Elden Market",
    text: "A React and Graphql based e-commerce application based on the game Elden Ring.",
    deployed: "https://eldenmarket.herokuapp.com/",
    code: "https://github.com/bhodge166/eldenMarket",
  },
  {
    img: lasso,
    title: "Lasso Sports Page",
    text: "An application using Handlebars and MySQL that allows the user to obtain and change data on players and staff from the show Ted Lasso",
    deployed: "https://frozen-crag-55558.herokuapp.com/",
    code: "https://github.com/bhodge166/lassoSportsPage",
  },
  {
    img: marvel,
    title: "Marvel for Beginners",
    text: "A JavaScript application using Marvel and IMDB APIs that allows users to get information on their favorite marvel characters",
    deployed: "https://bhodge166.github.io/MarvelForBeginners/",
    code: "https://github.com/bhodge166/MarvelForBeginners",
  },
  {
    img: weather,
    title: "Weather App",
    text: "A JavaScript application using the OpenWeather API that allows the user to get the current and forecasted weather for a chosen city",
    deployed: "https://bhodge166.github.io/WeatherApp/",
    code: "https://github.com/bhodge166/WeatherApp",
  },
  {
    img: planner,
    title: "Day-Planner",
    text: "A simple JavaScript application that utilizes local storage to allow the user to schedule their day",
    deployed: "https://bhodge166.github.io/Day-Planner/",
    code: "https://github.com/bhodge166/Day-Planner",
  },
];

export default projects;
