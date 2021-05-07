import './itemCount.css'
import {useState} from 'react'

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
        <div>
            <div className="itemCount">
                <button className="buttonCount" onClick={decrement}>-</button>
                <span className="numberCount" >{count}</span>
                <button className="buttonCount" onClick={increment}>+</button>
            </div>
            <div className="buttonAddContainer">
                <button className="buttonAdd" onClick={() => {onAdd(count)
                }}>AGREGAR AL CARRITO</button>
            </div>
        </div>
    )
}