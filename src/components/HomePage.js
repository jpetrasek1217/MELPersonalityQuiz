import Footer from './Footer';
import StartIcon from './assets/StartIcon.png';
import ShareIcon from './assets/shareIcon.png';
import titleImage from './assets/titleImage.jpg';
import { Link, useNavigate } from 'react-router-dom';
import classes from './HomePage.module.css';



function HomePage(){

    let navigate = useNavigate();


    function handleShare() {
        navigator.clipboard.writeText("https://jpetrasek1217.github.io/MelPersonalityQuiz/");
        alert("Result copied to clipboard!");
    }

    function handleStart() {
        navigate("/MelPersonalityQuiz/quiz");
    }

    return(
        <div className={classes.homePageContainer}>
            <div className={classes.notFooter}>
                <h1 className={classes.HomeTitle}>Which MEL Exec are you?</h1>
                <img className={classes.titleImage} src={titleImage} alt="Welcome to the Quiz!"/>
                <Link className={classes.Link} to='/MelPersonalityQuiz/quiz'>
                    <button className={classes.StartButton} onClick={handleStart}>
                        <img className={classes.buttonIcon} src={StartIcon} alt="Start icon" />
                        START QUIZ
                    </button>
                </Link>
                <button className={classes.ShareButton} onClick={handleShare}>
                    <img className={classes.buttonIcon} src={ShareIcon} alt="Start icon" />
                    Share Quiz
                </button>
            </div>
            <Footer className={classes.titleFooter}/>
        </div>
    );
}

export default HomePage;