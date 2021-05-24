import './input.css'

export const Input = ({label,name,type,size,onInput}) => {

    return (
                <div className="containerInput">
                    <label className="formLabel">{label}</label>
                    <input  className="formInput"
                                type={type}
                                name={name}
                                size={size}
                                onInput={onInput}
                    ></input>
                </div>
    )
}