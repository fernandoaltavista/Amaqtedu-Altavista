import './itemDetail.css'
import {ItemCount} from '../itemCount/itemCount'

export const ItemDetail = ({item}) => {
 const onAdd = (count) => {
    alert(`Agrego al carrito ${count}`)
   
 }
    return(
    
        <div className="itemDetail">
            <div className="container">
                <div className="row">
                    <div className="col-md-7">
                        <img className="imageItemDetail"src={item.pictureUrl} alt={item.id}></img>
                    </div>
                    <div className="col-md-5 textItemDetail">  
                        <h1 className="titleItemDetail">{item.title}</h1>
                        <h1 className="priceItemDetail">{item.price}</h1>
                        <p className="descriptionItemDetail">{item.description}</p>
                        <ItemCount stock={item.stock} initial={1} onAdd={onAdd}/>
                    </div>
                </div> 
            </div>
        </div>
    )
}