import { createContext,useState} from 'react'
import emailjs from 'emailjs-com'

export const OrderContext = createContext()

export const OrderProvider = ({children}) => {

    const [order,setOrder] = useState()
    

    const addOrder = (order) => order !== undefined ? setOrder(order) : false 

    const sendEmail = (e) => {

        const newOrder= {name: e.buyer.name,
                        mail: e.buyer.mail,
                        total:e.total,
                        id:e.id,
                        }

        emailjs.send('fer.altavista5', 'template_obz1a5v',newOrder, 'user_476Ts68iF4lxbX30SrGtG')
            .then((result) => {
            console.log('Mensaje exitoso')
            }, (error) => {
            console.log('Error')
            });
        
    }

    return(
        <OrderContext.Provider value={{addOrder,order,sendEmail}}>
            {children}
        </OrderContext.Provider>
    )
}