import './cart.css'
import { CartContext } from '../../context/cartContext'
import { CartStage} from '../cartStage/cartStage'
import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import {CartItem} from '../cartItem/cartItem'
import {PopUp} from '../popUp/popUp'
import {useContext, useState} from 'react'

export const Cart = () => {

const {cart,clear,totalPriceCart,emptyStockAndRest,clearEmptyStock} = useContext(CartContext)
const [stage,setStage]=useState(1)   //COMPONENTE CART STAGE MAS FUNCIONAL

const [emptyStock,rest,id] = emptyStockAndRest

    return (
        <div className="cart">
            {
                emptyStock && <PopUp showPopUp={emptyStock} rest={rest} id={id}/>
            }

            {cart.length > 0 ?
            <Fragment>
                <CartStage stageActive={stage}/>
                <div className="buttonRemoveAllContainer">
                    <button className="buttonRemoveAll" 
                        onClick={()=>clear()}>Borrar Todo</button>  
                </div>
                
                {cart.map(({item,quantity} ) => 
                    <CartItem key={item.title} item={item} 
                            quantity={quantity} showButtonRemove={true}>
                    </CartItem>
                )}
                
                <p className="totalCart">Total Compra: €{totalPriceCart()}</p>
                <Link to="/form"><button className="buttonConfirm" onClick={()=>clearEmptyStock()}
                >Confirmar Compra</button></Link> 
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