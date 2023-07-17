import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import Result from "../Result";

function ICON(){
    return(
        <>
        <header>
            <Header />
        </header>
        <main>
            <Result title="JONATHAN"/>
        </main>
        <footer>
            <Footer />
        </footer>
    </>
    );
}

export default ICON;