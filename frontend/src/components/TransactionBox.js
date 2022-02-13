import React from 'react'
import PropTypes from 'prop-types'
import './TransactionBox.css'
import { displayEthereumPrice } from '../utils/display'

const TransactionBox = (props) => {
  return (
    <div className="transaction-box">
      <p>Buying <b>item {props.itemId}</b></p>
      <p>Please transfer {displayEthereumPrice(props.itemPrice)} ETH to {props.receiverAddress}</p>
    </div>
  )
}

TransactionBox.propTypes = {
  receiverAddress: PropTypes.string,
  itemId: PropTypes.number,
  itemPrice: PropTypes.number
}

export default TransactionBox
