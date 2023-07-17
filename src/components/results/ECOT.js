import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import Result from "../Result";

function ECOT(){
    return(
        <>
        <header>
            <Header />
        </header>
        <main>
            <Result title="MEDHA"/>
        </main>
        <footer>
            <Footer />
        </footer>
    </>
    );
}

export default ECOT;