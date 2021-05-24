import './itemDetail.css'
import { Link } from 'react-router-dom'
import {CartContext} from '../../context/cartContext'
import {ItemCount} from '../itemCount/itemCount'
import {useState,useEffect,useContext} from 'react'


export const ItemDetail = ({item}) => {

const [quantity, setQuantity] = useState(0)
const [stockInCart,setStockInCart] = useState(item.stock)
const [finishAdd,setFinishAdd] = useState(true)
const {addItem,cart} = useContext(CartContext)

const {id}= item   
const initialStock = (stock)=> stock <= 0 ? 0 : 1


const quantityInCart = (id)=> cart.find(({item})=> item.id === id )


const onAdd = (quantity) => {
    setQuantity(quantity)
}

const toPay = (qtyItem)=> {
    addItem({item},qtyItem)
    setQuantity(0)
}


useEffect(() => {
    
    if (quantityInCart(id) !== undefined ){
        let stockTemporaly = quantityInCart(id).item.stock
        let quantityTemporaly = quantityInCart(id).quantity
        setStockInCart(stockTemporaly - quantityTemporaly)
    }
    
    if (quantity !== 0) {
        setFinishAdd(false)
    } 

}, [quantity])

    return(
    
        <div className="itemDetail">
            <div className="container">
                <div className="row">
                    <div className="col-md-7">
                        <img className="imageItemDetail"src={item.pictureUrl} alt={item.title}></img>
                    </div>
                    <div className="col-md-5 textItemDetail">  
                        <h1 className="titleItemDetail">{item.title}</h1>
                        <h1 className="priceItemDetail">€{item.price}</h1>
                        <p className="descriptionItemDetail">{item.description}</p>
                        <p className="stockItemDetail">Stock: {item.stock === stockInCart ?
                            item.stock : ` ${stockInCart} - Temporal`}</p>
                        <div className="buttonAddContainer">
                        { finishAdd  ? ( 
                            <ItemCount stock={stockInCart} initial={initialStock(item.stock)} onAdd={onAdd}/>
                            ) 
                            :( 
                                <div>
                                    <Link to="/cart"><button onClick={()=>toPay(quantity)}
                                    className="buttonFinish">
                                        Terminar compra
                                    </button></Link>
                                </div>
                            )
                        }
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    )
}