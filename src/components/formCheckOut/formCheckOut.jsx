import './formCheckOut.css'
import { Fragment } from 'react'
import {CartContext} from '../../context/cartContext'
import {CartItem} from '../cartItem/cartItem'
import {getFirestore} from '../../firebase/index'
import {Input} from '../input/input'
import {useContext,useState} from 'react'
import firebase from 'firebase/app'
import formFields from '../../service/formFields.json'
import { Message } from '../message/message'

export const FormCheckOut = () => {

const {cart,totalPriceCart,clear} = useContext(CartContext)
const [isFinish,setIsFinish] = useState(false)
const [order,setOrder] = useState()
const [form, setForm] = useState(
    {
    name: '',
    phone: '',
    mail: '',
    }
);

const {name,phone,mail} = form

const newCart = cart.map(({item,quantity}) => {
    const items = { 
                    id:item.id,
                    title: item.title,
                    price:item.price,
                    quantity:quantity
                    }
    return items
})

const handleInput = (e) =>{

const value= (e.target.value).trim()
        setForm({
        ...form,
        [e.target.name]: value
    })
    

}
const handleOrder= () =>{
    const db = getFirestore();
    const orders = db.collection("orders");

    const newOrder = {
        form,
        items: newCart,
        total: totalPriceCart(),
        date: firebase.firestore.Timestamp.fromDate(new Date())
    }
    orders.add(newOrder).then(({ id }) => {
        setOrder({id: id, ...newOrder});
        setIsFinish(true)
        updateStock()
        clear()
    }).catch((error) => {
        console.log('Error creating order', error);
    })
    
}

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
    batch.commit().then(r => console.log('Finalizo'))
}

    return (
        <Fragment>
            { 
            cart.length > 0  ? 
                <Fragment>
                <div className="row">
                    <div className="col-md-6">
                        <h4 className="titleForm">🧾 Ingrese sus datos para finalizar compra</h4>
                        <div className="formCheckOut"> 
                            {formFields.map(({id,name,value,type,label,size}) => 
                            <div key={id}>
                                <Input label={label}
                                    value={value}
                                    name={name}
                                    type={type}
                                    size={size}
                                    onInput={handleInput} />
                            </div>)}
                            <button className="buttonSubmit" disabled={[name, phone, mail].includes( undefined ||'')}
                                type='submit' onClick={()=>handleOrder()}>Finalizar Compra</button>
                        </div>
                    </div> 
                    <div className="col-md-6">
                        <h4 className="titleForm"> 📫 Tu carrito</h4> 
                    {
                        cart && cart.map(({item,quantity} ) => 
                            <CartItem key={item.title} item={item} 
                                    quantity={quantity}>
                            </CartItem>)
                    }
                    <p className="totalCart">Total Compra: €{totalPriceCart()}</p>
                    </div>
                </div>
                </Fragment>
            : isFinish ?
                    <Message text="Gracias por tu compra" type="succes" />
                :
                    <Message text={`Todavia no compraste nada`} type={'error'} />
            }
        </Fragment> 
    )
}