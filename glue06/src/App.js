import React, { Component } from 'react'
import axios from 'axios'
import Classes from './components/Classes';
import Races from './components/Races';
import Factions from './components/Factions';
import {Button} from 'react-bootstrap'

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
      <div style={{ listStyleType: "none", display: 'grid', justifyContent: "center", }}>
        <h1 className='title'>HearthStone Card Info</h1>
        <Button className='button' variant='success' onClick={this.handleSubmit}>Click for Info</Button>
        <Classes  class={this.state.classes}/>
        <Races race={this.state.races}/>
        <Factions faction={this.state.factions}/>
      </div>
    );
  }
}
