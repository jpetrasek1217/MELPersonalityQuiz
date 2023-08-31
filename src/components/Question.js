import React from 'react';
import classes from './Question.module.css';
import image0 from './assets/0.webp';
import image1 from './assets/1.webp';
import image2 from './assets/2.webp';
import image3 from './assets/3.webp';
import image4 from './assets/4.webp';
import image5 from './assets/5.webp';
import image6 from './assets/6.webp';
import image7 from './assets/7.webp';
import image10 from './assets/10.webp';
import image11 from './assets/11.webp';
import image12 from './assets/12.webp';
import image13 from './assets/13.webp';
import image14 from './assets/14.webp';
import image15 from './assets/15.webp';
import image16 from './assets/16.webp';
import image17 from './assets/17.webp';
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
            setProgress(progress + 11);
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
            setProgress(progress + 11);
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
            setProgress(progress + 11);
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
            setProgress(progress + 11);
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
                    navigate(`/MelPersonalityQuiz/result/ECOT`);
                } else {
                    navigate(`/MelPersonalityQuiz/result/ECON`);
                }
            } else {
                if(player.toxic > player.nutric){
                    navigate(`/MelPersonalityQuiz/result/ECAT`);
                } else {
                    navigate(`/MelPersonalityQuiz/result/ECAN`);
                }
            }
        } else {
            if (player.competitive > player.casual){
                if(player.toxic > player.nutric){
                    navigate(`/MelPersonalityQuiz/result/ICOT`);
                } else {
                    navigate(`/MelPersonalityQuiz/result/ICON`);
                }
            } else {
                if(player.toxic > player.nutric){
                    navigate(`/MelPersonalityQuiz/result/ICAT`);
                } else {
                    navigate(`/MelPersonalityQuiz/result/ICAN`);
                }
            }
        }
    }

    function questionImage(){
        if (currentQ.id === 0){
            return image0;
        }  if (currentQ.id === 1){
            return image1;
        } if (currentQ.id === 2){
            return image2;
        }  if (currentQ.id === 3){
            return image3;
        }  if (currentQ.id === 4){
            return image4;
        }  if (currentQ.id === 5){
            return image5;
        } if (currentQ.id === 6){
            return image6;
        }  if (currentQ.id === 7){
            return image7;
        }  if (currentQ.id === 10){
            return image10;
        }  if (currentQ.id === 11){
            return image11;
        }  if (currentQ.id === 12){
            return image12;
        } if (currentQ.id === 13){
            return image13;
        }  if (currentQ.id === 14){
            return image14;
        }  if (currentQ.id === 15){
            return image15;
        }  if (currentQ.id === 16){
            return image16;
        } if (currentQ.id === 17){
            return image17;
        } 
    }

    return(
    <div className={classes.QuestionContainer}>
        <h1 className={classes.QuestionText}>{currentQ.question}</h1>
        <div className={classes.progressBarContainer}>
          <div className={classes.movingBackground} style={{width: `${progress}vw`}}></div>
        </div>
        <div className={classes.ImageAndAnswers}>
        <img src={questionImage()} alt={`Question ${currentQ.id}`} className={classes.questionImage} />
        <div className={classes.buttonsContainer}>
                <div className={classes.Button}>
                    {currentQ.answerA && <button className={classes.answer} id='buttonA' onClick={handleClickA}>{currentQ.answerA}</button>}
                    {currentQ.answerB && <button className={classes.answer} id='buttonB' onClick={handleClickB}>{currentQ.answerB}</button>}
                    {currentQ.answerC && <button className={classes.answer} id='buttonC' onClick={handleClickC}>{currentQ.answerC}</button>}
                    {currentQ.answerD && <button className={classes.answer} id='buttonD' onClick={handleClickD}>{currentQ.answerD}</button>}
                </div>
        </div>
        </div>
        
    </div>
        
    );
}

export default Question;