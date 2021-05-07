import 'bootstrap/dist/css/bootstrap.css'
import { ItemDetailContainer } from './components/itemDetailContainer/itemDetailContainer'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import {ItemListContainer} from './components/itemListContainer/itemListContainer'
import {Navbar} from './components/navbar/navbar'
import {Cart} from './components/cart/cart'
import data from './components/products/products.json'

function App() {
  const USER = {
      name : 'Fernando',
      image:'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
  }
  return (
   
      <BrowserRouter>
        <Navbar user={USER} />
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
      </BrowserRouter>
      
  );
}

export default App;
