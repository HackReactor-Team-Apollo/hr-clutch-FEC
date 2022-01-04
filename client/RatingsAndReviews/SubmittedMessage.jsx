import React from 'react';

class SubmittedMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
    this.renderSubmittedMessage = this.renderSubmittedMessage.bind(this);
  }
  renderSubmittedMessage() {
    if (this.props !== undefined) {
      if (this.props.postWorked === true) {
        return (
          <span className="submittedSuccess">Submitted!</span>
        )
      }
      if (this.props.postWorked === false) {
        return (
          <div className="submittedRev"> Submission denied. Please make sure of the following:
            <ul>
              <li>No mandatory(*) fields are blank</li>
              <li>The review body is at least 50 characters</li>
              <li>The email address is valid</li>
              <li>The image(s) are valid and able to be uploaded</li>
            </ul>
          </div>
        )
      }
    }
  }
  componentDidUpdate(prevProps) {
    if(this.props !== undefined && prevProps !== undefined) {

      if (this.props.postWorked !== prevProps.postWorked) {
        this.renderSubmittedMessage();
      }
    }
  }
  render () {
    return (
      <>

        {this.renderSubmittedMessage()}
      </>
    )
  }
}

export default SubmittedMessage;