import Footer from './Footer';
import StartIcon from './assets/StartIcon.png';
import ShareIcon from './assets/shareIcon.png';
import titleImage from './assets/titleImage.jpg';
import { Link, useNavigate } from 'react-router-dom';
import classes from './HomePage.module.css';
import { useState, useEffect } from 'react';




function HomePage(){

    let navigate = useNavigate();
    const [stylingStart, updateStyleStart] = useState({});

    useEffect( () => {
        updateStyleStart({
            height: "4vh",
            marginRight: "1vw",
            filter: `brightness(39) hue-rotate(-75deg)`
        });
    }, [])

    const [stylingShare, updateStyleShare] = useState({});

    useEffect( () => {
        updateStyleShare({
            height: "4vh",
            marginRight: "1vw",
            filter: `brightness(39) hue-rotate(-75deg)`
        });
    }, [])

    const changeStyleStart = () => {
        updateStyleStart({
            ...stylingStart,
            filter: 'none',
        });
    }

    const changeStyleStartAgain = () => {
        updateStyleStart({
            ...stylingStart,
            filter: `brightness(39) hue-rotate(-75deg)`
        });
    }

    const changeStyleShare = () => {
        updateStyleShare({
            ...stylingShare,
            filter: 'none',
        });
    }

    const changeStyleShareAgain = () => {
        updateStyleShare({
            ...stylingShare,
            filter: `brightness(39) hue-rotate(-75deg)`
        });
    }
    

    function handleShare() {
        navigator.clipboard.writeText("https://melpersonalityquiz.ca/result/");
    }

    function handleStart() {
        navigate("/quiz");
    }

    return(
        <div className={classes.homePageContainer}>
        <h1 className={classes.HomeTitle}>Which MEL Exec are you?</h1>
        <img className={classes.titleImage} src={titleImage} />
                <Link className={classes.Link} to='/quiz'>
                    <button className={classes.StartButton} onClick={handleStart} onMouseEnter={changeStyleStart} onMouseOut={changeStyleStartAgain}>
                        <img  style={stylingStart} src={StartIcon} alt="Start icon" />
                        START QUIZ
                    </button>
                </Link>
                <button className={classes.ShareButton} onClick={handleShare} onMouseEnter={changeStyleShare} onMouseOut={changeStyleShareAgain}>
                        <img  style={stylingShare} src={ShareIcon} alt="Start icon" />
                        Share Quiz
                    </button>
            <Footer className={classes.titleFooter}/>
        </div>
    );
}

export default HomePage;