import 'bootstrap/dist/css/bootstrap.css'
import { ItemDetailContainer } from './components/itemDetailContainer/itemDetailContainer'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import {ItemListContainer} from './components/itemListContainer/itemListContainer'
import {Navbar} from './components/navbar/navbar'
import {Cart} from './components/cart/cart'
import {CartProvider} from './context/cartContext'
import {Home} from './components/pages/home/home'
import {FormCheckOut} from './components/formCheckOut/formCheckOut'

function App() {

  
  return (

      <BrowserRouter>
        <CartProvider > 
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
          </Switch>
        </CartProvider>
      </BrowserRouter>
      
  );
}

export default App;
