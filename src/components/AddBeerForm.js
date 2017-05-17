import React from 'react';

class AddBeerForm extends React.Component {
  createBeer(event) {
    event.preventDefault();
    console.log('GOnna make some beer! 🎣');
    const beer = {
      name: this.name.value,
      price: this.price.value,
      status: this.status.value,
      desc: this.desc.value,
      image: this.image.value,
    }
    this.props.addBeer(beer);
    this.beerForm.reset();
  }

  render() {
    return (
      <form ref={(input) => this.beerForm = input} className="beer-edit" onSubmit={(e) => this.createBeer(e)}>
        <input ref={(input) => this.name = input} type="text" placeholder="Beer Name" />
        <input ref={(input) => this.price = input} type="text" placeholder="Beer Price" />
        <select ref={(input) => this.status = input}>
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out!</option>
        </select>
        <textarea ref={(input) => this.desc = input} placeholder="Beer Desc" ></textarea>
        <input ref={(input) => this.image = input} type="text" placeholder="Beer Image" />
        <button type="submit">+ Add Item</button>
      </form>
    )
  }
}

export default AddBeerForm;
