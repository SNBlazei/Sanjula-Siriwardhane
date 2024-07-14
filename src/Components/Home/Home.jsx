import React from "react";
import './home.css';
import Social from "./Social";
import Data from "./Data";
import ScrollDown from "./ScrollDown";

function Home() {
    return (
        <>
            <section className="home section" id="home">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-6 order-lg-2 text-center">
                            <div className="home__img"></div>
                        </div>
                        <div className="col-lg-4 col-md-6 order-lg-1 d-flex flex-column align-items-center">
                            <Social />
                        </div>
                        <div className="col-lg-4 col-md-12 order-lg-3 d-flex flex-column align-items-center">
                            <Data />
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <ScrollDown />
                    </div>
                </div>
            </section>
        </>
    );
}

export default Home;
