import problemImage from '../../assets/images/png/problems.png'
import {Link} from 'react-router-dom'
import './errorMessage.css'

export const ErrorMessage = (props) =>{
    return(
        <div className="containerErrorMessage">   
            <p className="textErrorMessage">{props.text}</p>
            <img className="imageProblem" src={problemImage} alt="problem"></img>
            <Link to='/'><button className="buttonHome">Volver al home</button>
            </Link>
        </div>
    )
}