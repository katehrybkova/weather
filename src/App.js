import React, { Component } from 'react';
import './App.css';
import axios from "axios";
import CurrentLocation from "./components/CurrentLocation";
import EnterCity from "./components/EnterCity";
import Map from "./components/Map";
import Card1Day from "./components/Card1Day";
import Card7Days from "./components/Card7Days/Card7Days";
import Loader from "react-loader-spinner";
import LocAndTime from "./components/LocAndTime";
import AppBar from "./components/AppBar";

const API_URL = "http://api.apixu.com/v1/forecast.json?key=229bbedfd358402289383456192204";
const IMAGE_KEY = "12292065-237546a1a299f2c430ac14530";


class App extends Component {
  state = {
    cityName: "Kiev",
    numberDays: 7,
    localTime: "",
    isLoading: true,
    showing7Days: false,
    lat: 50.5,
    long: 30.5,
    country: "Ukraine",

  }

  searchImages() {
    const { cityName } = this.state;
    const URL = `https://pixabay.com/api/?key=${IMAGE_KEY}&q=${cityName}`;

    axios.get(URL)
      .then(res => res.data)
      .then(data => {
        this.setState({ image: data.hits[Math.floor(Math.random() * Math.floor(data.hits.length))].largeImageURL })
      })
  }

  getInfoMapClick = e => {
    let lat = e.latLng.lat();
    let long = e.latLng.lng();
    const { numberDays } = this.state;
    const URL = `${API_URL}&q=${lat}, ${long}&days=${numberDays}`;
    axios.get(URL)
      .then(res => res.data)
      .then(data => {
        this.setState({
          cityName: data.location.name,
          lat: data.location.lat,
          long: data.location.lon,
          country: data.location.country,
          isLoading: false,
          localTime: data.location.localtime,
          text: data.current.condition.text,
          forecastDays: data.forecast.forecastday,
          maxtemp_c: data.forecast.forecastday[0].day.maxtemp_c,
          mintemp_c: data.forecast.forecastday[0].day.mintemp_c,
          sunrise: data.forecast.forecastday[0].astro.sunrise,
          sunset: data.forecast.forecastday[0].astro.sunset,
          iconUrl: data.forecast.forecastday[0].day.condition.icon,
          date: data.forecast.forecastday[0].date,
        }
        );

      })
      .catch(err => {
        if (err) console.error("Cannot fetch Weather Data from API", err)
      })

  };

  updateWeather() {
    const { numberDays, cityName } = this.state;
    const URL = `${API_URL}&q=${cityName}&days=${numberDays}`;
    axios.get(URL)
      .then(res => res.data)
      .then(data => {
        this.setState({
          cityName: data.location.name,
          lat: data.location.lat,
          long: data.location.lon,
          country: data.location.country,
          isLoading: false,
          localTime: data.location.localtime,
          text: data.current.condition.text,
          forecastDays: data.forecast.forecastday,
          maxtemp_c: data.forecast.forecastday[0].day.maxtemp_c,
          mintemp_c: data.forecast.forecastday[0].day.mintemp_c,
          sunrise: data.forecast.forecastday[0].astro.sunrise,
          sunset: data.forecast.forecastday[0].astro.sunset,
          iconUrl: data.forecast.forecastday[0].day.condition.icon,
          date: data.forecast.forecastday[0].date,
        })
      })
  }


  updateWeatherAndImage = () => {

    const { numberDays, cityName } = this.state;
    const UpWeather = axios.get(`${API_URL}&q=${cityName}&days=${numberDays}`);
    const UpImg = axios.get(`https://pixabay.com/api/?key=${IMAGE_KEY}&q=${cityName}`);

    Promise.all([UpWeather, UpImg])
      .then(res => {
        this.setState({
          cityName: res[0].data.location.name,
          lat: res[0].data.location.lat,
          long: res[0].data.location.lon,
          country: res[0].data.location.country,
          isLoading: false,
          localTime: res[0].data.location.localtime,
          text: res[0].data.current.condition.text,
          forecastDays: res[0].data.forecast.forecastday,
          maxtemp_c: res[0].data.forecast.forecastday[0].day.maxtemp_c,
          mintemp_c: res[0].data.forecast.forecastday[0].day.mintemp_c,
          sunrise: res[0].data.forecast.forecastday[0].astro.sunrise,
          sunset: res[0].data.forecast.forecastday[0].astro.sunset,
          iconUrl: res[0].data.forecast.forecastday[0].day.condition.icon,
          date: res[0].data.forecast.forecastday[0].date,
          image: res[1].data.hits[Math.floor(Math.random() * res[1].data.hits.length)].largeImageURL
        }
        );

      })
      .catch(err => {
        if (err) console.error("Cannot fetch Weather Data from API", err)
      })

  };

  ShowWeather = () => {
    let { showing7Days } = this.state;
    this.setState({ showing7Days: !showing7Days })
  }

  cityNameUpdate = (e) => {
    e.preventDefault();
    this.setState({
      cityName: e.target.city.value
    }, () => this.updateWeatherAndImage(this.state.cityName));
    e.target.city.value = "";

  }

  componentDidMount() {
    this.updateWeather();
    this.searchImages();
  }
  render() {
    const { lat, image, long, country, showing7Days, date, forecastDays, sunrise, precip, maxwind_kph, sunset, cityName, numberDays, localTime, isLoading, maxtemp_c, mintemp_c, text, iconUrl } = this.state;
    return <>
      {isLoading ? <div className="loader">
        <div className="wrapLoader"><Loader type="Circles" textShadow="0px 1px 0px #528009" color="white" height={80} width={80} /></div>
      </div> :
        <div className="App">
          <AppBar />
          <div className="enterCity">
            <EnterCity getInput={this.cityNameUpdate} />
          </div>
          <div className="flexCardMap">
            <div style={{ width: "375px", margin: "15px" }}>
              <LocAndTime image={image} localTime={localTime} date={date} cityName={cityName} />
            </div>
            <div style={{ width: "375px" }}>
              <Map
                lat={lat}
                lng={long}
                cityName={cityName}
                country={country}
                getInfo={this.getInfoMapClick}
                googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAEV5hm-_7AqHTdPCrmjbFLY1bQkvEGpK0"
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `275px` }} />}
                mapElement={<div style={{ height: `100%` }} />}
              /></div>
          </div>

          <Card1Day
            sunrise={sunrise}
            sunset={sunset}
            precip={precip}
            maxwind_kph={maxwind_kph}
            cityName={cityName}
            date={date}
            text={text}
            maxtemp_c={maxtemp_c}
            mintemp_c={mintemp_c}
            iconUrl={iconUrl}
          />
          <a href="#" className="myButton" onClick={this.ShowWeather}>Weeks weather</a>
          {showing7Days && <Card7Days forecastDays={forecastDays} />}
        </div>
      }
    </>

  }
}

export default App;
