import React from 'react';
import { Description } from './Description';
import { Container } from './Container';
import { Buscador } from './Buscador/Buscador';
import './App.css';

class App extends React.Component {

  state = {
    boxes_created: 0,
    box_amount: [],
    city_code: '',
    show_container: false
  }
  /* [3433955, 3432043, 3430863] bsas la plata mardel */
  fetchCityData = (city_code) => {
    this.setState({
      city_code: city_code,
      show_container: true
    }, () => {
      this.boxIncrease();

    })
  }

  boxIncrease = () => {
    //let id = this.state.boxes_created + 1;
    let id = this.state.city_code;
    let array_aux = this.state.box_amount;
    array_aux.push(id);
    this.setState({
      boxes_created: this.state.boxes_created + 1,
      box_amount: array_aux
    })
  }

  removeBoxes = (id) => {
    let array_aux = this.state.box_amount, boxes_created_aux = this.state.boxes_created;
    array_aux = array_aux.filter(function (elemento) {
      return elemento !== id;
    })
    boxes_created_aux -= 1;
    this.setState({
      boxes_created: boxes_created_aux,
      box_amount: array_aux
    })
  }


  render() {
    return (
      <div className="App">
        <div className="container-fluid">
          
            <div className="col-11 col-sm-7 col-lg-6 mx-auto mt-3">
              <Description />
            </div>
            <div className="col-12 col-xl-10 mx-auto">
              <Buscador
                user={this.props.user}
                increase_button={this.boxIncrease}
                fetchCityData={this.fetchCityData} />
              {this.state.show_container
                ? <Container
                  boxes={this.state.boxes_created}
                  amount={this.state.box_amount}
                  remove={this.removeBoxes} />
                : ''
              }

            </div>
          

        </div>
      </div>
    )
  }
}

export default App;
