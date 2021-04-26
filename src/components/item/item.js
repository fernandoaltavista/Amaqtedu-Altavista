import './item.css'

export const Item = ({item})=> {
    return (
        <div className="item col-4">

            <img className="imageProduct" src={item.pictureUrl} alt={item.title}/>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <strong>{item.price}</strong>
        </div>
    )
}