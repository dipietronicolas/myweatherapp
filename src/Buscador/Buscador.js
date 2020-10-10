import React from 'react';
import './Buscador.css';
import { country_list } from './country_code';

import { BuscadorPaises } from './BuscadorPaises';
import { BuscadorCiudades } from './BuscadorCiudades';

export class Buscador extends React.Component {

  state = {
    country_code: '',
    city_code: '',
    show_city_search: false
  }

  toggleFalseShowCitySearch = () => {
    this.setState({
      show_city_search: false
    })
  }

  setCountryCode = (code) => {
    this.setState({
      country_code: code,
      show_city_search: true
    })
  }

  setCityCode = (code) => {
    this.setState({
      city_code: code
    }, () => {
      this.props.fetchCityData(code);
    })
  }

  render() {
    return (
      <div className="container col-sm-10 col-md-8 col-lg-6 mt-3" id="buscador">
        <h1>myWeather App.</h1>

        <div className="row my-3">
          <BuscadorPaises
            country_list={country_list}
            countryCode={this.setCountryCode}
            toggleFalseShowCitySearch={this.toggleFalseShowCitySearch} />
          {
            this.state.show_city_search
              ? <BuscadorCiudades
                country_code={this.state.country_code}
                cityCode={this.setCityCode} />
              : ''
          }
          
        </div>
      </div>
    )
  }
}
