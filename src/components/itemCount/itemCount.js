import {useState} from 'react'
import './itemCount.css'

export const ItemCount = ({stock,initial,onAdd}) =>  {
   
    const [count, setCount] = useState(initial)
    
    const increment = () =>  { if (count < stock) {
        setCount(count + 1)
        stock =- 1
    }
    }
    const decrement = () =>  { if (count > initial)  {
        setCount(count - 1) 
        stock =+ 1
    } else {
        setCount(1)
    }
    }

    return (   

        <div className="itemCount">
            
            <button className="btn-primary" onClick={increment}>+</button>
            <span className="numberCount" >{count}</span>
            <button className="btn-danger" onClick={decrement}>-</button>
           <div className="buttonAdd">
                <button className="btn-primary" onClick={(event) => {
                onAdd(event,count)
                setCount(1)}}>Agregar</button>
            </div>
            
        </div> 
        

        
    )
}