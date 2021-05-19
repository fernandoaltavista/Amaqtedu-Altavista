import './cart.css'
import {useContext} from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/cartContext'
import {CartItem} from '../cartItem/cartItem'
export const Cart = () => {

    const {cart,clear,totalCart} = useContext(CartContext)
    return (
        <div>
            <h2 className="cartTitle">🎁 Carrito</h2>
            
            {cart.length > 0 ?
                <div className="buttonRemoveAllContainer">
                    <button className="buttonRemoveAll" 
                        onClick={()=>clear()}>Borrar Todo</button>  
                </div>
                :
                <div className="cartEmptyContainer">
                    <p>📭 El carrito se encuentra vacio</p>
                    <Link to='/'><button className="buttonHome">Volver al home</button>
                    </Link>
                </div>
                
            }

            {
            cart && cart.map(({item,quantity} ) => 
                <CartItem key={item.title} item={item} 
                                quantity={quantity}>
                </CartItem>
                )
            
            }
            {cart.length > 0 && <p className="totalCart">
                    Total Compra: €{totalCart()}</p>}

        </div>
    )
}