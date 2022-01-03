import React from 'react'

class StarRating extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let style = {
      display: 'inline-block',
      backgroundImage: `linear-gradient(to right, black ${this.props.leftPercentage}%, lightgray ${this.props.rightPercentage}%)`,
      backgroundClip: 'text',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    }
    return (
      <div>
        <>
          <span className="starratedspan" style={style}>&#9733;&#9733;&#9733;&#9733;&#9733;</span>
        </>
      </div>
    );
  }
}

export default StarRating;