import './formCheckOut.css'
import { Fragment } from 'react'
import { Message } from '../message/message'
import { OrderContext } from '../../context/orderContext'
import {CartContext} from '../../context/cartContext'
import {CartItem} from '../cartItem/cartItem'
import {CartStage} from '../cartStage/cartStage'
import {getFirestore} from '../../firebase/index'
import {Input} from '../input/input'
import {Link,useLocation} from 'react-router-dom'
import {PopUp} from '../popUp/popUp'
import {useContext,useState} from 'react'
import firebase from 'firebase/app'
import formFields from '../../service/formFields.json'


export const FormCheckOut = () => {

const {cart,totalPriceCart} = useContext(CartContext)
const {stageSelected,addOrder,sendEmail,loading} = useContext(OrderContext)
const [error, setError] = useState(false)
const [stockEmpty, setStockEmpty] = useState(true)
const [form, setForm] = useState(
    {
    name: '',
    phone: '',
    mail: '',
    }
);

const {name,phone,mail} = form

const location = useLocation()
const routeNow = location.pathname

const newCart = cart.map(({item,quantity}) => {
    const items = { 
                    id:item.id,
                    title: item.title,
                    price:item.price,
                    quantity:quantity
                    }
    return items
})

const validation = (mail,name,phone) => {
    
    const mailRegex =  /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i
    const nameRegex = /^[a-z]+/gi
    const phoneRegex = /^[0-9]{10}$/
    
    if ( (!mailRegex.test(mail)) || (!nameRegex.test(name)) || (!phoneRegex.test(phone)) ) {
        setError(false)
    } else {
        setError(true)
    }
}

const disabledButton = () => [name, phone, mail].includes( undefined ||'') || !error

const handleInput = (e) =>{
    e.preventDefault()
    validation(mail,name,phone)
    const value= e.target.value.trim()
    setForm({
        ...form,
        [e.target.name]: value
    })
    
}
const handleBlur = (e) =>{
    e.preventDefault()
    validation(mail,name,phone)
    const value= e.target.value.trim()
    setForm({
        ...form,
        [e.target.name]: value
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
            setStockEmpty(true)
        } else{
            setStockEmpty(false)
        }
    })
    batch.commit().then(r => {
        console.log('Finalizo Actualizacion')
        })
}

const generateOrder = () =>{
    loading(true)
    const db = getFirestore();
    const orders = db.collection("orders");

    const newOrder = {
        buyer:form,
        items: newCart,
        total: totalPriceCart(),
        date: firebase.firestore.Timestamp.fromDate(new Date())
    } 
    
    orders.add(newOrder).then(({ id }) => {
        addOrder({...newOrder,id: id})
        sendEmail({...newOrder,id: id})
        
    }).catch((error) => {
        console.log('Error creating order', error);
    }).finally(updateStock())

}

const handleOrder= (e) =>{
    
    if (error) {
        generateOrder()
    }
}


    return (
        <Fragment>
            { 
            cart.length > 0  ? 
                <Fragment>
                    <CartStage stageActive={stageSelected(routeNow)}/>
                    <div className="container">
                    <div className="row">
                    <div className="col-md-8">
                        <form className="formCheckOut" > 
                            {formFields.map(({id,name,placeholder,pattern,title,value,type,label,size}) => 
                            <div key={id}>
                                <Input label={label}
                                    value={value}
                                    name={name}
                                    placeholder={placeholder}
                                    title={title}
                                    pattern={pattern}
                                    type={type}
                                    size={size}
                                    error={error}
                                    onInput={(e)=>handleInput(e)}
                                    onBlur={(e)=>handleBlur(e)}/> 
                            </div>)}
                            
                            <Link to="/cart"><button className="buttonBack"
                                >Volver</button></Link>

                            <Link to={(error && stockEmpty) ? "/completed" : "/form"}>
                                <input className="buttonSubmit" disabled={disabledButton()}
                                type='submit' value="Finalizar Compra" onClick={(e)=>handleOrder(e)}></input></Link>
                            
                        </form>
                    </div>
                    <div className="col-md-4 cartItems">
                        <p className="totalCart">Total Compra: €{totalPriceCart()}</p>
                    {
                        cart && cart.map(({item,quantity} ) => 
                            <CartItem key={item.title} item={item} 
                                    quantity={quantity} showButtonRemove={false}>
                            </CartItem>)
                    }
                    </div>
                </div>
                </div> 
                </Fragment>
            :   !stockEmpty ? <PopUp showPopUp={stockEmpty} rest={0}/>
                    :
                    <Message text={`Todavia no compraste nada`} type={'error'} />
            
            }
        </Fragment> 
    )
}