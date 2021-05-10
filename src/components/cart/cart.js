import './cart.css'
import {useContext} from 'react'
import { CartContext } from '../../context/cartContext'

export const Cart = () => {

    const {cart,removeItem,clear} = useContext(CartContext)
    
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
                </div>
                
            }


            {
            cart && cart.map(({item,quantity} ) => 
            
                <div className="cartItem" key={item.id}>
                    <div>
                        <img className="imgItemCart" 
                        src={item.pictureUrl} alt={item.title}></img>
                    </div>
                    <div className="cartItemInfo">
                        <h4 >{item.title}</h4>
                        <h5 >€{item.price}</h5>
                        <p>Cantidad:{quantity}</p>
                        <p>Total:{item.price * quantity}</p>
                    </div>
                    <div>
                        <button className="buttonRemoveItem" 
                        onClick={()=>removeItem(item.id)}>X</button>
                    </div>
                </div>
                
                )
            }
            
        </div>
    )
}