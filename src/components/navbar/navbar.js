import './navbar.css'
import logo from'./logo_peq.png'
export const Navbar = () => {

    return (
        <header>
            <nav className="top-navbar">
                <img src={logo} className="logo" alt=""/>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#lienzos">Lienzos</a></li>
                    <li><a href="#remera">Remeras</a></li>
                    <li><a href="#contact">Contacto</a></li>
                    
                </ul>
            </nav>
        </header>
    )
}