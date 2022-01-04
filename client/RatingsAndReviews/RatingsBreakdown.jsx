import React from "react";
import StarRatings from 'react-star-ratings';
import RatingsProgressbar from './RatingsProgress_bar.jsx';
import StarRating from './StarRatingBar.jsx';


class RatingsBreakdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.renderOverallRating=this.renderOverallRating.bind(this);
  }
  renderOverallRating () {
    if(this.props.ratings.avg !== undefined) {
      let leftPercentage = (this.props.ratings.avg / 5) * 100;
      let rightPercentage = 100 - leftPercentage;

      return (
        <div className="bigRating">
          <div className="bigNumber">{this.props.ratings.avg}</div>
          <StarRating currentRating={Number(this.props.ratings.avg)} leftPercentage={leftPercentage} rightPercentage={rightPercentage}/>
          <br></br>
        </div >
      )
    }
  }
  render() {

    return (
      <>

        <br></br>
        {this.renderOverallRating()}
        <div className="recommendPercentage">{this.props.recommended}% of {this.props.ratingsCount} reviews recommend this product</div>
        <br></br>
        <h4 style={{textAlign: 'center'}}>Rating Breakdown</h4>
        <div className="ratingBreakdown">
          <button name ="fivereviews" value="showFive" onClick={this.props.click} id="ratingbutton" >5 stars</button>

          <RatingsProgressbar bgcolor="orange" progress={this.props.ratings["5"]}  height={this.props.ratings["5"]} /><span style={{fontSize: 'small'}} className="ratingCountSpan"> ({this.props.fiveratingCount})</span>
        </div>

        <div className="ratingBreakdown">
          <button name ="fourreviews" value="showFour" onClick={this.props.click} id="ratingbutton">4 stars</button>

          <RatingsProgressbar bgcolor="orange" progress={this.props.ratings["4"]}  height={this.props.ratings["4"]} /><span style={{fontSize: 'small'}} className="ratingCountSpan"> ({this.props.fourratingCount})</span>
        </div>

        <div className="ratingBreakdown">
          <button name ="threereviews" value="showThree" onClick={this.props.click} id="ratingbutton">3 stars</button>

          <RatingsProgressbar bgcolor="orange" progress={this.props.ratings["3"]}  height={this.props.ratings["3"]} /><span style={{fontSize: 'small'}} className="ratingCountSpan"> ({this.props.threeratingCount})</span>
        </div>

        <div className="ratingBreakdown">
          <button name ="tworeviews" value="showTwo" onClick={this.props.click} id="ratingbutton">2 stars</button>

          <RatingsProgressbar bgcolor="orange" progress={this.props.ratings["2"]}  height={this.props.ratings["2"]} /><span style={{fontSize: 'small'}} className="ratingCountSpan"> ({this.props.tworatingCount})</span>
        </div>

        <div className="ratingBreakdown">
          <button name ="onereviews" value="showOne" onClick={this.props.click} id="ratingbutton">1 stars</button>

          <RatingsProgressbar bgcolor="orange" progress={this.props.ratings["1"]}  height={this.props.ratings["1"]} /><span style={{fontSize: 'small'}} className="ratingCountSpan"> ({this.props.oneratingCount})</span>
        </div>
        <br></br>



      </>
    );
  }
}

export default RatingsBreakdown;
