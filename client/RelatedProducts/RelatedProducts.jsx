/* Author: Kacy*/
//Import Library Dependencies
import React from 'react'
import Card from './Card.jsx'
import axios from 'axios';
import ComparisonTable from './ComparisonTable.jsx'
import AddToCompare from './AddToCompare.jsx';

class RelatedProducts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      related: [],
      showComparison: false,
      currentRelatedComparison: null
    }
    this.getRelated = this.getRelated.bind(this);
    this.changeComparison = this.changeComparison.bind(this);
  }
  getRelated() {
    let that = this
    axios.get(`/products/${this.props.product_id}/related`)
      .then(function (response) {
        that.setState({ related: response.data })
      })
  }
  changeComparison(product) {
    this.setState({ showComparison: !this.state.showComparison })
    this.setState({ currentRelatedComparison: product})
  }
  componentDidMount() {
    this.getRelated()
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.product_id !== this.props.product_id) {
      this.getRelated()
    }
  }

  render() {
    return (
      <div className='rItemsCompare'>
        rItemsCompare
        <div className='relatedProducts'>
          {this.state.related.map((currentRelated, i) => {
            return (
              <>
                <Card key={i} current={currentRelated} onRelatedProductClick={this.props.onRelatedProductClick} Action={AddToCompare} changeComparison={this.changeComparison} />
              </>
            );
          })}
          <div>{this.state.showComparison && <ComparisonTable currentProduct={this.props.product_id} product={this.state.currentRelatedComparison}/>}</div>
        </div>
        <div className='favoriteProducts'>
          Favorited
        </div>
      </div>

    )
  }
}
export { RelatedProducts }
