import './Navbar.css'
import logo from '../../assets/img/logo.png'
import menu from '../../assets/img/menu.png'
import close from '../../assets/img/close.png'

import { useState } from 'react'


const Navbar = () => {

    const [menuIcon, setmenuIcon] = useState(menu)
    const [displaymenu, setdisplayMenu] = useState(false)

    const handlemenu = (close, e) =>{
        if(menuIcon == menu){
            e.target.classList.add('close-bar')
            setmenuIcon(close)
            setdisplayMenu(true)
        }
        else{
            setmenuIcon(menu)
            setdisplayMenu(false)
            
        }
        
    }

    return ( 

        <nav>
            <div className="container nav-container">
                <div className="container-content">
                    <img src={logo} alt="site-logo" className='logo'/>

                    <img onClick={(e) => handlemenu(close, e)} src={menuIcon} alt="hanbuger menu" className='hanbuger-menu' />
                </div>

                <ul className={displaymenu? 'menu-item display-list': 'menu-item'}>
                    <li><a href="#hero-section" className='active'>Home</a></li>
                    <li><a href="#">Product</a></li>
                    <li><a href="#">Faq</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
        </nav>
    );
}
 
export default Navbar;