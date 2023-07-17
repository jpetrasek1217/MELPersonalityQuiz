import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import Result from "../Result";

function ECAT(){
    return(
        <>
            <header>
                <Header />
            </header>
            <main>
                <Result title="QURESHI"/>
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    );
}

export default ECAT;