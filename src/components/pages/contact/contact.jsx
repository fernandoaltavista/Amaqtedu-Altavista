import './contact.css'
import {Input} from '../../input/input'
import {Message} from '../../message/message'
import {useState} from 'react'
import emailjs from 'emailjs-com'
import formFields from '../../../service/formFields.json'

export const Contact = ()=>{

const [sendMail, setSendMail] = useState(false)
const [error,setError] = useState(false)
const [form,setForm] = useState({
    name:'',
    phone:'',
    mail:''
})



const {name,phone,mail} = form


const validation = (mail,name,phone) => {
    
    const regexMail =  /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i
    const nameRegex = /^[a-z]+/gi
    const phoneRegex = /^[0-9]*$/
    
    if ((!regexMail.test(mail)) || !(nameRegex.test(name)) || (!phoneRegex.test(phone)) ){
        setError(false)
    } else {
        setError(true)
        
    }
}


const sendEmail = (e) => {
    e.preventDefault()
    emailjs.send('fer.altavista5', 'template_hl22ejl', form, 'user_476Ts68iF4lxbX30SrGtG')
        .then((result) => {
        setSendMail(true)
        }, (error) => {
        setSendMail(false)
    });
}

const disabledButton = () => [name, phone, mail].includes( undefined ||'') || !error

const handleInput = (e) =>{
    e.preventDefault()
    validation(mail,name,phone)
    const value= e.target.value.trim()
    setForm({
        ...form,
        [e.target.name]: value
    })
}
const handleBlur = (e) =>{
    e.preventDefault()
    const value= e.target.value.trim()
    setForm({
        ...form,
        [e.target.name]: value
    })
}  
    return(
            <div className="container contact">
                <div className="row">
                    <div className="col-md-6">
                        <h2 className="titleContact">Comunicate</h2>
                        {!sendMail ?
                            <form onSubmit={sendEmail}>
                                {formFields.map(({id,name,placeholder,pattern,title,value,type,label,size}) => 
                                <div key={id}>
                                    <Input label={label}
                                        value={value}
                                        name={name}
                                        title={title}
                                        placeholder={placeholder}
                                        pattern={pattern}
                                        type={type}
                                        size={size}
                                        onInput={handleInput}
                                        onBlur={handleBlur}/>
                                </div>)}
                                <input className="buttonSubmit" type="submit" 
                                disabled={disabledButton()}  value="Enviar" />
                            </form>
                        : <Message text="Tu mensaje fue existoso. En breve te contestaremos"
                                    type="succes"/>
                        }
                        
                    </div>
                    <div className="col-md-6">
                        <h2 className="titleContact">Nuestra redes</h2>
                        <div className="socialItems">
                                <a href="http://" target="_blank" rel="noopener noreferrer">
                                    <span className="iconFacebook"></span></a>
                                <a href="http://" target="_blank" rel="noopener noreferrer">
                                    <span className="iconTwitter"></span></a>
                                <a href="http://" target="_blank" rel="noopener noreferrer">
                                    <span className="iconLinkedin"></span></a>
                        </div>
                    </div>
                </div>
            </div>
    )
}