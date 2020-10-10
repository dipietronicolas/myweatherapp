import React from 'react';
import './Caja.css';
import { API_KEY } from './ApiKey';
export default class Caja extends React.Component {

  state = {
    id: this.props.id,
    data: {},
    showData: false
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    return {
      id: nextProps.id
    }
  }

  fetchWeatherData() {
    console.log("fetchWeatherData");
    console.log(API_KEY);
    const weather_url = `https://api.openweathermap.org/data/2.5/weather?id=${this.state.id}&units=metric&appid=${API_KEY}`
    fetch(weather_url)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState({
          data: data,
          showData: true
        })
      })
      .catch(error => console.log(error))
  }

  componentDidMount() {
    this.fetchWeatherData();
  }

  componentDidUpdate() {
    //this.fetchWeatherData();
  }

  componentWillUnmount() {
    console.log(`Desmontando ${this.state.id}`);
  }

  fillCardBody = () => {
    return (
      <div className="card text-dark bg-light mx-auto my-3 p-4" id="box">
        <div className="card-body p-0">
          <h4 className="card-title">{this.state.data.name}</h4>
          <h5 className="card-subtitle font-weight-bold mb-2">{this.state.data.weather[0].description}</h5>
          <p className="py-0 my-0">Temp: {parseInt(this.state.data.main.temp)}º</p>
          <p className="py-0 my-0">Max: {parseInt(this.state.data.main.temp_max)}º</p>
          <p className="py-0 my-0">Min: {parseInt(this.state.data.main.temp_min)}º</p>
          <p className="py-0 my-0">Humidity: {parseInt(this.state.data.main.humidity)}%</p>
          <p className="py-0 my-0">Pressure: {parseInt(this.state.data.main.pressure)}hPa</p>
        </div>
        <div className="card-footer mb-0">
          <button
            className="btn btn-danger"
            onClick={this.handleRemove}>DELETE ME!</button>
        </div>
      </div>
    )
  }

  handleRemove = () => {
    this.props.remove(this.state.id);

  }

  render() {
    return (
      <div className="col-12 col-sm-6 col-lg-4 col-xl-3 mx-auto mb-4 p-0">
        {
          this.state.showData
            ? this.fillCardBody()
            : ''
        }
      </div>
    )
  }
}
