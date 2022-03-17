import React from 'react'
import PropTypes from 'prop-types'
import './Item.css'
import { displayEthereumPrice } from '../utils/display'


const Item = (props) => {
  return (
    <div className="item-container">
      <p className="item-id"> item {props.id} </p>
      <p><b> {props.name} </b></p>
      <p> price: {displayEthereumPrice(props.price)} ETH</p>
      <button disabled={props.disabled} className="item_buy-button" onClick={props.handleClick}><b> BUY </b></button>
    </div>
  )
}

Item.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  price: PropTypes.number,
  disabled: PropTypes.bool,
  handleClick: PropTypes.func
}

export default Item
