import React from 'react';
import './Container.css';
import Caja from './Caja';

export class Container extends React.Component {

  state = {
    box_amount: [],
    keys: 0
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log("getDerivedStateFromProps");
    //console.log( prevState.box_amount);
    if (nextProps !== prevState) {
      return {
        box_amount: nextProps.amount
      }
    }

  }

  componentDidMount() {
    console.log("componentDidMount");
  }
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
 
  createBox = (box) => {
    return (
      <Caja
        id={box}
        remove={this.props.remove}
        key={box} />
    )
  }

  render() {
    return (
      <div className="container col-12 col-md-10 mx-auto my-3 px-auto" id='contenedor'>
        <div className="row my-3 mx-auto">
          {

            this.state.box_amount.map(box => {
              return this.createBox(box);
            })
          }
        </div>
      </div>
    )
  }
}



