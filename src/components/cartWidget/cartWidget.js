import './cartWidget.css'
import {useContext} from 'react'
import {CartContext} from '../../context/cartContext'
import cartImage from '../../assets/images/svg/cartImage.png'

export const CartWidget = () => {
    const {quantity} = useContext(CartContext)
    
    return (
        <div className="cartWidget">
            <img className="cartImage" src={cartImage} alt=""/>
            {
            quantity > 0 && <span className="numberCountCart">{quantity}</span>
            }
            
        </div>
    
    )
}