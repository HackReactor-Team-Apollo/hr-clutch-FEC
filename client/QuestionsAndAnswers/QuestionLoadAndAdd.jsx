import React from 'react'
import axios from 'axios'
import QAModal from './QAModal.jsx'

class QuestionLoadAndAdd extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      product_id: this.props.product_id,
      modalVisible: false,
      btnsVisible: true,
      usernameText: '',
      questionText: '',
      emailAddressText: ''
    }
    this.showModal = this.showModal.bind(this)
    this.hideModal = this.hideModal.bind(this)
    this.submitQuestion = this.submitQuestion.bind(this)
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
  submitQuestion = () => {
    let productID = this.state.product_id
    let dataObj = {
      body: this.state.questionText,
      name: this.state.usernameText,
      email: this.state.emailAddressText,
      product_id: productID
    }
    axios
      .post(`/qa/questions`, dataObj)
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
      ? 'QAModalBtn display-block'
      : 'QAModalBtn display-none'
    return (
      <div className='QALoadAndAddWrapper'>
        <button
          className={showHideClassName}
          onClick={this.props.loadMoreQuestions}
        >
          More Answered Questions
        </button>
        <QAModal
          show={this.state.modalVisible}
          onChange={this.onChange}
          submit={this.submitQuestion}
          handleClose={this.hideModal}
          product_id={this.props.product_id}
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
              id='questionText'
              className='QAModalAnswerInputText'
              type='text'
              onChange={this.onChange}
              placeholder='Question Text Here'
            ></input>
          </form>
        </QAModal>
          <button
            type='button'
            onClick={this.showModal}
            className={showHideClassName}
          >
            Add New Question +
          </button>
      </div>
    )
  }
}

export default QuestionLoadAndAdd
