import './footer.css'

export const Footer = ()=>{

    return(
        <footer className="footer ">
            <div className=" footerIcons container">
                <p className="textFooter">by</p>
                <a href="https://github.com/fernandoaltavista" target="_blanck"> 
                    <span className="logoGitHub"></span></a>
                <a href="https://www.linkedin.com/in/fernando-andres-altavista-614453201/" 
                    target="_blanck">
                    <span className="logoLinke"></span></a>
                <p className="textFooter">with React</p>
            </div>
        </footer>

        
    )
}