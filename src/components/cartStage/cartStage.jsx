import './cartStage.css'
import { useLocation } from 'react-router-dom'
import stages from '../../service/stages.json'

export const CartStage = ({stageActive}) => {

    const location = useLocation()
    const routeNow = location.pathname


    return(
        <div className="stages">
            {
                stages.map(({idStage,text}) => 

                    <div key={idStage} className="stageItem" >
                        {
                            routeNow !== '/completed' ? 
                                <span className={stageActive > idStage ? "selectedStage" : "stage"}></span>
                                :
                                <span className="selectedStage"></span>
                        }
                            <p className={stageActive === idStage ?"stageTextSelected" : "stageText" }>{text}</p>
                        </div>
                )
            }
        </div>
    )
}