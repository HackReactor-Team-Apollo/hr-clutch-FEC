import React from 'react'


const RatingsProgressbar = ({bgcolor,progress,height}) => {



    const Parentdiv = {

        height: 10,

        width: '100%',

        backgroundColor: 'lightgray',

        borderRadius: 0,

        margin: 0

      }



      const Childdiv = {

        height: '100%',

        width: `${progress}%`,

        backgroundColor: 'darkgreen',

       borderRadius:0,

        textAlign: 'right'

      }



      const progresstext = {

        padding: 10,

        color: 'black',

        fontWeight: 900

      }



    return (

    <div id="ratingprog" style={Parentdiv}>

      <div style={Childdiv}>

        <span style={progresstext}></span>

      </div>

    </div>

    )
}



export default RatingsProgressbar;