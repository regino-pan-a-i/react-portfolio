import './index.scss';
import { Link,  NavLink } from 'react-router-dom';
import LogoS from  '../../assets/images/logo-s.png';
import LogoSubtitle from  '../../assets/images/logo_sub.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
const Sidebar = () => 
  
    <div className="navBar">
        <Link className='logo' to='/'>
        <img src = {LogoS} alt='logo'/>
        <img className='subLogo' src = {LogoSubtitle} alt='slogo'/>
        </Link>
        <nav>
            <NavLink exact='true' activeClassName='active' to='/'>
            <FontAwesomeIcon icon ={faHome} color='#4d4d4e'/>
            </NavLink>
            <NavLink exact='true' activeClassName='active' className='aboutLink' to='/about'>
            <FontAwesomeIcon icon ={faUser} color='#4d4d4e'/>
            </NavLink>
            <NavLink exact='true' activeClassName='active' className='contactLink' to='/contact'>
            <FontAwesomeIcon icon ={faEnvelope} color='#4d4d4e'/>
            </NavLink>
            
            <ul>
                <li>
                    <a 
                        target="_blank" 
                        rel="noreferrer" 
                        href="https://www.byui.edu"
                    >
                        <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e'/>
                    </a>
                </li>
                <li>
                    <a 
                        target="_blank" 
                        rel="noreferrer" 
                        href="https://www.byui.edu"
                    >
                        <FontAwesomeIcon icon={faGithub} color='#4d4d4e'/>
                    </a>
                </li>
            </ul>
        </nav>
    </div>

export default Sidebar;