import './itemList.css'
import {Item} from '../item/item'
import {Loader} from '../loader/loader'
import {useParams} from 'react-router'
import {useState,useEffect} from 'react'


export const ItemList = ({data}) => {

const {categoryId} = useParams()
const [items, setItems] = useState([])
const [isLoading, setIsLoading] = useState(false)

    const getCategoryId = (data)=>{
    let itemsfind = data.filter(item => item.categoryId === categoryId)
    return itemsfind
    }

const getList = ((data) =>{
    return new Promise((resolve)=> {
    setTimeout(() => {
        if (categoryId){
            return resolve(getCategoryId(data))
        } else{
            return resolve(data)
        }
    }, 1500);
})
})

useEffect(() => {
        setIsLoading(true)
        getList(data)
        .then(result => setItems(result))
        .finally(()=> setIsLoading(false))
    
}, [categoryId])

    return (
   
        <div className="itemList">
            {
            categoryId ? (<h4 className="textCategory">Categoria: {categoryId.toUpperCase()}</h4>)
            : (<h2 className="gretting">🖌 Bienvenido a nuestra tienda</h2>)
            }
            {
            (isLoading) ? (<Loader />)
                : <div className="row"> {
                    items && items.map(item => 
                    <Item key={item.id} item={item} />)} 
                </div>
            }   
        </div>
    
)}