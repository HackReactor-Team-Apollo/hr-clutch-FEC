import React from 'react'

class QuestionLoadAndAdd extends React.Component {
  constructor (props) {
    super(props)
    this.state = {

    }
  }


  render () {
    return (
      <div className='QALoadAndAddWrapper'>
        <button className='QALoadMore' onClick={this.props.loadMoreQuestions}> Load More Questions</button>
        <button className='QAAddQuestion'> Add New Question </button>
      </div>
    )
  }
}

export default QuestionLoadAndAdd
