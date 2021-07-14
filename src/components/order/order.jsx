import './order.css'
import { Fragment } from 'react'
import { Message } from '../message/message'
import {CartContext} from '../../context/cartContext'
import {CartStage} from '../cartStage/cartStage'
import {Loader} from '../loader/loader'
import {OrderContext} from '../../context/orderContext'
import {useContext,useEffect} from 'react'
import {useLocation} from 'react-router-dom'

export const Order = () => {

const {stageSelected,order,finishOrder} = useContext(OrderContext)
const {clear} = useContext(CartContext)

const location = useLocation()
const routeNow = location.pathname

useEffect(() => {
    clear()
    return  () => {
    }
}, [])

    return (
        <Fragment>
        {  
                finishOrder ?  <Loader text="Generando la orden..." /> 
        
                :

                order ?
                <Fragment> 
                    <CartStage stageActive={stageSelected(routeNow)}/>
                    <div className="container">
                    <div className="row">
                        <div className="col-md-6 order"> 
                            <h2 className="titleOrder">Tu orden</h2>
                            <p>Codigo de compra : {order.id}</p>
                            <p>Nombre: {order.buyer.name}</p>
                            <p>Email: {order.buyer.mail}</p>
                            <h4>Tu compra</h4>
                            {
                                    (order.items).map((item) =>
                                        <div key={item.id} className="orderItem">
                                        <span className="orderProduct">Producto: {item.title},</span>
                                        <span className="orderProduct">Cantidad: {item.quantity},</span>
                                        <span className="orderProduct">Precio: €{item.price}</span>
                                        </div>)
                            }
                            <h2 className="orderTotal">Total: €{order.total}</h2>
                            <p className="orderMessage">Te enviamos a tu casilla de correo la orden de tu compra</p>
                        </div>
                        <div className="col-md-6">
                            <Message text="Gracias por tu compra" type="succes" />
                        </div>
                    </div>
                    </div>
                </Fragment>

            :  <Message text="No realizaste ninguna compra" type="error" />
        }
        </Fragment>
    )
}