import './Footer.css'
import logo from '../../assets/img/logo.png'
import twitter from '../../assets/img/twitter-icon.png'
import facebook from '../../assets/img/facebook-icon.png'
import instagram from '../../assets/img/instagram.png'

const Footer = () => {
    return ( 
        <footer>
            <div className="container footer-container">
                <div className="footer-col1">
                    <img src={logo} alt="" />
                </div>
                {/* social link's */}
                <div className="footer-col2">
                    <img src={twitter} alt="" />
                    <img src={facebook} alt="" />
                    <img src={instagram} alt="" />
                </div>
                <div className="footer-col3">
                    <p>Copywright 2020 Bella Onojie.com</p>
                </div>
            </div>
        </footer>
     );
}
 
export default Footer;