import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
import { ItemDetailContainer } from './components/itemDetailContainer/itemDetailContainer'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import {Cart} from './components/cart/cart'
import {CartProvider} from './context/cartContext'
import {FormCheckOut} from './components/formCheckOut/formCheckOut'
import {Home} from './components/pages/home/home'
import {ItemListContainer} from './components/itemListContainer/itemListContainer'
import {Navbar} from './components/navbar/navbar'
import {Footer} from './components/footer/footer'
import {Order} from './components/order/order'
import {Contact} from './components/pages/contact/contact'
import { OrderProvider } from './context/orderContext'
import {Error} from './components/error/error404'

function App() {

  
  return (

      <BrowserRouter>
        <CartProvider > 
          <OrderProvider>
          <Navbar />
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/category/:categoryId'>
              <ItemListContainer />
            </Route>
            <Route path='/item/:id'>
              <ItemDetailContainer />
            </Route>
            <Route path='/cart'>
              <Cart/>
            </Route>
              <Route path='/form'>
                <FormCheckOut/>
              </Route>
              <Route path='/completed'>
                <Order/>
              </Route>
            <Route path='/contact'>
              <Contact/>
            </Route>
            <Route component={Error}>
            </Route>
          </Switch>
          <Footer/>
            </OrderProvider>
          </CartProvider>
      </BrowserRouter>
      
  );
}

export default App;
