import React from 'react';

export default class ImageComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
    this.handleShowDialog = this.handleShowDialog.bind(this);
  }


  handleShowDialog () {
    this.setState({ isOpen: !this.state.isOpen });
    console.log('clicked');
  };

  render() {
    return (
      <div style={{ gridColumn: this.props.column }}>
        <div className="reviewImageDiv" style={{ gridColumn: this.props.column }}>
          <img
            className="reviewImage"
            src={this.props.src}
            key={this.props.key}
            onClick={this.handleShowDialog}
            alt="no image"

          />
        </div>
        {this.state.isOpen && (
          <dialog
            className="dialog"
            style={{ position: 'absolute'}}
            open
            onClick={this.handleShowDialog}
          >
            <img
              className="image"
              src={this.props.src}
              onClick={this.handleShowDialog}
              alt="no image"
            />
          </dialog>
        )}
      </div>
    );
  }
}