import React from "react";
import Header from "./Header";
import Question from "./Question";
import Footer from "./Footer";
import classes from "./Quiz.module.css"


function Quiz(){

    return(
        <div className={classes.everything}>
        <div className={classes.headerAndMain}>
            <header>
                <Header />
            </header>
            <main>
                <Question />
            </main>
        </div>
            <footer>
                <Footer />
            </footer>
        </div>
    );

}

export default Quiz;