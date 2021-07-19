import React from 'react';
import QuestionCard from './QuestionCard';
import questionsList from './data'

export default class QuestionsContainer extends React.Component {
  state = {
    score: null,
    answersArray: new Array(questionsList.length).fill(undefined)
    // buttonState: {
    //   backgroundColorTrueButton: '',
    //   backgroundColorFalseButton: '',
    //   disableTrueButton: false,
    //   disableFalseButton: false
    // }
  }

  handleClickTrueButton = (e, answer, questionIndex) => {
    if (answer) {
      const newAnswersArray = [...this.state.answersArray]
      newAnswersArray[questionIndex] = true
      this.setState({
       answersArray: newAnswersArray
      })
      // e.target.style.backgroundColor = 'green'
    } else {
      const newAnswersArray = [...this.state.answersArray]
      newAnswersArray[questionIndex] = false
      this.setState({
        answersArray: newAnswersArray
       })
      // e.target.style.backgroundColor = 'red'
    }
  }

  handleClickFalseButton = (e, answer) => {
    if (!answer) {
      // this.setState({
      //   buttonState: {
      //     ...this.state.buttonState,
      //     backgroundColorFalseButton:'green',
      //     disableTrueButton: true
      //   }
      // })
      e.target.style.backgroundColor = 'green'
    } else {
      // this.setState({
      //   buttonState: {
      //     ...this.state.buttonState,
      //     backgroundColorFalseButton:'red',
      //     disableTrueButton: true
      //   }
      // })
      e.target.style.backgroundColor = 'red' 
    }
  }
  
  renderQuestionCards = () => {
    return questionsList.questions.map((question,idx) => {
      return <QuestionCard 
                key={idx}
                questionIndex={idx} 
                question={question.text} 
                answer={question.answer} 
                handleClickTrueButton={this.handleClickTrueButton} 
                handleClickFalseButton={this.handleClickFalseButton}
                buttonState={this.state.buttonState}
                isCorrect={this.state.answersArray[idx]}/>
    })
  }
  
  render() {
    return (
      <div>
        <button>New Game</button>
        <span>Score: {this.state.score }</span>
        {this.renderQuestionCards()}
      </div>
    )
  }
}