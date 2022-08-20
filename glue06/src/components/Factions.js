import React, { Component } from 'react'

export default class Factions extends Component {
  render() {
    return (
      <div>
        <ul>
        <h1>Factions</h1>
          <li>{this.props.faction[0]}</li>
          <li>{this.props.faction[1]}</li>
          <li>{this.props.faction[2]}</li>
        </ul>
      </div>
    )
  }
}
