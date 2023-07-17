import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import Result from "../Result";


function ICAN(){
    return(
        <>
        <header>
            <Header />
        </header>
        <main>
            <Result title="VICTORIA"/>
        </main>
        <footer>
            <Footer />
        </footer>
    </>
    );
}

export default ICAN;