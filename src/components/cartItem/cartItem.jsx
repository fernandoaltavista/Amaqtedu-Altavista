import './cartItem.css'
import {useContext} from 'react'
import {CartContext} from '../../context/cartContext'

export const CartItem = ({item,quantity,showButtonRemove}) =>{

    const {removeItem} = useContext(CartContext)

    const totalCartItem = (price,qty) => price * qty

    return(
        <div className="cartItem" key={item.id}>
                    <div className="cartImageContainer">
                        <img className="imgItemCart" 
                        src={item.pictureUrl} alt={item.title}></img>
                    </div>
                    <div className="cartItemInfo">
                        <h4 className="cartItemText">{(item.title).toUpperCase()}</h4>
                        <h5 className="cartItemText">Precio: €{item.price}</h5>
                        <p>Cantidad:{quantity}</p>
                        <p>SubTotal: €{totalCartItem(item.price,quantity)}</p>
                        
                            
                    </div>
                    <div>
                        {showButtonRemove && 
                        <button className="buttonRemoveItem" 
                        onClick={()=>removeItem(item.id,quantity)}></button>}
                        
                    </div>
                </div>
    )
}