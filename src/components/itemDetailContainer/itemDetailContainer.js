import './itemDetailContainer.css'
import {useState,useEffect } from 'react'
import { ItemDetail } from '../itemDetail/itemDetail';
import { useParams } from 'react-router';
import { Loader } from '../loader/loader';
import {getFirestore} from '../../firebase/index'
import {Message} from '../message/message'

export const ItemDetailContainer = () => {

const {id} = useParams()
const [item, setItem] = useState(null)
const [isLoading, setIsLoading] = useState(false)


useEffect(() => {
    setIsLoading(true)
    const db= getFirestore()
    const itemCollection = db.collection("items")
    const itemDetailCollection = itemCollection.doc(id)
    itemDetailCollection.get().then((doc) => {
            if (doc === 0) {
                console.log('No results')
            }
            const existProduct = doc.data(id)
            if (existProduct) {
                setItem({id:doc.id , ...doc.data(id)});
            }

        
    }).catch((error)=>{
        console.log('Error',error)
    }).finally(()=> setIsLoading(false))
    
}, [id])

    return (
            <div>
                { isLoading ? (<Loader /> ) 
                : 
                item ?  <ItemDetail item={item} /> 
                    : 
                    <Message text="Este producto no esta en la lista" type="error"/>
                }
            </div>

    )
}