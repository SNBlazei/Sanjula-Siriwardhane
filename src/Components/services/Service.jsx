import React, { useState } from "react";
import './Service.css';

function Service() {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <>
            <section className="services section" id="services">
                <h2 className="section__title">Services</h2>
                <span className="section__subtitle">What I offer</span>

                <div className="services__container container grid">
                    <div className="services__content">
                        <div>
                            <i className="bx bx-grid-alt services__icon"></i>
                            <h3 className="services__title">
                                Frontend <br /> Development
                            </h3>
                        </div>

                        <span className="services__button" onClick={() => toggleTab(1)}>
                            View More
                            <i className="bx bx-right-arrow-alt services__button-icon"></i>
                        </span>

                        <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
                            <div className="services__modal-content">
                                <i onClick={() => toggleTab(0)} className="bx bx-x services__modal-close"></i>

                                <h3 className="services__modal-title">Product Designer</h3>
                                <p className="services__modal-description">
                                    Service with more than 3 years of experience. Providing quality work to clients and companies.
                                </p>

                                <ul className="services__modal-services grid">
                                    <li className="services__modal-service">
                                        <i className="bx bx-check services__modal-icon"></i>
                                        <p className="services__modal-info">
                                        I create visually appealing and user-friendly web experiences.
                                        </p>
                                    </li>

                                    <li className="services__modal-service">
                                        <i className="bx bx-check services__modal-icon"></i>
                                        <p className="services__modal-info">Web page development.</p>
                                    </li>

                                    <li className="services__modal-service">
                                        <i className="bx bx-check services__modal-icon"></i>
                                        <p className="services__modal-info">
                                        My work blends creativity with functionality to bring designs to life.
                                        </p>
                                    </li>

                                    <li className="services__modal-service">
                                        <i className="bx bx-check services__modal-icon"></i>
                                        <p className="services__modal-info">
                                        I specialize in HTML, CSS, JavaScript, and React to build responsive, interactive websites. I position your company brand.
                                        </p>
                                    </li>

                                    <li className="services__modal-service">
                                        <i className="bx bx-check services__modal-icon"></i>
                                        <p className="services__modal-info">
                                            Design and mockups of products for companies.
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="services__content">
                        <div>
                            <i className="bx bx-paint services__icon"></i>
                            <h3 className="services__title">
                                Ui/Ux <br /> Designing
                            </h3>
                        </div>

                        <span onClick={() => toggleTab(2)} className="services__button">
                            View More
                            <i className="bx bx-right-arrow-alt services__button-icon"></i>
                        </span>

                        <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
                            <div className="services__modal-content">
                                <i onClick={() => toggleTab(0)} className="bx bx-x services__modal-close"></i>

                                <h3 className="services__modal-title">Ui/Ux Designer</h3>
                                <p className="services__modal-description">
                                    Service with more than 1 years of experience. Providing quality work to clients and companies.
                                </p>

                                <ul className="services__modal-services grid">
                                    <li className="services__modal-service">
                                        <i className="bx bx-check services__modal-icon"></i>
                                        <p className="services__modal-info">
                                            I develop the user interface.
                                        </p>
                                    </li>

                                    <li className="services__modal-service">
                                        <i className="bx bx-check services__modal-icon"></i>
                                        <p className="services__modal-info">Web page development.</p>
                                    </li>

                                    <li className="services__modal-service">
                                        <i className="bx bx-check services__modal-icon"></i>
                                        <p className="services__modal-info">
                                            I create ux element interactions.
                                        </p>
                                    </li>

                                    <li className="services__modal-service">
                                        <i className="bx bx-check services__modal-icon"></i>
                                        <p className="services__modal-info">
                                            I position your company brand.
                                        </p>
                                    </li>

                                    <li className="services__modal-service">
                                        <i className="bx bx-check services__modal-icon"></i>
                                        <p className="services__modal-info">
                                            Design and mockups of products for companies.
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="services__content">
                        <div>
                            <i className="bx bx-brush services__icon"></i>
                            <h3 className="services__title">
                                Backend <br /> Development
                            </h3>
                        </div>

                        <span onClick={() => toggleTab(3)} className="services__button">
                            View More
                            <i className="bx bx-right-arrow-alt services__button-icon"></i>
                        </span>

                        <div className={toggleState === 3 ? "services__modal active-modal" : "services__modal"}>
                            <div className="services__modal-content">
                                <i onClick={() => toggleTab(0)} className="bx bx-x services__modal-close"></i>

                                <h3 className="services__modal-title">Visual Designer</h3>
                                <p className="services__modal-description">
                                    Service with more than 3 years of experience. Providing quality work to clients and companies.
                                </p>

                                <ul className="services__modal-services grid">
                                    <li className="services__modal-service">
                                        <i className="bx bx-check services__modal-icon"></i>
                                        <p className="services__modal-info">
                                        Experienced in backend development using Node.js and Java.
                                        </p>
                                    </li>

                                    <li className="services__modal-service">
                                        <i className="bx bx-check services__modal-icon"></i>
                                        <p className="services__modal-info">Web page development.</p>
                                    </li>

                                    <li className="services__modal-service">
                                        <i className="bx bx-check services__modal-icon"></i>
                                        <p className="services__modal-info">
                                        Focusing on creating efficient and scalable web applications.
                                        </p>
                                    </li>

                                    <li className="services__modal-service">
                                        <i className="bx bx-check services__modal-icon"></i>
                                        <p className="services__modal-info">
                                        Proficient in backend development with Java and Spring Boot .
                                        </p>
                                    </li>

                                    <li className="services__modal-service">
                                        <i className="bx bx-check services__modal-icon"></i>
                                        <p className="services__modal-info">
                                        Specializing in designing and implementing RESTful APIs.
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Service;
