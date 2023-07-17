import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import Result from "../Result";

function ICAT(){
    return(
        <>
        <header>
            <Header />
        </header>
        <main>
            <Result title="ANNIE"/>
        </main>
        <footer>
            <Footer />
        </footer>
    </>
    );
}

export default ICAT;