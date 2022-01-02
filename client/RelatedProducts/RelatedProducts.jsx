/* Author: Kacy*/
//Import Library Dependencies
import React from 'react';
import Card from './Card.jsx';
import axios from 'axios';
import ComparisonTable from './ComparisonTable.jsx';
import AddToCompare from './AddToCompare.jsx';
import RemoveFavorite from './RemoveFavorite.jsx';

class RelatedProducts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      related: [],
      showComparison: false,
      currentRelatedComparison: null,
      favorites: [],
    }
    this.getRelated = this.getRelated.bind(this);
    this.changeComparisonOn = this.changeComparisonOn.bind(this);
    this.addToFavorites = this.addToFavorites.bind(this);
    this.removeFromFavorites = this.removeFromFavorites.bind(this);
    this.changeComparisonOff = this.changeComparisonOff.bind(this);
  }
  getRelated() {
    let that = this
    axios.get(`/products/${this.props.product_id}/related`)
      .then(function (response) {
        that.setState({ related: response.data })
      })
  }
  changeComparisonOn(product) {
    this.setState({ showComparison: true })
    this.setState({ currentRelatedComparison: product })
  }
  changeComparisonOff() {
    this.setState({ showComparison: false })
  }
  componentDidMount() {
    this.getRelated()
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.product_id !== this.props.product_id) {
      this.getRelated()
    }
  }
  addToFavorites() {
    if (!this.state.favorites.includes(this.props.product_id)) {
      this.setState({ favorites: [...this.state.favorites, this.props.product_id] })
    }
  }
  removeFromFavorites(product) {
    let newArr = [];
    for (let i = 0; i < this.state.favorites.length; i++) {
      if (this.state.favorites[i] !== product.id) {
        newArr.push(this.state.favorites[i])
      }
    }

    this.setState({ favorites: newArr });
  }

  render() {
    const { related, favorites } = this.state;


    return (
      <div className='rItemsCompare'>
        rItemsCompare
        <div className='relatedProducts'>
          <h2>Related Products</h2>
          <main>
            <div >{this.state.showComparison && <ComparisonTable currentProduct={this.props.product_id} product={this.state.currentRelatedComparison} changeComparisonOff={this.changeComparisonOff} />}</div>


            <span className='carousel-container'>
              <span className='carousel-gradient'>
                <span alt="left" id="slide-left" className="arrow">&#8592;</span>
                {related.map((currentRelated, i) => {
                  return (
                    <Card key={i} current={currentRelated} onRelatedProductClick={this.props.onRelatedProductClick} Action={AddToCompare} changeAction={this.changeComparisonOn} />
                  );
                })}
                <span alt="right" id="slide-right" className="arrow">&#8594;</span>
              </span>
            </span>
            <div className="paddles">
              <button className="left-paddle paddle hidden">
              &#171;
		</button>
              <button className="right-paddle paddle">
              &#187;
              </button>
            </div>


          </main>
        </div>
        <div className='favoriteProducts'>

          <h2>Your Outfit</h2>
          <main>


            <span className='carousel-container'>
              <span className='carousel-gradient'><span alt="left" id="slide-left" className="arrow">&#8592;</span>
                <span className='circle' onClick={this.addToFavorites}>
                  <div>Add to Outfit</div>
                  <div>&#43;</div>
                </span>
                {favorites.map((currentFavorite, i) => {
                  return (
                    <Card key={i} current={currentFavorite} onRelatedProductClick={this.props.onRelatedProductClick} Action={RemoveFavorite} changeAction={this.removeFromFavorites} />
                  );
                })}

                {/* {favorites.length > 4 &&
                  <>
                    <ButtonBack className="carousel-button-back">&lsaquo;</ButtonBack>
                    <ButtonNext className="carousel-button-next">&rsaquo;</ButtonNext>
                  </>} */}
                <span alt="right" id="slide-right" className="arrow">&#8594;</span>
              </span>
            </span>


          </main>
        </div>



      </div >

    )
  }
}
export { RelatedProducts }
