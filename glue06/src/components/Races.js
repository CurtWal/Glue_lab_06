import React, { Component } from 'react'

export default class Races extends Component {
  render() {
    return (
      <div>
        <ul style={{ listStyleType: "none", display: 'grid', justifyContent: "center", }}>
          <h1>Races</h1>
          <li>{this.props.race[0]}</li>
          <li>{this.props.race[1]}</li>
          <li>{this.props.race[2]}</li>
          <li>{this.props.race[3]}</li>
          <li>{this.props.race[4]}</li>
          <li>{this.props.race[5]}</li>
          <li>{this.props.race[6]}</li>
          <li>{this.props.race[7]}</li>
          <li>{this.props.race[8]}</li>
          <li>{this.props.race[9]}</li>
          <li>{this.props.race[10]}</li>
          <li>{this.props.race[11]}</li>
          </ul>
      </div>
    )
  }
}
