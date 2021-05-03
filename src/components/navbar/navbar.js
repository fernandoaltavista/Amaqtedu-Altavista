import './navbar.css'
import logo from'./logo_peq.png'
import {NavLink} from 'react-router-dom'
import {CartWidget} from '../cartWidget/cartWidget'
import {Login} from '../login/login'

export const Navbar = ({user}) => {
    const COUNT = 3
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
                <CartWidget count={COUNT}/>
                <Login user= {user}/>
                <span className="icon-toggler"></span>

            </div>
            
        </nav>
    </header>
        
        
    )
}