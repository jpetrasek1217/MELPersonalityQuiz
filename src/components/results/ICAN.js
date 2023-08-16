import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import Result from "../Result";
import classes from "../Quiz.module.css"


function ICAN(){
    return(
        <div className={classes.everything}>
            <div className={classes.headerAndMain}>
                <header>
                    <Header />
                </header>
                <main>
                    <Result title="VICTORIA"/>
                </main>
            </div>
            <footer>
                <Footer />
            </footer>
        </div>
    );
}

export default ICAN;