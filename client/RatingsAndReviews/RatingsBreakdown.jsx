import React from "react";
import StarRatings from 'react-star-ratings';
import RatingsProgressbar from './RatingsProgress_bar.jsx';
class RatingsBreakdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.renderOverallRating=this.renderOverallRating.bind(this);
  }
  renderOverallRating () {
    if(this.props.ratings.avg !== undefined) {

      return (
        <div className="bigRating">
          <div className="bigNumber">{this.props.ratings.avg}</div>
            <StarRatings
          rating={Number(this.props.ratings.avg)}
          starDimension="15px"
          starSpacing="5px"
          />
          <br></br>
        </div >
      )
    }
  }
  render() {

    return (
      <>
        <div>Ratings & Reviews</div>
        <br></br>
        {this.renderOverallRating()}
        <div className="recommendPercentage">{this.props.recommended}% of {this.props.ratingsCount} reviews recommend this product</div>

        <div className="ratingBreakdown">
          <button name ="fivereviews" value="showFive" onClick={this.props.click} id="ratingbutton" >5 stars</button>

          <RatingsProgressbar bgcolor="orange" progress={this.props.ratings["5"]}  height={this.props.ratings["5"]} />
        </div>

        <div className="ratingBreakdown">
          <button name ="fourreviews" value="showFour" onClick={this.props.click} id="ratingbutton">4 stars</button>

          <RatingsProgressbar bgcolor="orange" progress={this.props.ratings["4"]}  height={this.props.ratings["4"]} />
        </div>

        <div className="ratingBreakdown">
          <button name ="threereviews" value="showThree" onClick={this.props.click} id="ratingbutton">3 stars</button>

          <RatingsProgressbar bgcolor="orange" progress={this.props.ratings["3"]}  height={this.props.ratings["3"]} />
        </div>

        <div className="ratingBreakdown">
          <button name ="tworeviews" value="showTwo" onClick={this.props.click} id="ratingbutton">2 stars</button>

          <RatingsProgressbar bgcolor="orange" progress={this.props.ratings["2"]}  height={this.props.ratings["2"]} />
        </div>

        <div className="ratingBreakdown">
          <button name ="onereviews" value="showOne" onClick={this.props.click} id="ratingbutton">1 stars</button>

          <RatingsProgressbar bgcolor="orange" progress={this.props.ratings["1"]}  height={this.props.ratings["1"]} />
        </div>
        <br></br>



      </>
    );
  }
}

export default RatingsBreakdown;
