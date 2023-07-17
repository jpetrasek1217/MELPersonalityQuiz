import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import Result from "../Result";

function ICOT(){
    return(
        <>
        <header>
            <Header />
        </header>
        <main>
            <Result title="CARMEN"/>
        </main>
        <footer>
            <Footer />
        </footer>
    </>
    );
}

export default ICOT;