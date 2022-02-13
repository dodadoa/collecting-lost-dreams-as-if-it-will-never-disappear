import React, { useState, useEffect, useCallback } from 'react'
import { getDefaultProvider } from 'ethers'
import { fetchListItems } from './api'
import Item from './components/Item'
import './App.css';

const App = () => {
  const [items, setItems] = useState([])
  const [transactions, setTransactions] = useState([])
  const [currentAccount, setCurrentAccount] = useState(null);
  const [provider, setProvider] = useState(null);

  useEffect(() => {
    const fetchItems = async () => {
      const listItems = await fetchListItems()
      const transformedItems = listItems.map((item) => ({
        id: item.id,
        price: item.ethereum_price,
        owned: item.owned
      }))
      setItems(transformedItems)
    }

    fetchItems()
  }, [])

  useEffect(() => {
    const connectWalletHandler = async () => {
      const { ethereum } = window
      
      if (!ethereum) {
        console.log("please install ethereum")
      }
    
      try {
        const accounts = await ethereum.request({ method: "eth_requestAccounts" })
        console.log(accounts[0])
        setCurrentAccount(accounts[0])
      } catch (error) {
        console.log(error)
      }
    }

    connectWalletHandler()
  }, [])

  useEffect(() => {
    const ethersProvider = getDefaultProvider("https://ropsten.infura.io/v3/91da48f64d454445bd31d0b4724bfbad")
    const signer = ethersProvider.signer()
    setProvider(signer)
  }, [])

  const handleSendTransaction = useCallback(async () => {
    if (!provider) return

    await provider.setTransactions(

    )
  })

  const handlePurchasingItem = useCallback(async () => {

  })

  return (
    <div className="App">
      <p> account: {currentAccount}</p>
      <div className="item-wrapper">
        {
          items.map((item) => {
            return (
              <Item
                key={`item-${item.id}`}
                id={item.id}
                price={item.price}
                owned={item.owned}
                handleClick={() => handlePurchasingItem(item.id)}
                disabled={transactions.length === 5}
              />
            )
          })
        }
      </div>
      <button onClick={handleSendTransaction}> Purchase </button>
    </div>
  );
}

export default App;
