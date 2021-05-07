import cart from './shopping_cart_black_24dp.svg'
import './cartWidget.css'

export const CartWidget = () => {

    return (
        <div className="cartWidget">
            <img src={cart} alt=""/>
            <p className="numberCountCart"></p>
        </div>
    
    )
}