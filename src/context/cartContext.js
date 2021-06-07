import { createContext,useState} from 'react'

export const CartContext = createContext()


export const CartProvider = ({children}) => {

const [cart, setCart] = useState([])
const [totalItems, setTotalItems] = useState(0)
const [emptyStockAndRest, setEmptyStockAndRest] = useState([false,0])

    
    const addElements = (array) => array.reduce((a,b)=> a + b,0 )

    const isInCart= (id) => cart.some(({item})=> item.id === id)

    const indexInCart = (id) => cart.findIndex(({item}) => item.id === id ) 
        
    const addItem = ({item},qty) => {
        const {id,stock} = item
        const newCart= [...cart]
        setEmptyStockAndRest([false,0])

        if (isInCart(id)) {

        const quantityInCart = newCart[indexInCart(id)].quantity

        if  ((quantityInCart + qty) <= stock ){
            newCart[indexInCart(id)].quantity += qty
            setCart(newCart)

            setTotalItems(totalItems + qty)
            
        } else {
            setEmptyStockAndRest([true,stock - quantityInCart,id])
        }
            
            } else {
                
                setCart([...cart,{item :item,
                            quantity:qty}])
                setTotalItems(totalItems + qty) 

        }

        
    }

    const removeItem = (id,qty) =>{
            const newCart = cart.filter(({item})=> item.id !== id)
            setCart(newCart)
            setTotalItems(totalItems - qty)
        }

    const clear = ()=>{
            setCart([])
            setTotalItems(0)
        }
    const clearEmptyStock= ()=> setEmptyStockAndRest([false,0])

    const totalPriceCart = ()=>{
            const newCartSubTotal = cart.map(({item,quantity}) => item.price * quantity)
            return addElements(newCartSubTotal)
        }


    return (
        <CartContext.Provider value={{cart,addItem,removeItem,clear,
                                totalPriceCart,totalItems,emptyStockAndRest,
                                clearEmptyStock}} > 
            {children}
        </CartContext.Provider>
    )
}