import React from "react";

class ReviewModalForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      summary: "",
      name: "",
      email: "",
      body: "",
      images: [],
      size: '',
      width: '',
      comfort: '',
      quality: '',
      length: '',
      fit: '',
      selectedRecommend: ''
    };
    this.renderCharacteristicRadioButtons =
      this.renderCharacteristicRadioButtons.bind(this);
    this.onChange = this.onChange.bind(this);
    this.characterCount = this.characterCount.bind(this);
    this.onImageChange = this.onImageChange.bind(this);
    this.renderUploadedImages = this.renderUploadedImages.bind(this);
    this.imageUploaderButton = this.imageUploaderButton.bind(this);
  }
  renderCharacteristicRadioButtons(characteristicsKeys) {
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
    return characteristicsKeys.map((key) => (
      <label>
        {key}:
        <input type="radio" />
        {characteristicOptions[key]["1"]}
        <input type="radio" />2
        <input type="radio" />3
        <input type="radio" />4
        <input type="radio" />
        {characteristicOptions[key]["5"]}
        <br></br>
        <br></br>
      </label>
    ));
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
      console.log(e.target.files);

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
      return this.state.images.map((image) => (
        <div>
          <img className="uploads" src={image} />
        </div>
      ));
    }
  }
  imageUploaderButton() {
    if (this.state.images.length < 5) {
      return (
        <div>
          <h1>Select Image</h1>
          <input
            type="file"
            multiple
            name="myImage"
            onChange={this.onImageChange}
          />
        </div>
      );
    }
  }
  render() {
    return (
      <>
        <form>
          <label>
            What is your nickname:*
            <input
              type="text"
              name="name"
              maxLength="60"
              placeholder="Example: jackson11!"
              onChange={this.onChange}
            />
            <br></br>
            <br></br>
          </label>
          <label>
            Your email:*
            <input
              type="text"
              name="email"
              maxLength="60"
              placeholder="Example: jackson11@email.com"
              onChange={this.onChange}
            />
            <br></br>
            <br></br>
          </label>
          <label>
            Do you recommend this product?*
            <input type="radio" name="yes" value={true} />
            Yes
            <input type="radio" name="no" value={false} />
            No
            <br></br>
            <br></br>
          </label>
          <div>Characteristics*</div>
          {this.renderCharacteristicRadioButtons(this.props.characteristics)}
          <label>
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
            Review body:*<br></br>
            <input
              className="bodyInput"
              type="text"
              name="body"
              minLength="50"
              maxLength="1000"
              value={this.state.body}
              onChange={this.onChange}
              placeholder="Why did you like the product or not?"
            />
            <br></br>
            {this.characterCount()}
            <br></br>
          </label>
          {this.renderUploadedImages()}
          {this.imageUploaderButton()}
          <input type="submit" value="Submit" />
        </form>
      </>
    );
  }
}

export default ReviewModalForm;
