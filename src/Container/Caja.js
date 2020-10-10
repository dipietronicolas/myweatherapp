import React from 'react';
import './Caja.css';

export default class Caja extends React.Component {

  state = {
    id: this.props.id,
    data: {},
    showData: false
  }

  static getDerivedStateFromProps(nextProps, prevState){
    return{
      id: nextProps.id
    }
  }

  fetchWeatherData(){
    const weather_url = `https://api.openweathermap.org/data/2.5/weather?id=${this.state.id}&units=metric&appid=0eb99e84e2190cad3c7ba40bd3290167`
    fetch(weather_url)
      .then(response => response.json())
      .then(data => this.setState({
        data: data,
        showData: true
      }))
      .catch(error => console.log(error))
  }

  componentDidMount() {
    this.fetchWeatherData();
  }

  componentDidUpdate(){
    this.fetchWeatherData();
  }

  componentWillUnmount() {
    console.log(`Desmontando ${this.state.id}`);
  }

  fillCardBody = () => {
    return (
      <div className="card-body">
        <p>Temp: {parseInt(this.state.data.main.temp)}</p>
        <p>Max: {parseInt(this.state.data.main.temp_max)}</p>
        <p>Min: {parseInt(this.state.data.main.temp_min)}</p>
      </div>
    )
  }

  handleRemove = () => {
    this.props.remove(this.state.id);
  }

  render() {
    return (
      <div className="col-12 col-sm-6 col-lg-4 col-xl-3 mb-4 p-4">
        <div className="card text-dark bg-light mx-auto my-3 p-4" id="box">
          <div className="card-title">
            <h4>
              {this.state.data.name}
            </h4>
          </div>
          {
            this.state.showData
              ? this.fillCardBody()
              : ''
          }
          <div className="card-footer mb-0">
            <button
              className="btn btn-danger"
              onClick={this.handleRemove}>DELETE ME!</button>
          </div>
        </div>
      </div>
    )
  }
}
