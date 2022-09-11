import "normalize.css";
import "./style.css";
import { fetchWeather } from "./modules/weather";

const search = document.getElementById("place_search");

search.addEventListener("change", fetchWeather);
