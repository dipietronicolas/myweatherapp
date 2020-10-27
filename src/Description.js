import React from 'react';

export class Description extends React.Component {

  render() {
    return (
      <div className="card">
        <a className="btn btn-primary" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
          <h4>Click here for a project description</h4>
        </a>
        <div className="collapse" id="collapseExample">
          <div className='card-body'>
            <h3 className='card-title'>
              myWeatherApp.
          </h3>
            <p>
              Take the weather info of any city you want anywhere! 
              With myWeatherApp you can find many cities and watch their
              weather report at the same time.
            </p>
            <p>
              This project was made with ReactJs and Bootstrap 4 on the front end. 
              It works by fetching an API from https://openweathermap.org/api, processing 
              the data and showing it on React components.
            </p>
          </div>
        </div>
      </div>
    )
  }
}