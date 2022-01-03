import React from 'react'
import QuestionWrapper from './QuestionWrapper.jsx'

class QuestionAnswerBody extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      questionArray: this.props.questionArray,
      renderedQuestionWrappers: []
    }
  }
  componentDidMount () {
    //populate
    //console.log(this.state.questionArray)

  }

  render () {
    const questionArray = this.props.questionArray
    const assembledQuestions = questionArray.map((element, index) => {
      return <QuestionWrapper
        key={element.question_id.toString()}
        questionData={element}
      />
    })
    // console.log('render time')
    //   console.log(
    //   this.props.questionArray,
    //   ' and ',
    //   assembledQuestions,
    //   ' and also ',
    //   questionArray
    // )
    return (
    <div>{assembledQuestions}</div>
    )
  }
}

export default QuestionAnswerBody
