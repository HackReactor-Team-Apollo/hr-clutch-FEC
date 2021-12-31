import React from 'react'
import $ from 'jquery'
import axios from 'axios'
import ReactDOM from 'react-dom'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      product_id: 37311,
      currentProduct: [{
        default: true,
name: "",
original_price: "",
photos: [],
sale_price: null,
skus: {},
style_id: 220998
      }]
    }
    this.getStyles = this.getStyles.bind(this);
    // this.componentDidMount = this.componentDidMount.bind(this)
    // this.setState = this.setState.bind(this)
  }
  getStyles() {
    let that = this;
    axios.get(`/products/${this.state.product_id}/styles`, {
      params: {
        productId: this.state.product_id
      }
  })
    .then(function (response) {
      // handle success
      // console.log('RESPONSEEEEEE: ', response.data)
      console.log(response.data);
      that.setState({currentProduct: response.data})
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })

  }

  componentDidMount() {
    this.getStyles();
  }