import React from 'react';
import './Container.css';


export class Container extends React.Component {
  
  state = {
    box_amount: []
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log("getDerived..");
    if(nextProps !== prevState){
      return {
        box_amount: nextProps.amount
      }
    }
  }

  componentDidMount() {
    console.log(this.props.amount[0]);
  }

  componentDidUpdate() {

  }
  fetchCityData = () => {
    console.log("fetchCityData: ");
    const API_ID = '0eb99e84e2190cad3c7ba40bd3290167';
    const weather_url = `https://api.openweathermap.org/data/2.5/weather?id=${this.state.box_amount[0]}&units=metric&appid=${API_ID}`
    const data = fetch(weather_url)
      .then(response => response.json())
      .then(data => this.setState({
        data: data
      }))
      .catch(error => console.log(error))
  } 


  render() {
    return (
      <div>
        {
          
        }
      </div>
    )
  }
}



