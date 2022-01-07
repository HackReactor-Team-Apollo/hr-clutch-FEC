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

      <h2 > Questions and Answers </h2>
      <div className='QAAnsHeader'>
        <div className='QASearchForm'>
          <input type='text' onChange={this.props.onSearchChange} value={this.props.query} placeholder='Have a question?  Search for answers...' className='QASearchField' />

          <button className='QASearchClear' onClick={this.props.resetSearch}>
            <img src={QASearchClearIcon} />

          </button>
        </div>
      </div>
      </div>
    )
  }
}

export default QuestionsAndAnswersHeader
/*
value={this.props.query}
          <button  className='QASearchButton'>
            <img src={QASearchButtonIcon} />
          </button>
*/