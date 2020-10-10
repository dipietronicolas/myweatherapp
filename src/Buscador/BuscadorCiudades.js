import React, { useState } from 'react';
import city_listDos from './city_listDos.json';

export const BuscadorCiudades = (props) => {


  const [city_render, setCityRender] = useState([]);
  let city_searchRef = React.createRef();


  const deleteSearch = () =>{
    city_searchRef.current.value = '';
  }

  const cityRenderList = (city) => {
    if (city_render.length > 0) {

      return (
        <li
          key={city.id}
          className={"list-group-item bg-dark arriba"}
          onClick={() => {
            city_searchRef.current.value = city.name;
            props.cityCode(city.id);
            setCityRender([]);
          }}
          onMouseEnter={() => { }}
          onMouseLeave={() => { }}>
          {city.name}
        </li>

      )

    }
  }

  const handleCityList = function () {
    const list = city_listDos.filter((ciudad) => {
      return ciudad.country === props.country_code;
    })
    return list;
  }

  const cityOnChange = (e) => {
    const city_list = handleCityList();
    const search_item = e.target.value.toLowerCase();
    let results = [];

    if (search_item.length > 0) {
      for (let city of city_list) {
        const nombre = city.name.toLowerCase();
        if (nombre.indexOf(search_item) !== -1) {
          results.push(city);
        }
        if (results.length > 8) {
          break;
        }
      }
    } else {
      results = [];
    }
    setCityRender(results);
  }



  return (
    <div className="col-6 col-md-6" id='search_city_form' >
      <h5 className="my-3">City name:</h5>
      <div className="input-group">
        <input
          onChange={cityOnChange}
          onClick={deleteSearch}
          ref={city_searchRef}
          type="text"
          className="form-control"
          id="search_city_keyword"
          placeholder="Ej: Buenos Aires" />
        <div className="input-group-append">
        </div>
      </div>
      <ul id='resultado' className="list-group mt-3 position-absolute">
        {
          city_render.map(city => {
            return cityRenderList(city)
          })
        }
      </ul>


    </div>
  )
}