import { createContext,useState,useEffect} from 'react'

export const CartContext = createContext()


export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([])
    const [quantity, setQuantity] = useState(0)

    const addElements = (array) => {
       return array.reduce((a,b)=> a + b,0 )
    }
    const isInCart = (id) => {
        const findItem = cart.findIndex(({item}) => item.id === id )
        return findItem
    }

    const addItem = ({item},qty) =>{

    if (isInCart(item.id) >= 0) {
        cart[isInCart(item.id)].quantity += qty
        setCart(cart)
    } else {
        setCart([...cart,{item :item,
                        quantity:qty}])
    }

    }
    const removeItem = (id) =>{
        const newCart = cart.filter(({item})=> item.id !== id)
        setCart(newCart)
    }

    const clear = ()=>{
        setCart([])
    }
    const totalCart = ()=>{
        const newCartSubTotal = cart.map(({item,quantity}) => item.price * quantity)
        return addElements(newCartSubTotal)
    }
    const itemsTotal = () => {
        const newCartQtyItem = cart.map(({item,quantity})=> quantity)
        return addElements(newCartQtyItem)
    }
    useEffect(() => {
        setQuantity(itemsTotal())
        
    }, [cart])

    return (
        <CartContext.Provider value={{cart,addItem,removeItem,clear,totalCart,quantity}} > 
            {children}
        </CartContext.Provider>
    )
}