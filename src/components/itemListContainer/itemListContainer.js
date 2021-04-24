import './itemListContainer.css'
import {useState} from 'react'
import {ItemCount} from '../itemCount/itemCount'

export const ItemListContainer = () => {
const stockInitial = 8
const [stock, setStock] = useState(stockInitial)

    const confirmAdd = (event,quantity) =>{
        event.stopPropagation();
        if (stock !== 0){
            alert(`CANTIDAD ESCOGIDA: ${quantity}`)
            setStock(stock - quantity) 
        } else {
            setStock(0)
            alert('SIN STOCK')
        }
    }
    return(
        <div className="itemListContainer">
            <div className="row">
                <div className="col-3"> 
                    <p>Producto</p>
                    <ItemCount stock={stock} initial={1} onAdd={confirmAdd}/>
                </div>

            </div>
        </div>
    )
}