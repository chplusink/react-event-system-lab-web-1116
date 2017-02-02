const React = require('react')

class EyesOnMe extends React.Component {

  constructor(){
    super()
  }

  render(){
    return(
      <button onFocus={this.handleFocus} onBlur={this.handleBlur}></button>
    )
  }

  handleFocus(event){
    console.log('Good!')
  }

  handleBlur(event){
    console.log('Hey! Eyes on me!')
  }

}

module.exports = EyesOnMe
