import { useLocation } from 'react-router-dom'
import './cartStage.css'

export const CartStage = ({stageActive}) => {

    const location = useLocation()
    const routeNow = location.pathname

const stages = [
    { 
        "stage" : 1,
        "text" : "Asegurate que tus productos sean los correctos",
    },
    { 
        "stage" : 2,
        "text" : "Llena el formulario con tus datos",
    },
    { 
        "stage" : 3,
        "text" : "Listo! Disfruta de tu compra",
        
    },
]


    return(
        <div className="stages">
            {
                stages.map(({stage,text}) => 

                    <div key={stage} className="stageItem" >
                        {
                            routeNow !== '/complete' ? 
                                <span className={stageActive > stage ? "selectedStage" : "stage"}></span>
                                :
                                <span className="selectedStage"></span>
                        }
                            <p className={stageActive === stage ?"stageTextSelected" : "stageText" }>{text}</p>
                        </div>
                )
            }
        </div>
    )
}