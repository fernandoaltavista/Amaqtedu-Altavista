import './navbar.css'
import {CartWidget} from '../cartWidget/cartWidget'
import {Login} from '../login/login'
import {NavLink} from 'react-router-dom'
import logo from'../../assets/images/svg/logo_peq.png'

export const Navbar = ({user}) => {

return (
    <header>
        <nav className="navbar">
            <NavLink exact to='/'><img src={logo} className="Logo" alt=""/></NavLink>
                
            <ul className="sidebar">
                <li><NavLink exact to='/' className="itemNav" activeClassName="selectedLink">Home</NavLink></li>
                <li><NavLink to='/category/lienzos' activeClassName="selectedLink" className="itemNav">Lienzos</NavLink></li>
                <li><NavLink to='/category/remeras' activeClassName="selectedLink" className="itemNav">Remeras</NavLink></li>
                <li><NavLink to='/contact' className="itemNav" activeClassName="selectedLink">Contacto</NavLink></li>
                    
            </ul>
            <div className="loginContainer">
                <NavLink to='/cart' className="itemNav"><CartWidget /></NavLink>
                <Login/>
                <span className="icon-toggler"></span>

            </div>
            
        </nav>
    </header>
        
        
    )
}