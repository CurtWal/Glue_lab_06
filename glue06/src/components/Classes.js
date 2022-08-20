import React, { Component } from 'react'

export default class Classes extends Component {
  render() {
    return (
      <div><ul style={{ listStyleType: "none", display: 'grid', justifyContent: "center", }}>
      <h1>Classes</h1>
      <li>{this.props.class[0]}</li>
      <li>{this.props.class[1]}</li>
      <li>{this.props.class[2]}</li>
      <li>{this.props.class[3]}</li>
      <li>{this.props.class[4]}</li>
      <li>{this.props.class[5]}</li>
      <li>{this.props.class[6]}</li>
      <li>{this.props.class[7]}</li>
      <li>{this.props.class[8]}</li>
      <li>{this.props.class[9]}</li>
      <li>{this.props.class[10]}</li>
      <li>{this.props.class[11]}</li>
      <li>{this.props.class[12]}</li>
      <li>{this.props.class[13]}</li>
      </ul>
      </div>
    )
  }
}
