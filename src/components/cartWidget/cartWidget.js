import './cartWidget.css'
import {CartContext} from '../../context/cartContext'
import {useContext} from 'react'
import cartImage from '../../assets/images/svg/cartImage.png'

export const CartWidget = () => {
    const {totalItems} = useContext(CartContext)
    return (
        <div className="cartWidget">
            <img className="cartImage" src={cartImage} alt=""/>
            {
            totalItems > 0 && <span className="numberCountCart">{totalItems}</span>
            }
            
        </div>
    
    )
}