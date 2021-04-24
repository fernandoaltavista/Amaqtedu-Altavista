import cart from './shopping_cart_black_24dp.svg'
import './cartWidget.css'

export const CartWidget = (props) => {

    return (
        <div className="cartWidget">
            <a href="#shop"><img src={cart} alt=""/></a>
            <p className="numberCountCart">{props.count}</p>
        </div>
    
    )
}