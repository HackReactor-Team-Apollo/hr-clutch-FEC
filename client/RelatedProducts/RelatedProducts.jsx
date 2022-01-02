/* Author: Kacy*/
//Import Library Dependencies
import React from 'react';
import Card from './Card.jsx';
import axios from 'axios';
import ComparisonTable from './ComparisonTable.jsx';
import AddToCompare from './AddToCompare.jsx';
import RemoveFavorite from './RemoveFavorite.jsx';
import $ from "jquery";

class RelatedProducts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      related: [],
      showComparison: false,
      currentRelatedComparison: null,
      favorites: [],
      scrolled: 0,
      scrolledFavorites: 0,
    }
    this.getRelated = this.getRelated.bind(this);
    this.changeComparisonOn = this.changeComparisonOn.bind(this);
    this.addToFavorites = this.addToFavorites.bind(this);
    this.removeFromFavorites = this.removeFromFavorites.bind(this);
    this.changeComparisonOff = this.changeComparisonOff.bind(this);
    this.scroll = this.scroll.bind(this);
    this.handleRelatedProcuctClick = this.handleRelatedProcuctClick.bind(this);
    this.scrollFavorites = this.scrollFavorites.bind(this);
  }
  scroll(direction) {
    let far = 180 * direction;
    let pos = $('.carousel-gradient').scrollLeft() + far;
    $('.carousel-gradient').animate({ scrollLeft: pos }, 500)
    this.setState({scrolled: this.state.scrolled + direction})
  }
  scrollFavorites(direction) {
    let far = 180 * direction;
    let pos = $('.carousel-gradient-favorites').scrollLeft() + far;
    $('.carousel-gradient-favorites').animate({ scrollLeft: pos }, 500)
    this.setState({scrolledFavorites: this.state.scrolledFavorites + direction})
  }
  handleRelatedProcuctClick(current) {
    this.props.onRelatedProductClick(current);
    this.setState({scrolled: 0});
    this.setState({scrolledFavorites: 0});
    $('.carousel-gradient').animate({ scrollLeft: 0 })
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
    const { related, favorites, scrolled, scrolledFavorites } = this.state;


    return (
      <div className='rItemsCompare'>
        rItemsCompare
        <div className='relatedProducts'>
          <h2>Related Products</h2>
          <main>
            <div >{this.state.showComparison && <ComparisonTable currentProduct={this.props.product_id} product={this.state.currentRelatedComparison} changeComparisonOff={this.changeComparisonOff} />}</div>
            <span className='carousel-container'>
              {scrolled > 0 && <a className="prev" onClick={this.scroll.bind(null, -1)}>&#10094;</a>}
              <span className='carousel-gradient'>

                {related.map((currentRelated, i) => {
                  return (
                    <Card key={i} current={currentRelated} onRelatedProductClick={this.handleRelatedProcuctClick} Action={AddToCompare} changeAction={this.changeComparisonOn} />
                  );
                })}

              </span>
              {related.length > 5 &&
                <>
                {scrolled + 5 < related.length && <a className="next" onClick={this.scroll.bind(null, 1)}>&#10095;</a>}

                </>}

            </span>


          </main>
        </div>
        <div className='favoriteProducts'>

          <h2>Your Outfit</h2>
          <main>


            <span className='carousel-container'>

              <span className='circle' onClick={this.addToFavorites}>
                <div>Add to </div>
                <div>Outfit</div>
                <br></br>
                <div>&#43;</div>
              </span>
              {scrolledFavorites > 0 && <a className="prev" onClick={this.scrollFavorites.bind(null, -1)}>&#10094;</a>}
              <span className='carousel-gradient-favorites'>

                {favorites.map((currentFavorite, i) => {
                  return (
                    <Card key={i} current={currentFavorite} onRelatedProductClick={this.props.onRelatedProductClick} Action={RemoveFavorite} changeAction={this.removeFromFavorites} />
                  );
                })}

              </span>
              {favorites.length > 4 &&
                <>
                  {scrolledFavorites + 4 < favorites.length && <a className="next" onClick={this.scrollFavorites.bind(null, 1)}>&#10095;</a>}
                </>}

            </span>


          </main>
        </div>



      </div >

    )
  }
}
export { RelatedProducts }
