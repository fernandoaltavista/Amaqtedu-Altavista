import './home.css'
import imgBanner from '../../../assets/images/png/banner.jpg'

export const Home = () => {
    return (
        <div className="home">
        <h2 className="gretting">🖌 Bienvenido a nuestra tienda</h2>
        <img src={imgBanner} alt='banner' className="imgBanner"></img>
        </div>
    )
}