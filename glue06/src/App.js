import React, { Component } from 'react'
import axios from 'axios'

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      classes: '',
      races: '',
      factions: ''
    };
  }
  handleSubmit = async () => {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'f7d7126f45mshaf5eb54ea15b719p1c7f00jsn1aa87fad26c6',
        'X-RapidAPI-Host': 'omgvamp-hearthstone-v1.p.rapidapi.com'
      }
    }; const API = 'https://omgvamp-hearthstone-v1.p.rapidapi.com/info'
    const res = await axios.get(API, options)
    console.log(res.data)
    this.setState({
      classes: res.data.classes,
      races: res.data.races,
      factions: res.data.factions
    })
  }
  render() {
    return (
      <div>
        <h1 className='title'>HearthStone Card Info</h1>
        <button className='button' onClick={this.handleSubmit}>Click</button>

        <ul style={{ listStyleType: "none", display: 'grid', justifyContent: "center", }}>
          <h1>Classes</h1>
          <li>{this.state.classes[0]}</li>
          <li>{this.state.classes[1]}</li>
          <li>{this.state.classes[2]}</li>
          <li>{this.state.classes[3]}</li>
          <li>{this.state.classes[4]}</li>
          <li>{this.state.classes[5]}</li>
          <li>{this.state.classes[6]}</li>
          <li>{this.state.classes[7]}</li>
          <li>{this.state.classes[8]}</li>
          <li>{this.state.classes[9]}</li>
          <li>{this.state.classes[10]}</li>
          <li>{this.state.classes[11]}</li>
          <li>{this.state.classes[12]}</li>
          <li>{this.state.classes[13]}</li>
          <h1>Races</h1>
          <li>{this.state.races[0]}</li>
          <li>{this.state.races[1]}</li>
          <li>{this.state.races[2]}</li>
          <li>{this.state.races[3]}</li>
          <li>{this.state.races[4]}</li>
          <li>{this.state.races[5]}</li>
          <li>{this.state.races[6]}</li>
          <li>{this.state.races[7]}</li>
          <li>{this.state.races[8]}</li>
          <li>{this.state.races[9]}</li>
          <li>{this.state.races[10]}</li>
          <li>{this.state.races[11]}</li>
          <h1>Factions</h1>
          <li>{this.state.factions[0]}</li>
          <li>{this.state.factions[1]}</li>
          <li>{this.state.factions[2]}</li>
        </ul>
      </div>
    );
  }
}
