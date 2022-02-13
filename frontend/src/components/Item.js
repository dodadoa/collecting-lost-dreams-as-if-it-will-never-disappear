import React from 'react'
import PropTypes from 'prop-types'
import './Item.css'
import { displayEthereumPrice } from '../utils/display'


const Item = (props) => {
  return (
    <div className="item">
      <p><b> Item {props.id} </b></p>
      <p> price: {displayEthereumPrice(props.price)} ETH</p>
      <p> owned: {props.owned}</p>
      <button disabled={props.disabled} className="item_buy-button" onClick={props.handleClick}><b> BUY </b></button>
    </div>
  )
}

Item.propTypes = {
  id: PropTypes.number,
  price: PropTypes.number,
  owned: PropTypes.number,
  disabled: PropTypes.bool,
  handleClick: PropTypes.func
}

export default Item
