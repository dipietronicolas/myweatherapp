import React, { useState } from 'react';

export const BuscadorPaises = (props) => {


  const [country_render, setCountry_render] = useState([]);
  let country_searchRef = React.createRef();


  const countryRenderList = (country) => {
    if (country_render.length > 0) {
      return (
        <li
          key={country.iso2}
          className={"list-group-item bg-dark arriba"}
          onClick={() => {
            country_searchRef.current.value = country.nombre;
            //setCountry_code(country.iso2);
            props.countryCode(country.iso2);
            setCountry_render([]);
            
          }}
          onMouseEnter={() => { }}
          onMouseLeave={() => { }}>
          {country.nombre}
        </li>
      )
    }
  }

  const countryOnChange = (e) => {
    const search_item = e.target.value.toLowerCase();
    let results = [];
    
    if (search_item.length > 0) {
      for (let country of props.country_list) {
        let nombre = country.nombre.toLowerCase();
        if (nombre.indexOf(search_item) !== -1) {
          results.push(country);
        }
        if (results.length > 5) {
          break;
        }
      }
    } else {
      results = [];
    }
  
    setCountry_render(results);
    if(results.length > 1){
      props.toggleFalseShowCitySearch();
    }
   
  }

  return (
    <div className="col-6 col-md-6">
      <h5 className="my-3">Busque algun pais</h5>
      <div className="input-group">

        <input
          onChange={countryOnChange}
          ref={country_searchRef}
          type="text"
          className="form-control"
          id="search_country_keyword"
          placeholder="Ej: Argentina"
          autoFocus />
        <div className="input-group-append">
        </div>

      </div>

      <ul id='resultado' className="list-group mt-3 position-absolute">
        {
          country_render.map(country => {
            return countryRenderList(country)
          })
        }
      </ul>


    </div>
  )

}

