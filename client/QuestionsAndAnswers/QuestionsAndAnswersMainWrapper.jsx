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
      currentPage: 1,
      questionsPerLoad: 20,
      questionArray: [],
      questionsToLoad: 2
    }
    this.getQuestions = this.getQuestions.bind(this)
    this.loadMoreQuestions = this.loadMoreQuestions.bind(this)
  }
  componentDidMount () {
    //Update state with api data
    //Render some number of QA elements

    this.getQuestions()
  }
  //Functional discussion
  /* HELPER FUNCTIONS */

  //OnChange - Utilized to update question/answer text boxes
  onChange (e) {
    //Event handler, use e.target.value to update state
  }

  loadMoreQuestions () {
    this.setState({questionsToLoad: this.state.questionsToLoad + 2})
  }
  getQuestions () {
    //Populate 2 more question and answer elements
    //Call on load?

    //Axios Request
    axios
      .get(
        `/qa/questions/?product_id=${this.props.product_id}&page=${this.state.currentPage}&count=${this.state.questionsPerLoad}`
      )
      .then(res => {
        this.setState(
          { questionArray: this.state.questionArray.concat(res.data) })
      })
      .then(() => {
        //console.log("getQuestions Fired",this.state.currentPage)
        this.setState({currentPage:(this.state.currentPage+=1)})
      })
      .catch(err => {
        console.log(err)
        console.log('Failed to get more questions')
      })
  }


  componentDidUpdate(prevProps) {
    if (this.props.product_id !== prevProps.product_id) {
    this.setState({questionArray:[]}, this.getQuestions())
    }
  }
  render () {
    let questionArray = [...this.state.questionArray]
    let spliceCount = this.state.questionsToLoad
    let remainderQuestions = questionArray.splice(this.state.questionsToLoad)
    return (
      <div className='QABodyWrapper'>
        <QuestionsAndAnswersHeader />
        <QuestionAnswerBody questionArray={questionArray} />
        <QuestionLoadAndAdd
          loadMoreQuestions={this.loadMoreQuestions}
          submitQuestion={this.submitQuestion}
          product_id={this.props.product_id}
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
