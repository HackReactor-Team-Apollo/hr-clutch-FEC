/* Author: */
//Import Library Dependencies
import React from 'react'
import axios from 'axios'

//Import Component
import QuestionsAndAnswersHeader from './QuestionsAndAnswersHeader.jsx'
import QuestionAnswerBody from './QuestionAnswerBody.jsx'
import QuestionLoadAndAdd from './QuestionLoadAndAdd.jsx'

class QuestionsAndAnswers extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      productID: this.props.product_id,
      currentPage: 1,
      questionsPerLoad: 2,
      questionArray: []
    }
    this.loadMoreQuestions = this.loadMoreQuestions.bind(this)
  }
  componentDidMount () {
    //Update state with api data
    //Render some number of QA elements

    this.loadMoreQuestions()
  }
  //Functional discussion
  /* HELPER FUNCTIONS */

  //OnChange - Utilized to update question/answer text boxes
  onChange (e) {
    //Event handler, use e.target.value to update state
  }

  loadMoreQuestions () {
    //Populate 2 more question and answer elements
    //Call on load?

    //Axios Request
    axios
      .get(
        `/qa/questions/?product_id=${this.state.productID}&page=${this.state.currentPage}&count=${this.state.questionsPerLoad}`
      )
      .then(res => {
        this.setState(
          { questionArray: this.state.questionArray.concat(res.data) })
      })
      .then(() => {
        //console.log("LoadMoreQuestions Fired",this.state.currentPage)
        this.setState({currentPage:(this.state.currentPage+=1)})
      })
      .catch(err => {
        console.log(err)
        console.log('Failed to get more questions')
      })
  }

  submitAnswer () {
    //pass answer input value to axios post request, then update question data
  }

  submitQuestion () {
    //pass question input value to axios post request, then update question data
  }

  /****** QA Helpful/Report Functions ******/
  //QuestionHelpful
  //QuestionReport
  //AnswerHelpful
  //AnswerReport

  render () {
    //console.log(this.state.questionArray, "console here")
    return (
      <div className='QABodyWrapper'>
        <QuestionsAndAnswersHeader />
        <QuestionAnswerBody questionArray={this.state.questionArray} />
        <QuestionLoadAndAdd
          loadMoreQuestions={this.loadMoreQuestions}
          submitQuestion={this.submitQuestion}
        />
      </div>
    )
  }
}
export { QuestionsAndAnswers }

/* placeholder
<div className='questAns'>
  questAns
  <div className='quesTop'>quesTop</div>
  <div className='quesMid'>quesMid</div>
  <div className='quesBot'>quesBot</div>
</div>

*/
