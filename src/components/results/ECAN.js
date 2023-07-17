import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import Result from "../Result";


function ECAN(){
    return(
        <>
            <header>
                <Header />
            </header>
            <main>
                <Result title="BASHAR"/>
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    );
}

export default ECAN;