import classes from "./Result.module.css";
import restartIcon from './assets/restart.png';
import ECAN from './assets/QuestionImage.JPG';
import shareIcon from './assets/frontArrow.png';
import {Link, useNavigate } from "react-router-dom";

function Result(props){

    let navigate = useNavigate();

    
    return(
        <div className={classes.ResultContainer}>
            <h1 className={classes.ResultTitle}>YOU GOT {props.title}</h1>
            <img className={classes.ResultImage} src={props.title} alt="result photo" />
            <div className={classes.buttonsContainer}>
                <Link className={classes.Link} to="/quiz" onClick={navigate("/quiz")}>
                    <button className={classes.Button} onClick={navigate("/quiz")}>
                        <img className={classes.buttonIcon} src={restartIcon} alt="restart icon" />
                        Restart Quiz
                    </button>
                </Link>
                <button className={classes.Button}>
                    <img className={classes.buttonIcon} src={shareIcon} alt="restart icon" onClick={() => {navigator.clipboard.writeText("https://melpersonalityquiz.ca/result/" + props.title)}}/>
                    Copy Result
                </button>
            </div>
        </div>
    );
}

export default Result;