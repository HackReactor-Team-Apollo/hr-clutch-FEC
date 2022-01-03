import React from 'react'
import AnswersBody from './AnswersBody.jsx'
import AnswerLoadAndAdd from './AnswerLoadAndAdd.jsx'
import axios from 'axios'

class QuestionWrapper extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      questionData: this.props.questionData,
      answerCount: 2
    }
    this.loadMoreAnswers = this.loadMoreAnswers.bind(this)
    this.questionHelpful = this.questionHelpful.bind(this)
    this.questionReported = this.questionReported.bind(this)
  }
  componentDidUpdate () {
    //console.log(this.state.questionData)
  }
  questionHelpful () {
    let questionID = this.state.questionData.question_id
    axios
      .put(`/qa/questions/${questionID}/helpful`)
      .then(() => {
        console.log(questionID)
        console.log('Marked helpful')
      })
      .catch(() => {
        console.log('failure')
      })
  }

  questionReported () {
    let questionID = this.state.questionData.question_id
    axios
      .put(`/qa/questions/${questionID}/report`)
      .then(() => {
        console.log(questionID)
        console.log('Reported')
      })
      .catch(() => {
        console.log('failure')
      })
  }
  loadMoreAnswers () {
    this.setState({ answerCount: (this.state.answerCount += 2) })
  }
  render () {
    let questionDate = this.state.questionData.question_date.split('T');
    const answerArray = []
    Object.keys(this.state.questionData.answers).map(element => {
      //console.log(this.state.questionData.answers[element])
      answerArray.push(this.state.questionData.answers[element])
    })
    const finalAnswerArray = answerArray.slice(0, this.state.answerCount)
    //console.log(this.state.questionData)
    return (
      <div className='QAElementWrapper'>
        <div className='QuesElementWrapper'>
          <div>
            <div className='QuestionUsernameText'>
              {this.state.questionData.asker_name} asked on{' '}
              {questionDate[0]}
            </div>
            <div className='QuestionText'>
              {this.state.questionData.question_body}
            </div>
          </div>
          <div className='QAQHRWrapper'>
            <div className='QAQHelpful'>
              Helpful?
              <div onClick={this.questionHelpful} className='QAQHelpfulTxt'>
                Yes
              </div>
              <div onClick={this.questionHelpful} className='QAQHelpfulTxt'>
                (2)
              </div>
            </div>
            <div onClick={this.questionReported} className='QAQReport'>
              {' '}
              Report Question?
            </div>
          </div>
        </div>

        <AnswersBody answerArray={finalAnswerArray} />
        <AnswerLoadAndAdd
          loadMoreAnswers={this.loadMoreAnswers}
          question_id={this.state.questionData.question_id}
        />
      </div>
    )
  }
}

export default QuestionWrapper
