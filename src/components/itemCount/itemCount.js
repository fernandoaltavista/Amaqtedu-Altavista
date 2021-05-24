import './itemCount.css'
import {useState} from 'react'

export const ItemCount = ({stock,initial,onAdd}) =>  {
   
    const [count, setCount] = useState(initial)

    const increment = () =>  { 
        if (count < stock) {
            setCount(count + 1)
            stock =- 1
        }
    }

    const decrement = () =>  { 
        if (count > initial)  {
            setCount(count - 1) 
            stock =+ 1
        }
    }

    const disabledButtonAdd = ()=> count === 0

    return (   
        <div>
            <div className="itemCount">
                <button className="buttonCount"disabled={disabledButtonAdd()}
                        onClick={decrement}>-</button>
                <span className="numberCount" >{count}</span>
                <button className="buttonCount"disabled={disabledButtonAdd()} 
                        onClick={increment}>+</button>
            </div>
            <div className="buttonAddContainer">
                <button className="buttonAdd" disabled={disabledButtonAdd()} onClick={() => {onAdd(count)
                }}>AGREGAR AL CARRITO</button>
            </div>
        </div>
    )
}