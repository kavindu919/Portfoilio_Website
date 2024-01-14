import React from 'react'
import "./Qulification.css"
import { useState } from 'react';

const Qulification = () => {
    const [toggleState,setToggleState] = useState(1);
    const toggleTab = (index) => {
      setToggleState(index);
    }
  return (
    <section className="qualification section">
        <h2 className="section_title">Qualification</h2>
        <span className="section_subtitle">My personel journey</span>

        <div className="qualification_container container">
            <div className="qualification_tabs">
                <div className={toggleState === 1 ? "qualification_button qualification_active button--flex" : "qualification_button--flex" } onClick= {()=> toggleTab(1)}>
                    <i className="uil uil-graduation-cap qualification_icon"></i>Education
                </div>

                <div className={toggleState === 2 ? "qualification_button qualification_active button--flex" : "qualification_button--flex"} onClick= {()=> toggleTab(2)}>
                    <i className="uil uil-briefcase-alt qualification_icon"></i>Volunteering
                </div>
            </div>
            <div className="qualification_sections">
                <div className={toggleState === 1 ? "qualification_content qualification_content-active" : "qualification_content"}>
                    <div className="qualification_data">
                        <div>
                            <h3 className="qualification_title">Physical science</h3>
                            <span className="qualification_subtitle">University of Kelaniya</span>
                            <div className="qualification_calender">
                                <i className="uil uil-calendar-alt"></i> 2021 - Present
                            </div>
                        </div>

                        <div>
                            <span className="qualification_rounder"></span>
                            <span className="qualification_line"></span>
                        </div>
                    </div>

                    <div className="qualification_data">
                        <div></div>
                        <div>
                            <span className="qualification_rounder"></span>
                            <span className="qualification_line"></span>
                        </div>
                        
                        <div>
                            <h3 className="qualification_title">GCE A/L - 2019</h3>
                            <span className="qualification_subtitle">st Joseph Vaz Collage  Wennappuwa</span>
                            <div className="qualification_calender">
                                <i className="uil uil-calendar-alt"></i> 2010 - 2019
                            </div>
                        </div>

                        
                    </div>

                    <div className="qualification_data">
                        <div>
                            <h3 className="qualification_title">BIT</h3>
                            <span className="qualification_subtitle">University of Colombo</span>
                            <div className="qualification_calender">
                                <i className="uil uil-calendar-alt"></i> 2022 - Present
                            </div>
                        </div>

                        <div>
                            <span className="qualification_rounder"></span>
                            <span className="qualification_line"></span>
                        </div>
                    </div>

                    <div className="qualification_data">
                        <div></div>
                        <div>
                            <span className="qualification_rounder"></span>
                            <span className="qualification_line"></span>
                        </div>
                        
                        <div>
                            <h3 className="qualification_title">Trainee Full Stack Developer - Open Learning Platform</h3>
                            <span className="qualification_subtitle">University of Moratuwa</span>
                            <div className="qualification_calender">
                                <i className="uil uil-calendar-alt"></i> 2022 - Present
                            </div>
                        </div>

                        
                    </div>
                </div>

                <div className={toggleState === 2 ? "qualification_content qualification_content-active" : "qualification_content"}>
                    <div className="qualification_data">
                        <div>
                            <h3 className="qualification_title">Rotaract Club</h3>
                            <span className="qualification_subtitle">University of Kelaniya</span>
                            <div className="qualification_calender">
                                <i className="uil uil-calendar-alt"></i> 2022 - 2023
                            </div>
                        </div>

                        <div>
                            <span className="qualification_rounder"></span>
                            <span className="qualification_line"></span>
                        </div>
                    </div>

                    <div className="qualification_data">
                        <div></div>
                        <div>
                            <span className="qualification_rounder"></span>
                            <span className="qualification_line"></span>
                        </div>
                        
                        <div>
                            <h3 className="qualification_title">LEO Club</h3>
                            <span className="qualification_subtitle">University of Kelaniya</span>
                            <div className="qualification_calender">
                                <i className="uil uil-calendar-alt"></i> 2021 - Present
                            </div>
                        </div>

                        
                    </div>

                    <div className="qualification_data">
                        <div>
                            <h3 className="qualification_title">Zero Plastic National Movement</h3>
                            <span className="qualification_subtitle">University of Kelaniya</span>
                            <div className="qualification_calender">
                                <i className="uil uil-calendar-alt"></i> 2022 - Present
                            </div>
                        </div>

                        <div>
                            <span className="qualification_rounder"></span>
                            <span className="qualification_line"></span>
                        </div>
                    </div>

                    
                </div>
            </div>
        </div>
    </section>
  )
}

export default Qulification