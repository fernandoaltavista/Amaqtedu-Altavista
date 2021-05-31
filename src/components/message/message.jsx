import problemImage from '../../assets/images/png/problems.png'
import succesImage from '../../assets/images/png/succes.png'
import {Link} from 'react-router-dom'
import './message.css'

export const Message = (props) =>{
    return(
        <div className="containerMessage">   
            <p className="textMessage">{props.text}</p>
            <img className="imageMessage" 
                src={props.type==='succes' ? succesImage : problemImage} alt="message"></img>
            <Link to='/'><button className="buttonHome">Volver al home</button>
            </Link>
        </div>
    )
}