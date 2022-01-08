import React from "react";

class StarRating extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let style = {
      backgroundImage: `linear-gradient(to right, black, black ${this.props.leftPercentage}%, lightgray ${this.props.leftPercentage}%, lightgray 100%, black ${this.props.rightPercentage}%)`,
      backgroundClip: "text",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    };
    return (
      <div className="starRatingDiv">
        <>
          <span className="starratedspan" style={style}>
            &#9733;&#9733;&#9733;&#9733;&#9733;
          </span>
        </>
      </div>
    );
  }
}

export default StarRating;
