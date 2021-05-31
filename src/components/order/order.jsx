import './order.css'
import { Fragment } from 'react'
import { Message } from '../message/message'
import {CartContext} from '../../context/cartContext'
import {CartStage} from '../cartStage/cartStage'
import {getFirestore} from '../../firebase/index'
import {Loader} from '../loader/loader'
import {OrderContext} from '../../context/orderContext'
import {useContext,useEffect,useState} from 'react'

export const Order = () => {

const {order} = useContext(OrderContext)
const {cart,clear} = useContext(CartContext)
const [finish,setFinish] = useState(false)


const canBuy = (stock,qty) => {
    return stock >= qty
}
const updateStock = () =>{

    const db=getFirestore()
    const batch = db.batch()
    cart.forEach(({item,quantity}) => {
        const itemRef = db.collection("items").doc(item.id)
        if (canBuy(item.stock,quantity)) {    
            batch.update(itemRef,{stock: item.stock - quantity})
        } 
    })
    batch.commit().then(r => {

        console.log('Finalizo Actualizacion')
        setFinish(false)})
}

useEffect(() => {

    
    setFinish(true)
    updateStock()
    clear()
    
    return  () => {
    }
}, [])

    return (
        <Fragment>
        {
            finish ? 
            <Loader text="Generando la orden..." /> :
                order ?
                <Fragment> 
                    <CartStage stageActive={3}/>
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