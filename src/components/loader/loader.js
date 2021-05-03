import './loader.css'

export const Loader = () => {

    return (
            <div className="loader">
                <div className="sk-chase">
                    <div className="sk-chase-dot"></div>
                    <div className="sk-chase-dot"></div>
                    <div className="sk-chase-dot"></div>
                    <div className="sk-chase-dot"></div>
                    <div className="sk-chase-dot"></div>
                    <div className="sk-chase-dot"></div>
                </div>
                <p className="textLoader">Recopilando datos de servidor</p>
            </div>
    )
}