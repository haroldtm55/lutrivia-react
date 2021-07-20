import React from 'react';

export default class QuestionCard extends React.Component {

  defineStyleTrueButton = () => {
    if (this.props.isCorrect) {
      return 'green'
    } else if (this.props.isCorrect === false){
      return 'red'
    }
  }

  defineStyleFalseButton = () => {
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
        <button onClick={()=>this.props.handleClickTrueButton(this.props.answer,this.props.questionIndex)}
                style={{backgroundColor: this.defineStyleTrueButton()}}
                disabled={this.props.isCorrect!==undefined}
                >True
        </button>
          
        <button onClick={()=>this.props.handleClickFalseButton(this.props.answer,this.props.questionIndex)}
                style={{backgroundColor: this.defineStyleFalseButton()}}
                disabled={this.props.isCorrect!==undefined}
                >False
        </button>
      </div>
    )
  }
}