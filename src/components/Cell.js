import React from 'react'

class Cell extends React.Component {
  render() {
    return (
      <div style={cellStyle}>{this.props.letter.charAt(0)}</div>
    )
  }
}

Cell.defaultProps = {
  letter: 'T'
}

const cellStyle = {
  background: '#345',
  display: 'inline-block',
  width: '3rem',
  height: '3rem',
  textAlign: 'center',
  verticalAlign: 'middle',
  margin: '.2rem',
  padding: '.8rem',
  fontSize: '2rem',
  fontWeight: '500',
}

export default Cell
