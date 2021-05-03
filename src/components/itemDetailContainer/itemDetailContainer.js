import './itemDetailContainer.css'
import {useState,useEffect } from 'react'
import { ItemDetail } from '../itemDetail/itemDetail';
import { useParams } from 'react-router';
import { Loader } from '../loader/loader';

export const ItemDetailContainer = ({data}) => {

const {id} = useParams()
const [item, setItem] = useState([])
const [isLoading, setIsLoading] = useState(false)

const getItem = (data) => {
   let itemfind = data.find(item => item.id === id)
   return itemfind
}

const getList = ((data) =>{
    return new Promise((resolve)=> {
    setTimeout(() => { 
        return resolve(getItem(data))
    }, 2000);
})
})

useEffect(() => {
        setIsLoading(true)
        getList(data)
        .then(result => setItem(result))
        .finally(()=>setIsLoading(false))
    
},[])

    return (
            <div className="itemDetailContainer">
                { isLoading ? (<Loader /> ) 
                : ( <ItemDetail item={item} /> )}
            </div>

    )
}