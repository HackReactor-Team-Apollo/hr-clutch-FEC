/* Author: Kacy*/
//Import Library Dependencies
import React from 'react'
import Card from './Card.jsx'
import axios from 'axios';

class RelatedProducts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      related: [],
    }
    this.getRelated = this.getRelated.bind(this);
  }
  getRelated() {
    let that = this
    axios.get(`/products/${this.props.product_id}/related`)
      .then(function (response) {
        that.setState({ related: response.data })
      })
  }

  componentDidMount() {
    this.getRelated()
  }

  render() {
    return (
      <div className='rItemsCompare'>
        rItemsCompare
        <div className='relatedProducts'>
          {this.state.related.map((currentRelated, i) => {
            return (
              <Card key = {i} current = {currentRelated} />
            );
          })}
        </div>
        <div className='favoriteProducts'>

        </div>
      </div>

    )
  }
}
export { RelatedProducts }
