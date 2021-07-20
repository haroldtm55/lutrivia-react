import React from 'react';
import QuestionCard from './QuestionCard';
import questionsList from './data'

export default class QuestionsContainer extends React.Component {
  state = {
    finalScore: 0,
    answersArray: new Array(questionsList.length).fill(undefined)
  }

  initialState = {
    finalScore: 0,
    answersArray: new Array(questionsList.length).fill(undefined)
  }

  handleClickTrueButton = (answer, questionIndex) => {
    if (answer) {
      const newAnswersArray = [...this.state.answersArray]
      newAnswersArray[questionIndex] = true
      let score = this.state.finalScore + 1
      this.setState({
       answersArray: newAnswersArray,
       finalScore: score
      })
    } else {
      const newAnswersArray = [...this.state.answersArray]
      newAnswersArray[questionIndex] = false
      this.setState({
        answersArray: newAnswersArray
       })
    }
  }

  handleClickFalseButton = (answer, questionIndex) => {
    if (!answer) {
      const newAnswersArray = [...this.state.answersArray]
      newAnswersArray[questionIndex] = true
      let score = this.state.finalScore + 1
      this.setState({
       answersArray: newAnswersArray,
       finalScore: score
      })
    } else {
      const newAnswersArray = [...this.state.answersArray]
      newAnswersArray[questionIndex] = false
      this.setState({
        answersArray: newAnswersArray
       })
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
        <button onClick={()=>this.setState(this.initialState)}>New Game</button>
        <span>Score: {this.state.finalScore }</span>
        {this.renderQuestionCards()}
      </div>
    )
  }
}