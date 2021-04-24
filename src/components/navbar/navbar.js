import './navbar.css'
import logo from'./logo_peq.png'
import {CartWidget} from '../cartWidget/cartWidget'

export const Navbar = (props) => {
    const COUNT = 3
    return (
        <header>
            <nav className="navbar">
                <img src={logo} className="Logo" alt=""/>
                
                <ul>
                    <li className="itemNav"><a href="#home">Home</a></li>
                    <li className="itemNav"><a href="#lienzos">Lienzos</a></li>
                    <li className="itemNav"><a href="#remera">Remeras</a></li>
                    <li className="itemNav"><a href="#contact">Contacto</a></li>
                    
                </ul>
                <CartWidget count={COUNT}/>
                
                <img src={props.user.image} className="userImage"alt="User"></img>
            </nav>
        </header>
        
        
    )
}