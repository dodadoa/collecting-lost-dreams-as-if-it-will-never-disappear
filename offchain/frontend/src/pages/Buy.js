import React from "react"
import './Buy.css';
import Boomer1 from '../images/meme/boomer1.jpg'
import Boomer2 from '../images/meme/boomer2.jpg'
import Boomer3 from '../images/meme/boomer3.jpg'
import Genx1 from '../images/meme/genx1.jpg'
import Genx2 from '../images/meme/genx2.jpg'
import Genx3 from '../images/meme/genx3.jpg'
import Genx4 from '../images/meme/genx4.jpg'
import Genx5 from '../images/meme/genx5.jpg'
import Geny1 from '../images/meme/geny1.jpg'
import Geny2 from '../images/meme/geny2.jpg'
import Genz1 from '../images/meme/genz1.jpg'
import Genz2 from '../images/meme/genz2.jpg'

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
            <img className="img" width={300} height={300} src={Boomer3} />
          </div>
        </div>

        <div className="row">
          <div className="box-text color-gen-x">
            <p className="box-text-content"> Generation X </p>
          </div>
          <div className="box-work">
            <img className="img" width={300} height={300} src={Genx1} />
            <img className="img" width={300} height={300} src={Genx2} />
            <img className="img" width={300} height={300} src={Genx3} />
            <img className="img" width={300} height={300} src={Genx4} />
            <img className="img" width={300} height={300} src={Genx5} />
          </div>
        </div>

        <div className="row">
          <div className="box-text color-gen-y">
            <p className="box-text-content"> Millenial </p>
          </div>
          <div className="box-work">
            <img className="img" width={300} height={300} src={Geny1} />
            <img className="img" width={300} height={300} src={Geny2} />
          </div>
        </div>

        <div className="row">
          <div className="box-text color-gen-z">
            <p className="box-text-content"> Generation Z </p>
          </div>
          <div className="box-work">
            <img className="img" width={300} height={300} src={Genz1} />
            <img className="img" width={300} height={300} src={Genz2} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Buy;
