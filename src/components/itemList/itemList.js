import './itemList.css'
import {Item} from '../item/item'
import {useState,useEffect} from 'react'

export const ItemList = ({list}) => {
    
const [items, setItems] = useState([])

const getList = ((data) =>{
    return new Promise((resolve)=> {
    setTimeout(() => {
        return resolve(data)
    }, 2000);
    })
})

useEffect(() => {
    getList(list).then(result => {
    setItems(result)
    })
}, [])

    return (
    
        <div className="itemList">
            <div className="row">
                {items && items.map(item => 
                    
                    <Item key={item.id} item={item}></Item>

                    
                )}
                
            </div>
        </div>
    )
}