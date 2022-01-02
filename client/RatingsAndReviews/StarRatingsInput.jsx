import React from 'react';

class StarRatingsInput extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      onestar: 1,
      twostar: 2,
      threestar: 3,
      fourstar: 4,
      fivestar: 5,
      rating: 0
    };
    this.handleClick = this.handleClick.bind(this);
    this.starRender = this.starRender.bind(this);
  }
  handleClick(event) {
    let that = this;
    let value = event.target.attributes.getNamedItem('name').value;

    let makeRating = () => {
      return new Promise(function (resolve, reject) {
        that.setState({rating: that.state[value], [value]: true}, function (error, result) {
          if (error) {
            reject(error);
          } else {
            resolve(result);
          }
        });
      });
    };
    makeRating()
      .then(function (result) {
        that.starRender();
      })
      .then(function(result) {
        that.props.captureRating(that.state.rating)
      })
      .catch(function (error) {
        console.log('Star Clicking Error:', error);
      })

  }
  starRender() {
    let starObj = this.state;

    if (starObj.onestar === true) {


      return (
        <>
          <span  className="starchooseone" name="onestar" onClick={this.handleClick}>&#9733; </span>
          <span className="starchoosetwo" name="twostar" onClick={this.handleClick}>&#9734; </span>
          <span className="starchoosethree" name="threestar" onClick={this.handleClick}>&#9734; </span>
          <span className="starchoosefour" name="fourstar" onClick={this.handleClick}>&#9734; </span>
          <span className="starchoosefive" name="fivestar" onClick={this.handleClick}>&#9734; </span>
        </>
        );
      }
      if (starObj.twostar === true) {

        return (
          <>
            <span  className="starchooseone" name="onestar" onClick={this.handleClick}>&#9733; </span>
            <span className="starchoosetwo" name="twostar" onClick={this.handleClick}>&#9733; </span>
            <span className="starchoosethree" name="threestar" onClick={this.handleClick}>&#9734; </span>
            <span className="starchoosefour" name="fourstar" onClick={this.handleClick}>&#9734; </span>
            <span className="starchoosefive" name="fivestar" onClick={this.handleClick}>&#9734; </span>
          </>
        );
      }
      if (starObj.threestar === true) {

        return (
          <>
            <span  className="starchooseone" name="onestar" onClick={this.handleClick}>&#9733; </span>
            <span className="starchoosetwo" name="twostar" onClick={this.handleClick}>&#9733; </span>
            <span className="starchoosethree" name="threestar" onClick={this.handleClick}>&#9733; </span>
            <span className="starchoosefour" name="fourstar" onClick={this.handleClick}>&#9734; </span>
            <span className="starchoosefive" name="fivestar" onClick={this.handleClick}>&#9734; </span>
          </>
        );
      }
      if (starObj.fourstar === true) {

        return (
          <>
            <span  className="starchooseone" name="onestar" onClick={this.handleClick}>&#9733; </span>
            <span className="starchoosetwo" name="twostar" onClick={this.handleClick}>&#9733; </span>
            <span className="starchoosethree" name="threestar" onClick={this.handleClick}>&#9733; </span>
            <span className="starchoosefour" name="fourstar" onClick={this.handleClick}>&#9733; </span>
            <span className="starchoosefive" name="fivestar" onClick={this.handleClick}>&#9734; </span>
          </>
        );
      }
      if (starObj.fivestar === true) {

        return (
          <>
            <span  className="starchooseone" name="onestar" onClick={this.handleClick}>&#9733; </span>
            <span className="starchoosetwo" name="twostar" onClick={this.handleClick}>&#9733; </span>
            <span className="starchoosethree" name="threestar" onClick={this.handleClick}>&#9733; </span>
            <span className="starchoosefour" name="fourstar" onClick={this.handleClick}>&#9733; </span>
            <span className="starchoosefive" name="fivestar" onClick={this.handleClick}>&#9733; </span>
          </>
        );
      }
      if (starObj.onestar === 1 && starObj.twostar === 2 && starObj.threestar === 3 && starObj.fourstar === 4 && starObj.fivestar === 5) {
        return (
          <>
            <span  className="starchooseone" name="onestar" onClick={this.handleClick}>&#9734; </span>
            <span className="starchoosetwo" name="twostar" onClick={this.handleClick}>&#9734; </span>
            <span className="starchoosethree" name="threestar" onClick={this.handleClick}>&#9734; </span>
            <span className="starchoosefour" name="fourstar" onClick={this.handleClick}>&#9734; </span>
            <span className="starchoosefive" name="fivestar" onClick={this.handleClick}>&#9734; </span>
          </>
          );
      }
  }
  render() {
    return (
      <>
        {this.starRender()}
      </>
    )
  }
}
export default StarRatingsInput;