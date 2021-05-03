import './login.css'

export const Login = (props) => {
    return (
        <div className="login">
            <img src={props.user.image} className="userImage"alt="User"></img>
        </div>
    )
}