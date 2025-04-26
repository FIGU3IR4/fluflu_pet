import "./header.css";

function Footer(){
    return(

        <div className="footer">
            <div className="footer-content">
                <h2>Fluflu Pet</h2>
                <p>O seu melhor amigo merece o melhor!</p>
            </div>
            <div className="social-media">
                <a href="#"><i className="fa-brands fa-facebook"></i></a>
                <a href="#"><i className="fa-brands fa-instagram"></i></a>
                <a href="#"><i className="fa-brands fa-twitter"></i></a>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2025 Fluflu Pet. Todos os direitos reservados.</p>
            </div>
            <div className="footer-bottom">
                <p>Desenvolvedores:</p>
                <ul className="dev-list">
                    <li>Victor Figueira</li>
                    <li>Wesley Figueira</li>
                    <li>Allan D'Avila</li>
                    <li>Fabio Reis</li>
                </ul>
          
        </div>
        </div>


    )
} export default Footer;