import './itemList.css'
import {Item} from '../item/item'
import {Loader} from '../loader/loader'
import {useParams} from 'react-router'
import {useState,useEffect,Fragment} from 'react'
import {getFirestore} from '../../firebase/index'
import { ErrorMessage } from '../errorMessage/errorMessage'


export const ItemList = () => {

const {categoryId} = useParams()
const [items, setItems] = useState([])
const [isLoading, setIsLoading] = useState(false)

    const getCategoryId = (data)=>{
    let itemsfind = data.filter(item => item.categoryId === categoryId)
    return itemsfind
    }


    useEffect(() => {
        setIsLoading(true)
        const db= getFirestore()
        const itemCollection = db.collection("items")
        itemCollection.get().then((querySnapshot) => {
                if (querySnapshot === 0) {
                    console.log('No results')
                }
        setItems(getCategoryId(querySnapshot.docs.map(doc => ({id:doc.id,...doc.data()}))))  
        }).catch((error)=>{
            console.log('Error',error)
        }).finally(()=> setIsLoading(false))
        
    }, [categoryId])


    return (
        <div className="itemList">
            {
            (isLoading) ? (<Loader />)
                : 
                items < 1 ?
                    <ErrorMessage text={`La categoria ${categoryId} no existe`} />
                    : <Fragment>
                        <h4 className="textCategory">{categoryId.toUpperCase()}</h4> 
                        <div className="row">{
                        items.map(item => 
                        <Item key={item.title} item={item} />)} 
                        </div>
                    </Fragment>
            }   
        </div>
    
)}