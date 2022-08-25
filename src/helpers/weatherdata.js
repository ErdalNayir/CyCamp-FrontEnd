import React, { Component } from "react";

const api_key = "962f25f1148fb0fb79f944e3fec03ac5";

export default class Weatherdata extends Component {
  state = {
    temperature: "",
    error: "",
  };
  componentDidMount() {
    this.getWeather();
  }

  getWeather = async (e) => {
    const city = "Bursa";
    const country = "Turkey";

    const api_call = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${api_key}`
    );

    const response = await api_call.json();
    console.log(response);

    if (city & country) {
      this.setState({
        temperature: response.main.temp,
        error: "",
      });
    } else {
      this.setState({
        error: "Veri çekilemedi",
      });
    }
  };

  render() {
    return <div>{this.temperature}</div>;
  }
}
