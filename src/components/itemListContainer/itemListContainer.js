import './itemListContainer.css'
import {ItemList} from '../itemList/itemList'

export const ItemListContainer = ({data}) => {

    return(
        <div className="itemListContainer">
            <ItemList data={data}/>
        </div>
    )
}