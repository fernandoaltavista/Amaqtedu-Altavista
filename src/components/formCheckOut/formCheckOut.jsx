import './formCheckOut.css'
import { Fragment } from 'react'
import { Message } from '../message/message'
import { OrderContext } from '../../context/orderContext'
import {CartContext} from '../../context/cartContext'
import {CartItem} from '../cartItem/cartItem'
import {CartStage} from '../cartStage/cartStage'
import {getFirestore} from '../../firebase/index'
import {Input} from '../input/input'
import {Link} from 'react-router-dom'
import {useContext,useState} from 'react'
import firebase from 'firebase/app'
import formFields from '../../service/formFields.json'


export const FormCheckOut = () => {

const {cart,totalPriceCart} = useContext(CartContext)
const {addOrder,sendEmail} = useContext(OrderContext)
const [error, setError] = useState(false)
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

const validation = (mail,name,phone) => {
    
    const regexMail =  /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i
    const nameRegex = /^[a-z]+/gi
    const phoneRegex = /^[0-9]*$/
    
    if ((!regexMail.test(mail)) || !(nameRegex.test(name)) || (!phoneRegex.test(phone)) ){
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


const handleOrder= (e) =>{

    if (error) {
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
        }).finally((error) => {
            console.log('Finalizo orden')
            
        })

        }
}

    return (
        <Fragment>
            { 
            cart.length > 0  ? 
                <Fragment>
                    <CartStage stageActive={2}/>
                    <div className="container">
                    <div className="row">
                    <div className="col-md-8">
                        <div className="formCheckOut"> 
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
                                    onInput={handleInput} />
                            </div>)}
                            
                            <Link to="/cart"><button className="buttonBack"
                                >Volver</button></Link>

                            <Link to={error ? "/complete" : "/form"}><button className="buttonSubmit" disabled={disabledButton()}
                                type='submit' onClick={(e)=>handleOrder(e)}>Finalizar Compra</button></Link>
                        </div>
                    </div>
                    <div className="col-md-4">
                    {
                        cart && cart.map(({item,quantity} ) => 
                            <CartItem key={item.title} item={item} 
                                    quantity={quantity} showButtonRemove={false}>
                            </CartItem>)
                    }
                    <p className="totalCart">Total Compra: €{totalPriceCart()}</p>
                    </div>
                </div>
                </div> 
                </Fragment>
            : 
                    <Message text={`Todavia no compraste nada`} type={'error'} />
            
            }
        </Fragment> 
    )
}