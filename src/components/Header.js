import classes from './Header.module.css';
import melLogo from './assets/melLogo.png';
import restart from './assets/restart.png';
import { Link } from 'react-router-dom';
import { useNavigate, useLocation} from 'react-router-dom';


function Header(){

    let navigate = useNavigate();
    const location = useLocation();

    function handleClick() {
        if (location.pathname === "/MelPersonalityQuiz/"){
            window.location.reload();
        } else {
            navigate("/MelPersonalityQuiz/"); 
        }
    }

    return(
        <div className={classes.headerContainer}>
            <Link className={classes.Link} to="/MelPersonalityQuiz" ><img src={melLogo} alt='McMaster Extra Life Logo' className={classes.headerItem} /></Link>
            <h2 className={classes.headerText}>Which MEL Exec Are You?</h2>
            <Link className={classes.Link} to="/MelPersonalityQuiz" onClick={handleClick}><img src={restart} alt='Restart Quiz' className={classes.headerItem}  /></Link>
        </div>
    );
}

export default Header;