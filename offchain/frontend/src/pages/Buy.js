import React from "react"
import './Buy.css';
import Boomer1 from '../images/meme/boomer1.jpg'
import Boomer2 from '../images/meme/boomer2.jpg'
import Genx1 from '../images/meme/genx1.jpg'

const Buy = () => {
  return (
    <div className="container">
      <h1 className="title"> Collecting Dreams As If It Will Never Disappear [Beta] </h1>
      <h2 className="subtitle"> (this is for pitching and testing purpose only) </h2>
      <div className="column">
        <div className="row">
          <div className="box-text color-boomer ">
            <p className="box-text-content"> Boomer </p>
          </div>
          <div className="box-work">
            <img className="img" width={300} height={300} src={Boomer1} />
            <img className="img" width={300} height={300} src={Boomer2} />
          </div>
        </div>

        <div className="row">
          <div className="box-text color-gen-x">
            <p className="box-text-content"> Generation X </p>
          </div>
          <div className="box-work">
          <img className="img" width={300} height={300} src={Genx1} />
          </div>
        </div>

        <div className="row">
          <div className="box-text color-gen-y">
            <p className="box-text-content"> Millenial </p>
          </div>
          <div className="box-work">
            
          </div>
        </div>

        <div className="row">
          <div className="box-text color-gen-z">
            <p className="box-text-content"> Generation Z </p>
          </div>
          <div className="box-work">
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Buy;
