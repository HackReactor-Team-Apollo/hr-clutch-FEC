import React from 'react';
import StarRatings from 'react-star-ratings';

class OverallRating extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 0
    };
    this.renderRatingStars = this.renderRatingStars.bind(this);
    this.changeRating = this.changeRating.bind(this);
  }
  changeRating( newRating, name ) {
    this.setState({
      rating: newRating
    });
  }
  renderRatingStars () {
    return (
      <>
        <StarRatings
          rating={this.state.rating}
          starRatedColor="blue"
          changeRating={this.changeRating}
          numberOfStars={5}
          name='rating'
          starDimension="15px"
          starSpacing="5px"
        />
      </>
    )
  }
  render () {
    return (
      <>
        {this.renderRatingStars()}
      </>
    )
  }
}
export default OverallRating;