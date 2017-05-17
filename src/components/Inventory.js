import React from 'react';
import AddBeerForm from './AddBeerForm';

class Inventory extends React.Component {
  render() {
    return (
      <div>
        <h2>Inventory</h2>
        <AddBeerForm addBeer={this.props.addBeer}/>
        <button onClick={this.props.loadSamples}>Load Sample Beers</button>
      </div>
    )
  }
}

export default Inventory;
