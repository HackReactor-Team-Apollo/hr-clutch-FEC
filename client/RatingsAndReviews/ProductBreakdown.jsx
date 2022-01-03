import React from "react";
import ProductProgressbar from './ProductProgressBar.jsx';
class ProductBreakdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  renderCharacteristics() {
    let characteristicOptions = {
      Size: {
        1: "A size too small",
        2: `${1 / 2} a size too small`,
        3: "Perfect",
        4: `${1 / 2} a size too big`,
        5: "A size too wide",
      },
      Width: {
        1: "Too narrow",
        2: "Slightly narrow",
        3: "Perfect",
        4: "Slightly wide",
        5: "Too wide",
      },
      Comfort: {
        1: "Uncomfortable",
        2: "Slightly uncomfortable",
        3: "Ok",
        4: "Comfortable",
        5: "Perfect",
      },
      Quality: {
        1: "Poor",
        2: "Below average",
        3: "What I expected",
        4: "Pretty great",
        5: "Perfect",
      },
      Length: {
        1: "Runs short",
        2: "Runs slightly short",
        3: "Perfect",
        4: "Runs slightly long",
        5: "Runs long",
      },
      Fit: {
        1: "Runs tight",
        2: "Runs slightly tight",
        3: "Perfect",
        4: "Runs slightly long",
        5: "Runs long",
      },
    };

    let characteristicsObj = this.props.characteristics;

    let characteristicsKeys = Object.keys(characteristicsObj);
    return characteristicsKeys.map((characteristicKey) => (
      <div className="prodbreakDiv" key={characteristicsObj[characteristicKey].id}>
        <div className="prodbreakKey">{characteristicKey}</div>
        <br></br>
        <ProductProgressbar bgcolor="orange" progress={((characteristicsObj[characteristicKey].value) / 5) * 100} />
        <br></br>
        <span className="productbreakdown" id="first">{characteristicOptions[characteristicKey]['1']}</span><span className="productbreakdown" id="second">{characteristicOptions[characteristicKey]['3']}</span><span className="productbreakdown" id="third">{characteristicOptions[characteristicKey]['5']}</span>
        <br></br>
      </div>
    ));
  }
  render() {
    return (
      <>
        <h4 style={{textAlign: 'center'}}>Product Breakdown</h4>
        {this.renderCharacteristics()}
      </>
    );
  }
}

export default ProductBreakdown;
