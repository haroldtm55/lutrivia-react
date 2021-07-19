import React from 'react';

export default class QuestionCard extends React.Component {
  
  // state = {
  //   backgroundColorTrueButton: '',
  //   backgroundColorFalseButton: '',
  //   disableTrueButton: false,
  //   disableFalseButton: false,
  // }


  // handleClickTrueButton = () => {
  //   this.props.answer ? this.setState({backgroundColorTrueButton:'green',disableFalseButton: true}) : this.setState({backgroundColorTrueButton:'red', disableFalseButton: true})
  // }

  // handleClickFalseButton = () => {
  //    !this.props.answer ? this.setState({backgroundColorFalseButton:'green', disableTrueButton: true}) : this.setState({backgroundColorFalseButton:'red', disableTrueButton: true})
  // }
  
  defineStyle = () => {
    if (this.props.isCorrect) {
      return 'green'
    } else if (this.props.isCorrect === false){
      return 'red'
    }
  }

  render() {
    return (
      <div>
        <br/>
        <div>{this.props.question}</div>
        <button onClick={e=>this.props.handleClickTrueButton(e,this.props.answer,this.props.questionIndex)}
                style={{backgroundColor: this.defineStyle()}}
                disabled={this.props.isCorrect!==undefined}
                >True</button>
          
        <button onClick={e=>this.props.handleClickFalseButton(e,this.props.answer)}>False</button>
      </div>
    )
  }
}


// style={{backgroundColor: this.props.buttonState.backgroundColorTrueButton}}
// style={{backgroundColor: this.props.buttonState.backgroundColorFalseButton}}
// disabled={this.props.buttonState.disableTrueButton}
// disabled={this.props.buttonState.disableFalseButton}