import './home.css'
import { Fragment } from 'react'
import {Link} from 'react-router-dom'
import category from '../../../service/category.json'
import logo from '../../../assets/images/png/logo-banner.png'

export const Home = () => {
    return (
        <Fragment>
            <div className="home">
                <img className="logoBanner" src={logo} alt="logo"></img>
                <p className="textBanner">AMAQTEDU es un proyecto social que desarrolla cursos de 
                    formación y desarrollo personal relacionados con el arte 
                    para personas sin hogar.</p> 
                <h2 className="gretting">Sumate!</h2>
            </div>
            <div className="categoryItems">
                {category.map(({categoryName,id,categoryImage,route}) =>
                    <div className="category" key={id}>
                        <Link to={route}>
                        <img className="imageCategory" src={categoryImage} alt={categoryName} ></img>
                        <p className="textCategoryHome">{categoryName.toUpperCase()}</p></Link>
                    </div>
                        )
                }
            </div>
        </Fragment>
    )
}