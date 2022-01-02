import React from 'react'


const ProductProgressbar = ({bgcolor,progress,height}) => {



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

        backgroundColor: 'lightgray',

       borderRadius:0,

        textAlign: 'right'

      }



      const progresstext = {

        padding: 0,

        maxHeight: 10,

        color: 'black',

        fontWeight: 900

      }



    return (
    <>
      <div className="productprog" style={Parentdiv}>

        <div style={Childdiv}>

          <span style={progresstext}>&#9830;</span>

        </div>

      </div>
      <br></br>
    </>
    )
}



export default ProductProgressbar;