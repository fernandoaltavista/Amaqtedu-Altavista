import './input.css'
export const Input = ({label,name,type,placeholder,pattern,title,size,onInput,onBlur,error}) => {

    return (
                <div className="containerInput">
                    <label className="formLabel">{label}</label>
                    <input  className={error ? "formInput":"inputError"}
                                type={type}
                                name={name}
                                title={title}
                                placeholder={placeholder}
                                pattern={pattern}
                                size={size}
                                onInput={onInput}
                                onBlur={onBlur}
                    ></input>
                </div>
    )
}