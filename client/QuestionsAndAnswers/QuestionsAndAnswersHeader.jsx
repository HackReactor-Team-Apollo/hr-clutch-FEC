import React from 'react'
import QASearchButtonIcon from '../assets/QASearchButtonIcon.png'
import QASearchClearIcon from '../assets/QASearchClearIcon.png'


class QuestionsAndAnswersHeader extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <div>
        <h4 className='QAHeader'> Questions and Answers </h4>
        <div className='QASearchForm'>
          <button className='QASearchButton' type='submit'>
            <img src={QASearchButtonIcon} />
          </button>
          <input type='text' placeholder='Search Questions' className='QASearchField' />

          <button className='QASearchClear' type='reset'>
            <img src={QASearchClearIcon} />

          </button>
        </div>
      </div>
    )
  }
}

export default QuestionsAndAnswersHeader
