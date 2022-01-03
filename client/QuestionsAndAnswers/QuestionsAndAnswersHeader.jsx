import React from 'react'
import QASearchButtonIcon from '../assets/QASearchButtonIcon.png'
import QASearchClearIcon from '../assets/QAExitIcon.png'


class QuestionsAndAnswersHeader extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <div>
        <h2 className='QAHeader'> Questions and Answers </h2>
        <div className='QASearchForm'>
          <button className='QASearchButton' type='submit'>
            <img src={QASearchButtonIcon} />
          </button>
          <input type='text' placeholder='Have a question?  Search for answers...' className='QASearchField' />

          <button className='QASearchClear' type='reset'>
            <img src={QASearchClearIcon} />

          </button>
        </div>
      </div>
    )
  }
}

export default QuestionsAndAnswersHeader
