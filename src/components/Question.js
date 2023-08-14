import React from 'react';
import classes from './Question.module.css';
import questionImage from './assets/QuestionImage.JPG';

import QuizBank from './QuestionBank';
import { useState, useEffect } from 'react';
import { useNavigate} from 'react-router-dom';



function Question() {

    const [player, setPlayer] = useState({
        extravert: 0,
        introvert: 0,
        competitive: 0,
        casual: 0,
        toxic: 0,
        nutric: 0
    });

    let navigate = useNavigate();
    const [currentQ, setCurrentQ] = useState("");
    const [progress, setProgress] = useState("");



    useEffect( () => {
        setCurrentQ(QuizBank[0])
    }, [])

    useEffect( () => {
        setProgress(0)
    }, [])

    function handleClickA(){
        console.log([player.introvert, player.extravert, player.casual, player.competitive, player.toxic, player.nutric]);
        console.log("added stuff from question" + currentQ.id);

        if(progress < 91) {
            setProgress(progress + 10);
        }
        
        if (currentQ.idNextQuestionA !== 18){
            const nextQ = QuizBank.find(question => question.id === currentQ.idNextQuestionA);
            setCurrentQ(nextQ)
        } else {
            showResult();
        }
            const updatePlayer = () => {
                if (currentQ.extravertAdderA){
                    setPlayer(prevPlayer => ({
                        ...prevPlayer,
                        extravert: prevPlayer.extravert + currentQ.extravertAdderA
                    }));
                }
                if (currentQ.introvertAdderA){
                    setPlayer(prevPlayer => ({
                        ...prevPlayer,
                        introvert: prevPlayer.introvert + currentQ.introvertAdderA
                    }));
                }
                if (currentQ.competitiveAdderA){
                    setPlayer(prevPlayer => ({
                        ...prevPlayer,
                        competitive: prevPlayer.competitive + currentQ.competitiveAdderA
                    }));
                }
                if (currentQ.casualAdderA){
                    setPlayer(prevPlayer => ({
                        ...prevPlayer,
                        casual: prevPlayer.casual + currentQ.casualAdderA
                    }));
                }
                if (currentQ.toxicAdderA){
                    setPlayer(prevPlayer => ({
                        ...prevPlayer,
                        toxic: prevPlayer.toxic + currentQ.toxicAdderA
                    }));
                }
                if (currentQ.nutricAdderA){
                    setPlayer(prevPlayer => ({
                        ...prevPlayer,
                        nutric: prevPlayer.nutric + currentQ.nutricAdderA
                    }));
                }
            }
    

            updatePlayer();
            console.log([player.introvert, player.extravert, player.casual, player.competitive, player.toxic, player.nutric]);
        }
    
  
    function handleClickB(){
        console.log([player.introvert, player.extravert, player.casual, player.competitive, player.toxic, player.nutric]);



        console.log("added stuff from question" + currentQ.id);
        
        if(progress < 91) {
            setProgress(progress + 10);
        }
        
        if (currentQ.idNextQuestionB !== 18){
            const nextQ = QuizBank.find(question => question.id === currentQ.idNextQuestionB);
            setCurrentQ(nextQ);
        } else {
            showResult();
        }
            
    const updatePlayer = () => {
        if (currentQ.extravertAdderB){
            setPlayer(prevPlayer => ({
                ...prevPlayer,
                extravert: prevPlayer.extravert + currentQ.extravertAdderB
            }));
        }
        if (currentQ.introvertAdderB){
            setPlayer(prevPlayer => ({
                ...prevPlayer,
                introvert: prevPlayer.introvert + currentQ.introvertAdderB
            }));
        }
        if (currentQ.competitiveAdderB){
            setPlayer(prevPlayer => ({
                ...prevPlayer,
                competitive: prevPlayer.competitive + currentQ.competitiveAdderB
            }));
        }
        if (currentQ.casualAdderB){
            setPlayer(prevPlayer => ({
                ...prevPlayer,
                casual: prevPlayer.casual + currentQ.casualAdderB
            }));
        }
        if (currentQ.toxicAdderB){
            setPlayer(prevPlayer => ({
                ...prevPlayer,
                toxic: prevPlayer.toxic + currentQ.toxicAdderB
            }));
        }
        if (currentQ.nutricAdderB){
            setPlayer(prevPlayer => ({
                ...prevPlayer,
                nutric: prevPlayer.nutric + currentQ.nutricAdderB
            }));
        }
    }
            updatePlayer();
        console.log([player.introvert, player.extravert, player.casual, player.competitive, player.toxic, player.nutric]);
    }


    function handleClickC(){
        console.log([player.introvert, player.extravert, player.casual, player.competitive, player.toxic, player.nutric]);



        console.log("added stuff from question" + currentQ.id);
        
        if(progress < 91) {
            setProgress(progress + 10);
        }
        
        if (currentQ.idNextQuestionC !== 18){
            const nextQ = QuizBank.find(question => question.id === currentQ.idNextQuestionC);
            setCurrentQ(nextQ);
        } else {
            showResult();
        }
            
    const updatePlayer = () => {
        if (currentQ.extravertAdderC){
            setPlayer(prevPlayer => ({
                ...prevPlayer,
                extravert: prevPlayer.extravert + currentQ.extravertAdderC
            }));
        }
        if (currentQ.introvertAdderC){
            setPlayer(prevPlayer => ({
                ...prevPlayer,
                introvert: prevPlayer.introvert + currentQ.introvertAdderC
            }));
        }
        if (currentQ.competitiveAdderC){
            setPlayer(prevPlayer => ({
                ...prevPlayer,
                competitive: prevPlayer.competitive + currentQ.competitiveAdderC
            }));
        }
        if (currentQ.casualAdderC){
            setPlayer(prevPlayer => ({
                ...prevPlayer,
                casual: prevPlayer.casual + currentQ.casualAdderC
            }));
        }
        if (currentQ.toxicAdderC){
            setPlayer(prevPlayer => ({
                ...prevPlayer,
                toxic: prevPlayer.toxic + currentQ.toxicAdderC
            }));
        }
        if (currentQ.nutricAdderC){
            setPlayer(prevPlayer => ({
                ...prevPlayer,
                nutric: prevPlayer.nutric + currentQ.nutricAdderC
            }));
        }
    }
            updatePlayer();
        console.log([player.introvert, player.extravert, player.casual, player.competitive, player.toxic, player.nutric]);
    }


    function handleClickD(){
        console.log([player.introvert, player.extravert, player.casual, player.competitive, player.toxic, player.nutric]);



        console.log("added stuff from question" + currentQ.id);
        
        if(progress < 91) {
            setProgress(progress + 10);
        }
        
        if (currentQ.idNextQuestionD !== 18){
            const nextQ = QuizBank.find(question => question.id === currentQ.idNextQuestionD);
            setCurrentQ(nextQ);
        } else {
            showResult();
        }
            
    const updatePlayer = () => {
        if (currentQ.extravertAdderD){
            setPlayer(prevPlayer => ({
                ...prevPlayer,
                extravert: prevPlayer.extravert + currentQ.extravertAdderD
            }));
        }
        if (currentQ.introvertAdderD){
            setPlayer(prevPlayer => ({
                ...prevPlayer,
                introvert: prevPlayer.introvert + currentQ.introvertAdderD
            }));
        }
        if (currentQ.competitiveAdderD){
            setPlayer(prevPlayer => ({
                ...prevPlayer,
                competitive: prevPlayer.competitive + currentQ.competitiveAdderD
            }));
        }
        if (currentQ.casualAdderD){
            setPlayer(prevPlayer => ({
                ...prevPlayer,
                casual: prevPlayer.casual + currentQ.casualAdderD
            }));
        }
        if (currentQ.toxicAdderD){
            setPlayer(prevPlayer => ({
                ...prevPlayer,
                toxic: prevPlayer.toxic + currentQ.toxicAdderD
            }));
        }
        if (currentQ.nutricAdderD){
            setPlayer(prevPlayer => ({
                ...prevPlayer,
                nutric: prevPlayer.nutric + currentQ.nutricAdderD
            }));
        }
    }
            updatePlayer();
        console.log([player.introvert, player.extravert, player.casual, player.competitive, player.toxic, player.nutric]);
    }


    function showResult(){
        if (player.extravert > player.introvert){
            if (player.competitive > player.casual){
                if(player.toxic > player.nutric){
                    navigate(`/result/ECOT`);
                } else {
                    navigate(`/result/ECON`);
                }
            } else {
                if(player.toxic > player.nutric){
                    navigate(`/result/ECAT`);
                } else {
                    navigate(`/result/ECAN`);
                }
            }
        } else {
            if (player.competitive > player.casual){
                if(player.toxic > player.nutric){
                    navigate(`/result/ICOT`);
                } else {
                    navigate(`/result/ICON`);
                }
            } else {
                if(player.toxic > player.nutric){
                    navigate(`/result/ICAT`);
                } else {
                    navigate(`/result/ICAN`);
                }
            }
        }
    }


    return(
    <div className={classes.QuestionContainer}>
        <h1 className={classes.QuestionText}>{currentQ.question}</h1>
        <div className={classes.progressBarContainer}>
          <div className={classes.movingBackground} style={{width: `${progress}vw`}}></div>
        </div>
        <img src={questionImage} alt='Image to support question' className={classes.questionImage} />
        <div className={classes.buttonsContainer}>
                <div className={classes.Button}>
                    {currentQ.answerA && <button className={classes.answer} id='buttonA' onClick={handleClickA}>{currentQ.answerA}</button>}
                    {currentQ.answerB && <button className={classes.answer} id='buttonB' onClick={handleClickB}>{currentQ.answerB}</button>}
                    {currentQ.answerC && <button className={classes.answer} id='buttonC' onClick={handleClickC}>{currentQ.answerC}</button>}
                    {currentQ.answerD && <button className={classes.answer} id='buttonD' onClick={handleClickD}>{currentQ.answerD}</button>}
                </div>
        </div>
    </div>
        
    );
}

export default Question;