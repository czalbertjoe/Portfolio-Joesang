import React from 'react'
import './qualifications.css'


const Qualifications = () => {

    return (
        <section>
            <h2 className="section-title">Qualification</h2>
            <span className="section-subtitle">My personal journey</span>

            <div className="qualification-container container">
                <div className="qualiification-tabs">
                    <div className="qualification_button button--flex">
                        <i className="uil uil-graduation-cap qualification-icon"></i>{' '}
                        Education
                    </div>

                    <div
                        className="">
                        <i className="uil uil-briefcase-alt qualification-icon"></i>{' '}
                        Experience
                    </div>
                </div>

                <div className="qualification-sections">
                    <div
                        className=""
                    >
                        <div className="qualification-data">
                            <div>
                                <h3 className="qualification-title">
                                    Bachelor in Computer Engineering
                                </h3>
                                <span className="qualification-subtitle">
                                    Universidad Castro Carazo
                                </span>
                                <div className="qualification-calender">
                                    <i className="uil uil-calendar-alt"></i> 2019 - Present
                                </div>
                            </div>

                            <div>
                                <span className="qualification-rounder"></span>
                                <span className="qualification-line"></span>
                            </div>
                        </div>

                        <div className="qualification-data">
                            <div>
                                <h3 className="qualification-title">High School degree</h3>
                                <span className="qualification-subtitle">
                                    MEP
                                </span>
                                <div className="qualification-calender">
                                    <i className="uil uil-calendar-alt"></i> fecha - fecha
                                </div>
                            </div>

                            <div>
                                <span className="qualification-rounder"></span>
                                <span className="qualification-line"></span>
                            </div>
                        </div>
                    </div>

                    <div
                        className=""
                    >
                        <div className="qualification-data">
                            <div>
                                <h3 className="qualification-title">Developer</h3>
                                <span className="qualification-subtitle">SIM</span>
                                <div className="qualification-calender">
                                    <i className="uil uil-calendar-alt"></i> 2023 - Present
                                </div>
                            </div>

                            <div>
                                <span className="qualification-rounder"></span>
                                <span className="qualification-line"></span>
                            </div>
                        </div>

                        <div className="qualification-data">
                            <div></div>

                            <div>
                                <span className="qualification-rounder"></span>
                                <span className="qualification-line"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Qualifications;