import React from "react";

class ProductBreakdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  renderCharacteristics() {
    let characteristicsObj = this.props.characteristics;

    let characteristicsKeys = Object.keys(characteristicsObj);
    return characteristicsKeys.map((characteristicKey) => (
      <div key={characteristicsObj[characteristicKey].id}>
        <div>{characteristicKey}</div>
        <div>{characteristicsObj[characteristicKey].value}</div>
      </div>
    ));
  }
  render() {
    return (
      <>
        <div>Product Breakdown</div>
        {this.renderCharacteristics()}
      </>
    );
  }
}

export default ProductBreakdown;
