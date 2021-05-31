import {Modal,Button} from 'react-bootstrap'
import {useState} from 'react'
import {Link} from 'react-router-dom'
export const PopUp = ({showPopUp,rest,id}) => {

    const [show, setShow] = useState(showPopUp);

    const handleClose = () => setShow(false);

    return (
    <>
        
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>Oooops!!</Modal.Title>
        </Modal.Header>
        <Modal.Body>{ rest === 0 ? `No disponemos de esa cantidad en nuestro stock.`
                    :
                    `Tiene disponible solamente ${rest} producto/s`}</Modal.Body>
        <Modal.Footer>
            {
                rest!==0 &&<Link to={`/item/${id}`}><Button variant="primary" onClick={handleClose}>
                            Ir al producto
                            </Button></Link>
            }
            <Button variant="danger" onClick={handleClose}>
            Cerrar
            </Button>
        </Modal.Footer>
        </Modal>
    </>
    )
}