import './cart.css'
import { CartContext } from '../../context/cartContext'
import {OrderContext} from '../../context/orderContext'
import { CartStage} from '../cartStage/cartStage'
import { Fragment } from 'react'
import { Link ,useLocation} from 'react-router-dom'
import {CartItem} from '../cartItem/cartItem'
import {PopUp} from '../popUp/popUp'
import {useContext} from 'react'


export const Cart = () => {
    
const {stageSelected} = useContext(OrderContext)
const {cart,clear,totalPriceCart,emptyStockAndRest,clearEmptyStock} = useContext(CartContext)

const [emptyStock,rest,id] = emptyStockAndRest

const location = useLocation()
const routeNow = location.pathname


    return (
        <div className="cart">
            {
                emptyStock && <PopUp showPopUp={emptyStock} rest={rest} id={id}/>
            }

            {cart.length > 0 ?
            <Fragment>
                <CartStage stageActive={stageSelected(routeNow)}/>
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