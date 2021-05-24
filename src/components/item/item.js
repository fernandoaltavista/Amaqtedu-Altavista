import './item.css'
import {Link} from 'react-router-dom'


export const Item = ({item})=> {

    return (
        
            <div className="item col-12 col-md-6 col-lg-3">
                <Link to={`/item/${item.id}`}> 
                    <img className="pictureItem" src={item.pictureUrl} alt={item.title}/>
                    <h3 className="titleItem">{(item.title).toUpperCase()}</h3>
                    <strong className="priceItem">€{item.price}</strong>
                    {(item.stock === 0 ) && <p className="outOfStock">Sin stock</p>}
                </Link>
            </div>
        
    )
}