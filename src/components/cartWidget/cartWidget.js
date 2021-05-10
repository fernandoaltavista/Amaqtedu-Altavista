import './cartWidget.css'
import {useContext} from 'react'
import {CartContext} from '../../context/cartContext'
import cartImage from './shopping_cart_black_24dp.svg'

export const CartWidget = () => {
    const {quantity} = useContext(CartContext)
    
    return (
        <div className="cartWidget">
            <img src={cartImage} alt=""/>
            <span className="numberCountCart">{quantity}</span>
        </div>
    
    )
}