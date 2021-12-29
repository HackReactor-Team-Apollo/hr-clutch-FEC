import React from 'react'
import AnswersBody from './AnswersBody.jsx'
import AnswerLoadAndAdd from './AnswerLoadAndAdd.jsx'

class QuestionWrapper extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      questionData: this.props.questionData,
      answerCount: 2
    }
    this.loadMoreAnswers = this.loadMoreAnswers.bind(this)
    this.questionHelpful = this.questionHelpful.bind(this)
  }
componentDidUpdate() {

  //console.log(this.state.questionData)
}
questionHelpful() {
  console.log(this.state.questionData)
}

loadMoreAnswers() {
  this.setState({answerCount:(this.state.answerCount+=2)})
}
  render () {
    const answerArray=[];
    Object.keys(this.state.questionData.answers).map((element) => {
      //console.log(this.state.questionData.answers[element])
      answerArray.push(this.state.questionData.answers[element])
    });
    const finalAnswerArray = answerArray.slice(0, this.state.answerCount)
    //console.log(this.state.questionData)
    return (
      <div className='QAElementWrapper'>
        <div className='QuesElementWrapper'>
          <div className='QuestionText'>{this.state.questionData.question_body}</div>
          <div className='QAQHRWrapper'>
            <button onClick={this.questionHelpful} className='QAQHelpful'>
              <div >Helpful?</div>
              <div onClick={this.questionHelpful} className='QAQHelpfulTxt'>Yes</div>
              <div onClick={this.questionHelpful} className='QAQHelpfulTxt'>(2)</div>
            </button>
            <div className='QAQReport'> Report Question?</div>
          </div>
        </div>

        <AnswersBody answerArray={finalAnswerArray}/>
        <AnswerLoadAndAdd loadMoreAnswers={this.loadMoreAnswers}/>
      </div>
    )
  }
}

export default QuestionWrapper
