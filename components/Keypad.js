const React = require('react')

class Keypad extends React.Component {

  constructor(){
    super()
    this.state = {pass: 'password'}
    // this.handleKeyUp = this.handleKeyUp.bind(this)
  }

  render(){
    return(
      <input type="password" onKeyUp={this.handleKeyUp} />
    )
  }

  handleKeyUp(event) {
    console.log('Entering password...')
  }

}

module.exports = Keypad
