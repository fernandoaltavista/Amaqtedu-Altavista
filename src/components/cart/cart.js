import './cart.css'
import {useContext} from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/cartContext'
import {CartItem} from '../cartItem/cartItem'
import { Fragment } from 'react'

export const Cart = () => {

    const {cart,clear,totalPriceCart} = useContext(CartContext)
    return (
        <div>
            <h2 className="cartTitle">🎁 Carrito</h2>
            {cart.length > 0 ?
            <Fragment>
                <div className="buttonRemoveAllContainer">
                    <button className="buttonRemoveAll" 
                        onClick={()=>clear()}>Borrar Todo</button>  
                </div>
                
                {cart.map(({item,quantity} ) => 
                    <CartItem key={item.title} item={item} 
                                    quantity={quantity}>
                    </CartItem>
                )}
                
                <p className="totalCart">Total Compra: €{totalPriceCart()}</p>
                <Link to="/form"><button className="buttonConfirm">Confirmar Compra</button></Link> 
            </Fragment>

                :
                <div className="cartEmptyContainer">
                    <p>📭 El carrito se encuentra vacio</p>
                    <Link to='/'><button className="buttonHome">Volver al home</button>
                    </Link>
                </div>
                
            }


            
        </div>
    )
}