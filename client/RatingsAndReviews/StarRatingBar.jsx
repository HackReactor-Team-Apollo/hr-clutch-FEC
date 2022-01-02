import React from 'react'
import '../../bundle/styles.css';


// const StarProgressBar = ({bgcolor,progress,height}) => {



//     const Parentdiv = {

//         height: 10,

//         width: '100%',

//         backgroundColor: 'white',

//         borderRadius: 0,

//         margin: 0

//       }



//       const Childdiv = {

//         height: '100%',

//         width: `${progress}%`,

//         backgroundColor: 'white',

//        borderRadius:0,

//         textAlign: 'right'

//       }



//       const progresstext = {

//         padding: 0,

//         maxHeight: 10,

//         color: 'black',

//         fontWeight: 900,

//       }



//     return (
//     <>
//       <div className="starprog" style={Parentdiv}>

//         <div style={Childdiv}>

//           <span style={progresstext}>&#9733;</span><span style={progresstext}>&#9733;</span>
//           <span style={progresstext}>&#9733;</span><span style={progresstext}>&#9733;</span><span style={progresstext}>&#9733;</span>
//         </div>

//       </div>
//       <br></br>
//     </>
//     )
// }



// export default StarProgressBar;

// class StarRating extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       currentRating: this.props.currentRating
//     };
//   }

//   componentDidMount() {
//     this.setRating();
//   }


//   setRating = ev => {
//     const stars = this.refs.rating.getElementsByClassName('star');
//     Array.from(stars).forEach(star => {
//       star.style.color =
//         this.state.currentRating >= star.dataset.value ? 'gray' : 'lightgray';
//     });
//   };



//   render() {
//     return (
//       <div
//         className="rating"
//         ref="rating"
//         data-rating={this.state.currentRating}

//       >
//         {[...Array(+this.props.numberOfStars).keys()].map(n => {
//           return (
//             <span
//               className="star"
//               key={n+1}
//               data-value={n + 1}

//             >
//               &#9733;
//             </span>
//           );
//         })}
//       </div>
//     );
//   }
// }

// export default StarRating;

class StarRating extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    // this.createStarRating = this.createStarRating.bind(this);
  }

  // createStarRating () {

  //   if(this.props.leftPercentage !== undefined && this.props.rightPercentage !== undefined) {
  //     return (
  //       <>
  //         <span className="starratedspan" style={style}>&#9733;&#9733;&#9733;&#9733;&#9733;</span>
  //       </>
  //     )
  //   }
  // }


  render() {
    let style = {
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