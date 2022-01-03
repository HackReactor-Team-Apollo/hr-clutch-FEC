import React from 'react'
import QAModal from './QAModal.jsx'
import axios from 'axios'

class AnswerLoadAndAdd extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      modalVisible: false,
      btnsVisible: true,
      usernameText: '',
      answerText: '',
      emailAddressText: '',
      photoURLs: []
    }
    this.showModal = this.showModal.bind(this)
    this.hideModal = this.hideModal.bind(this)
    this.submitAnswer = this.submitAnswer.bind(this)
    this.onChange = this.onChange.bind(this)
  }

  showModal = () => {
    this.setState({ modalVisible: true, btnsVisible: false })
  }

  hideModal = () => {
    this.setState({ modalVisible: false, btnsVisible: true })
  }
  onChange = event => {
    this.setState({ [event.target.id]: event.target.value })
  }
  submitAnswer = () => {
    let dataObj = {
      question_id: this.props.question_id,
      body: this.state.answerText,
      name: this.state.usernameText,
      email: this.state.emailAddressText,
      photos: this.state.photoURLs
    }
    axios
      .post(`/qa/questions/${this.props.question_id}/answers`, dataObj)
      .then(() => {
        console.log('Submitted')
      })
      .then(() => {
        this.hideModal()
      })
      .catch(() => {
        console.log('failure')
      })
  }
  render () {
    const showHideClassName = this.state.btnsVisible
      ? 'addAnswerButton display-block'
      : 'addAnswerButton display-none'
    return (
      <div className='QALoadAndAddWrapper'>
        <button
          className={showHideClassName}
          onClick={this.props.loadMoreAnswers}
        >
          {' '}
          Load More Answers
        </button>
        <QAModal
          show={this.state.modalVisible}
          onChange={this.onChange}
          submit={this.submitAnswer}
          handleClose={this.hideModal}
        >
          <form className='QAModalOverlay'>
            <input
              id='usernameText'
              className='QAModalUsernameInputText'
              type='text'
              onChange={this.onChange}
              placeholder='Username'
            ></input>
            <input
              id='emailAddressText'
              className='QAModalUsernameInputText'
              type='text'
              onChange={this.onChange}
              placeholder='Email Address'
            ></input>
            <input
              id='answerText'
              className='QAModalAnswerInputText'
              type='text'
              onChange={this.onChange}
              placeholder='Answer Text Here'
            ></input>
            <input
              id='photoURLs'
              className='QAModalUsernameInputText'
              type='text'
              placeholder='Add Photo URLs Here'
            ></input>
          </form>
        </QAModal>
        <button
          type='button'
          onClick={this.showModal}
          className={showHideClassName}
        >
          Add New Answer +
        </button>
      </div>
    )
  }
}

export default AnswerLoadAndAdd
