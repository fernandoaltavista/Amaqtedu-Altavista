import './navbar.scss'
import {CartWidget} from '../cartWidget/cartWidget'
import {NavLink} from 'react-router-dom'
import {useState} from 'react'
import category from '../../service/category.json'
import logo from'../../assets/images/svg/logo_peq.png'

export const Navbar = () => {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeClick = ()=> setClick(false)

return (
    <header>
        <nav className="navbar">
            <NavLink exact to='/'><img src={logo} 
                    className="Logo" alt=""/>
            </NavLink>
                
            <ul className={click ? "sidebar active" : "sidebar"}>
                <li onClick={closeClick}>
                    <NavLink exact to='/' className="itemNav" 
                    activeClassName="selectedLink">
                        Home
                    </NavLink>
                </li>

            { category.map(({id,categoryName,route}) =>
                <li key={id} onClick={closeClick}>
                    <NavLink to={route} 
                        className="itemNav"
                        activeClassName="selectedLink" >
                            {categoryName}
                    </NavLink>
                </li>)
            }

                <li onClick={closeClick}>
                    <NavLink to='/contact' className="itemNav" 
                    activeClassName="selectedLink">
                        Contacto
                    </NavLink>
                </li>
                    
            </ul>

            <div className="loginContainer">
                <NavLink to='/cart' className="itemNav"><CartWidget /></NavLink>
                <div className="mobile-menu" onClick={handleClick}>
                    {click ? 
                        <span className="icon-close"></span> 
                        :
                        <span className="icon-toggler" ></span>}
                </div>

            </div>
            
        </nav>

    </header>
        
        
    )
}