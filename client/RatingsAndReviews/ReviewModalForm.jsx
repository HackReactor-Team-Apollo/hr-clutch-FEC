import React from "react";
import OverallRating from './OverallRating.jsx'
import axios from 'axios';
import StarRatings from 'react-star-ratings';
import StarRatingsInput from './StarRatingsInput.jsx';
import SubmittedMessage from './SubmittedMessage.jsx';


class ReviewModalForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product_id: this.props.product_id,
      summary: "",
      name: "",
      email: "",
      body: "",
      images: [],
      Size: 0,
      Width: 0,
      Comfort: 0,
      Quality: 0,
      Length: 0,
      Fit: 0,
      selectedRecommend: '',
      rating: 0,
      postWorked: undefined

    };
    this.renderCharacteristicRadioButtons =
    this.renderCharacteristicRadioButtons.bind(this);
    this.onChange = this.onChange.bind(this);
    this.characterCount = this.characterCount.bind(this);
    this.onImageChange = this.onImageChange.bind(this);
    this.renderUploadedImages = this.renderUploadedImages.bind(this);
    this.imageUploaderButton = this.imageUploaderButton.bind(this);
    this.handleRadioChange = this.handleRadioChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.changeRating = this.changeRating.bind(this);
    this.incrementCount = this.incrementCount.bind(this);
    this.captureRating = this.captureRating.bind(this);
    this.renderSelected = this.renderSelected.bind(this);
  }
  renderCharacteristicRadioButtons(characteristicsKeys) {
    if (characteristicsKeys.length !== undefined) {

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

      return characteristicsKeys.map((key, i) => (
        <div key={i} className="radiocharbuttons">
          <span key={key + 'initial'} style={{gridColumn: 1, gridRow: (2 * i) + 1, fontSize: 'small'}}>{key}:</span>
          <div style={{gridColumn: 1, gridRow: (2 * i) + 2, margin: 'auto'}}>{this.renderSelected(key, characteristicOptions[key])}</div>
          <input key={key + 'one'} name={key} value={1} type="radio" onChange={this.handleRadioChange} style={{gridColumn: 2, gridRow: (2 * i) + 2, margin: 'auto'}}/>
          <input key={key + 'two'} name={key} value={2}  type="radio" onChange={this.handleRadioChange} style={{gridColumn: 3, gridRow: (2 * i) + 2, margin: 'auto'}} />
          <input key={key + 'three'} name={key} value={3}  type="radio" onChange={this.handleRadioChange} style={{gridColumn: 4, gridRow: (2 * i) + 2, margin: 'auto'}} />
          <input key={key + 'four'} name={key} value={4}  type="radio" onChange={this.handleRadioChange} style={{gridColumn: 5, gridRow: (2 * i) + 2, margin: 'auto'}}/>
          <input key={key + 'five'} name={key} value={5}  type="radio" onChange={this.handleRadioChange} style={{gridColumn: 6, gridRow: (2 * i) + 2, margin: 'auto'}} />

          <span style={{gridColumn: 6, gridRow: (2 * i) + 1, fontSize: 'small', margin: 'auto'}}>{characteristicOptions[key]["5"]}</span>
          <span style={{gridColumn: 2, gridRow: (2 * i) + 1, fontSize: 'small', margin: 'auto'}}>{characteristicOptions[key]["1"]}</span>
          <span style={{gridColumn: 3, gridRow: (2 * i) + 1, fontSize: 'small', margin: 'auto'}}>2</span>
          <span style={{gridColumn: 4, gridRow: (2 * i) + 1, fontSize: 'small', margin: 'auto'}}>3</span>
          <span style={{gridColumn: 5, gridRow: (2 * i) + 1, fontSize: 'small', margin: 'auto'}}>4</span>

        <br></br>
        </div>
      ));
    }
  }
  captureRating(rating) {
    console.log('this is being triggered');
    this.setState({rating: rating});
  }
  incrementCount(count) {
    count++;
    //console.log('incremented count:', count);
  }
  handleRadioChange(e){
    this.changeValue(e.target.name, e.target.value);
  }
  changeValue(name, newValue) {
    let that = this;
    if (name === "selectedRecommend") {
      this.setState({selectedRecommend: newValue});
    } else {
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
    let changeSelection = () => {
      return new Promise(function (resolve, reject) {
        that.setState({[name]: newValue}, function (error, result) {
          if (error) {
            reject(error);
          } else {
            resolve (result);
          }
        });
      });
    };
    changeSelection()
      .then(function(result) {
        that.renderSelected(name, characteristicOptions[name]);
      })
      .catch(function(error) {
        console.log('Change Selection Error:', error);
      });
    }
  }
  renderSelected(char, charObj) {
    if (this.state[char] === 0) {
      return (
        <span style={{color: 'red', fontSize: 'small'}}>none selected</span>
      )
    } else {
      return (
        <span style={{color: 'blue', fontSize: 'small'}}>{charObj[this.state[char]]}</span>
      )
    }

  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  characterCount() {
    let count = 50 - this.state.body.length;
    if (count > 0) {
      return <div>Minimum required characters left: {count}</div>;
    } else {
      return <div>Minimum reached </div>;
    }
  }
  onImageChange(e) {
    let newImages = this.state.images;
    if (e.target.files) {
      //console.log(e.target.files);

      let img = e.target.files[0];
      let imgURL = URL.createObjectURL(img);

      newImages.push(imgURL);

      this.setState({
        images: newImages,
      });
    }
  }
  renderUploadedImages() {
    if (this.state.images.length > 0) {
      return this.state.images.map((image, i) => (
        <div key={i} className="uploaddiv">
          <img className="uploads" src={image} />
        </div>
      ));
    }
  }
  imageUploaderButton() {
    if (this.state.images.length < 5) {
      return (
        <div className="uploaderbutton">

          <input
            type="file"
            multiple
            name="myImage"
            onChange={this.onImageChange} className="uploaderinput"

          />
        </div>
      );
    }
  }
  postReview() {
    if (this.props.characteristics !== undefined) {

      let reviewObj = {
        product_id: this.props.product_id,
        rating: this.state.rating,
        summary: this.state.summary,
        body: this.state.body,
        recommend: null,
        name: this.state.name,
        email: this.state.email,
        photos: this.state.images,
        characteristics: {}
      }
      if (this.state.selectedRecommend === 'true') {
        reviewObj['recommend'] = true;
      }
      if (this.state.selectedRecommend === 'false') {
        reviewObj['recommend'] = false;
      }
      let characteristicsObj = {};
      for(var key in this.props.characteristics) {
        characteristicsObj[this.props.characteristics[key]['id']] = Number(this.state[key]);
      }
      reviewObj['characteristics'] = characteristicsObj;
      //console.log('reviewObj:', reviewObj);
      let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      if (!re.test(reviewObj.email) || reviewObj.body.length < 50 || reviewObj.body.length > 1000) {
        this.setState({postWorked: false});
      } else {
        let that = this;
        axios.post('/reviews', reviewObj)
          .then(function(response) {
            that.setState({postWorked: true});
          })
          .catch(function(error) {
            that.setState({postWorked: false});
            console.log('post review error:', error);
          });
      }

    }
  }
  changeRating( newRating, name ) {
    this.setState({
      rating: newRating
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    this.postReview();
  }

  render() {
    const showHideClassName = this.state.postWorked? "modal display-none" : "thesubmitter";
    return (
      <>
        <form onSubmit={this.handleSubmit}>
        <br></br>
            <br></br>
          <div className="mainmodalform">

              <span className="nicknamelabel"> What is your nickname: *</span>
              <div className="nicknamereviewinput">
              <input
                type="text"
                name="name"
                maxLength="60"
                placeholder="Example: jackson11!"

                onChange={this.onChange}
              />
              <div className="headsup">For privacy reasons, do not use your full name or email address</div>
              </div>
              <br></br>
              <br></br>


              <span className="emailspan"> Your email: *</span>
              <div className="emailreviewinput">
                <input
                  type="email"
                  name="email"
                  maxLength="60"
                  placeholder="Example: jackson11@email.com"
                  className="emailreviewinput"
                  onChange={this.onChange}
                />
                <div className="headsup">For authentication reasons, you will not be emailed</div>

              </div>
              <br></br>
              <br></br>


              <span className="overallratingspan">Overall Rating *</span>
              <div className="startaker">
                <StarRatingsInput captureRating={this.captureRating}/>
              </div>
              <br></br>
              <br></br>


              <span className="reviewrecommendspan">Do you recommend this product? *</span>
              <input type="radio" className="yesradio" name="selectedRecommend" onChange={this.handleRadioChange} value={true} />
              <span className="yesspan">Yes</span>
              <input type="radio" className="noradio" name="selectedRecommend" onChange={this.handleRadioChange} value={false} />
              <span className="nospan">No</span>
              <br></br>
              <br></br>

            <div className="charreviewform">Characteristics *</div>
          </div>
          {this.renderCharacteristicRadioButtons(Object.keys(this.props.characteristics))}

          <label>
            <br></br>
            Review summary:<br></br>
            <input
              className="summaryInput"
              type="text"
              name="summary"
              maxLength="60"
              value={this.state.summary}
              onChange={this.onChange}
              placeholder="Example: Best Purchase Ever!"
            />
            <br></br>
            <br></br>
          </label>
          <label>
            Review body: *<br></br>
            <textarea
              className="bodyInput"
              type="text"
              name="body"
              minLength="50"
              maxLength="1000"
              value={this.state.body}
              onChange={this.onChange}
              placeholder="Why did you like the product or not?"
            ></textarea>
            <br></br>
            {this.characterCount()}
            <br></br>
          </label>
          <div className="imageuploaddiv">

            <h1 id="selectimage">Select Image</h1>
            {this.imageUploaderButton()}

          </div>
          {this.renderUploadedImages()}
          <br></br>
          <div className="formsubmit">
            <input className={showHideClassName} type="submit" value="Submit" id="formsubmitbutton"/>
            <SubmittedMessage postWorked={this.state.postWorked} />
          </div>
        </form>
      </>
    );
  }
}

export default ReviewModalForm;


