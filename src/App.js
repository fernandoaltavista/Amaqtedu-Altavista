import 'bootstrap/dist/css/bootstrap.css'
import { ItemDetailContainer } from './components/itemDetailContainer/itemDetailContainer'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import {ItemListContainer} from './components/itemListContainer/itemListContainer'
import {Navbar} from './components/navbar/navbar'
import {Cart} from './components/cart/cart'
import data from './components/products/products.json'
import {CartProvider} from './context/cartContext'

function App() {

  
  return (

      <BrowserRouter>
        <CartProvider > 
          <Navbar />
          <Switch>
            <Route exact path='/'>
              <ItemListContainer data={data}/>
            </Route>
            <Route path='/category/:categoryId'>
              <ItemListContainer data={data}/>
            </Route>
            <Route path='/item/:id'>
              <ItemDetailContainer data={data} />
            </Route>
            <Route path='/cart'>
              <Cart/>
            </Route>
          </Switch>
        </CartProvider>
      </BrowserRouter>
      
  );
}

export default App;
