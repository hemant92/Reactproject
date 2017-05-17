import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import Beer from './Beer';
import sampleBeers from '../sample-beers';

class App extends React.Component {
  constructor() {
    super();

    this.addBeer = this.addBeer.bind(this);
    this.loadSamples = this.loadSamples.bind(this);
    this.addToOrder = this.addToOrder.bind(this);

    // getinitialState
    this.state = {
      beers: {},
      order: {}
    };
  }

  addBeer(beer) {
    // update our state
    const beers = {...this.state.beers};
    // add in our new beer
    const timestamp = Date.now();
    beers[`beer-${timestamp}`] = beer;
    // set state
    this.setState({ beers });
  }

  loadSamples() {
    this.setState({
      beers: sampleBeers
    });
  }

  addToOrder(key) {
    // take a copy of our state
    const order = {...this.state.order};
    // update or add the new number of beer ordered
    order[key] = order[key] + 1 || 1;
    // update our state
    this.setState({ order });
  }

  render() {
    return (
      <div className="beer-store">
        <div className="menu">
          <Header tagline="Hoppiness Is Happiness" />
          <ul className="list-of-beers">
            {
              Object
                .keys(this.state.beers)
                .map(key => <Beer key={key} index={key} details={this.state.beers[key]} addToOrder={this.addToOrder}/>)
            }
          </ul>
        </div>
        <Order beers={this.state.beers} order={this.state.order}/>
        <Inventory addBeer={this.addBeer} loadSamples={this.loadSamples} />
      </div>
    )
  }
}

export default App;
