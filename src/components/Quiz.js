import React from "react";
import Header from "./Header";
import Question from "./Question";
import Footer from "./Footer";
import classes from "./Quiz.module.css"


function Quiz(){

    return(
        <>
            <header>
                <Header />
            </header>
            <main>
                <Question />
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    );

}

export default Quiz;