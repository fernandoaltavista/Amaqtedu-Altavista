import {Navbar} from './components/navbar/navbar'
import {ItemListContainer} from './components/itemListContainer/itemListContainer'
import 'bootstrap/dist/css/bootstrap.css'

function App() {
  const USER = {
      name : 'Fernando',
      image:'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
  }
  return (
    <div className="App">
      
      <Navbar user={USER} />
      <ItemListContainer/>
    </div>
  );
}

export default App;
