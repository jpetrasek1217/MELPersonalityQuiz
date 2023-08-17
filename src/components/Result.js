import classes from "./Result.module.css";
import restartIcon from './assets/restart.png';
import shareIcon from './assets/shareIcon.png';
import Jonathan from './assets/JONATHAN.png';
import Carmen from './assets/CARMEN.png';
import Bashar from './assets/BASHAR.png';
import Qureshi from './assets/QURESHI.png';
import Mohaimen from './assets/MOHAIMEN.png';
import Medha from './assets/MEDHA.png';
import Victoria from './assets/VICTORIA.png';
import Annie from './assets/ANNIE.png';
import {Link, useNavigate } from "react-router-dom";

function Result(props){

    let navigate = useNavigate();

    function getResultImage(){
        if (props.title === "JONATHAN"){
            return Jonathan;
        } if (props.title === "CARMEN"){
            return Carmen;
        } if (props.title === "ANNIE"){
            return Annie;
        } if (props.title === "BASHAR"){
            return Bashar;
        } if (props.title === "QURESHI"){
            return Qureshi;
        } if (props.title === "MOHAIMEN"){
            return Mohaimen;
        } if (props.title === "MEDHA"){
            return Medha;
        } if (props.title === "VICTORIA"){
            return Victoria;
        }
    }
    
    const copyToClip = () => {
        navigator.clipboard.writeText("You got " + props.title + "\n"  + "Find out your MEL Exec at\n" + "https://jpetrasek1217.github.io/MelPersonalityQuiz/");
        alert("Result copied to clipboard!");
    }

    return(
        <div className={classes.ResultContainer}>
            <h1 className={classes.ResultTitle}>YOU GOT {props.title}</h1>
            <img className={classes.ResultImage} src={getResultImage()} alt={props.title} />
            <div className={classes.buttonsContainer}>
                <Link className={classes.Link} to="/MelPersonalityQuiz/quiz" onClick={navigate("/MelPersonalityQuiz/quiz")}>
                    <button className={classes.Button} onClick={navigate("/MelPersonalityQuiz/quiz")}>
                        <img className={classes.buttonIcon} src={restartIcon} alt="restart icon" />
                        Restart
                    </button>
                </Link>
                <button className={classes.Button} onClick={copyToClip}>
                    <img className={classes.buttonIcon} src={shareIcon} alt="copy icon"/>
                    Share
                </button>
            </div>
        </div>
    );
}

export default Result;