import './itemListContainer.css'

import {useState} from 'react'
// import {ItemCount} from '../itemCount/itemCount'
import {ItemList} from '../itemList/itemList'

export const ItemListContainer = () => {
    const list = [{
        id:'1',
        title:'Lienzo 1',
        description:'Aqui va una descripcion',
        price:'$100',
        pictureUrl:'https://amaqtedu.es/wp-content/uploads/2020/11/anonimo.jpg'
        },
        {
        id:'2',
        title:'Lienzo 2',
        description:'Aqui va una descripcion',
        price:'$100',
        pictureUrl:'https://amaqtedu.es/wp-content/uploads/2020/08/Lienzo-natu-9-300x300.jpg'
        },
        {
        id:'3',
        title:'Lienzo 3',
        description:'Aqui va una descripcion',
        price:'$100',
        pictureUrl:'https://amaqtedu.es/wp-content/uploads/2020/08/Lienzo-natu-9-300x300.jpg'
        },
        {
        id:'4',
        title:'Lienzo 4',
        description:'Aqui va una descripcion',
        price:'$100',
        pictureUrl:'https://amaqtedu.es/wp-content/uploads/2020/08/Lienzo-natu-9-300x300.jpg'
        },]

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
            <ItemList list={list}/>
            {/* <ItemCount stock={stock} initial={1} onAdd={confirmAdd}/> */}
        </div>
    )
}