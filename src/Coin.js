import React from 'react';
import './Coin.css';

const Coin = ({image,name,symbol,price,volumn,priceChange,marketCap}) => {
    return (
        <div className='coin-container'>
            <div className='coin-row'>
                <div className='coin'>
                    <img src={image} alt="Crypto"/>
                    <h1>{name}</h1>

                    <p className='coin-symbol'>{symbol}</p>
                </div>

                <div className='coin-data'>
                    <p className='coin-price'>${price}</p>
                    <p className='coin-volumn'>${volumn.toLocaleString()}</p>

                    {priceChange < 0 ? (
                        <p className='coin-percentage red'>{priceChange.toFixed(2)}%</p>
                    ): (<p className='coin-percentage green'>{priceChange.toFixed(2)}%</p>)}

                    <p className='coin-marketcap'>
                        Mkt Cap: ${marketCap.toLocaleString()}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Coin
