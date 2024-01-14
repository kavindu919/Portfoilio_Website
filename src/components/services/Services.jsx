import React, { useState } from 'react'
import "./Services.css"

const Services = () => {
  const [toggleState,setToggleState] = useState(0);
  const toggleTab = (index) => {
    setToggleState(index);
  }

  return (
   <section className="service section" id="services">
    <h2 className="section_title">Services</h2>
    <span className="section_subtitle">I'm good with</span>

   <div className="services_container container grid">
    <div className="services_content">
      <div>
        <i className="uil uil-web-grid services_icon"></i>
        <h3 className="services_title">Front-End <br/> Development</h3>
      </div>

      <span className="services_button" onClick={()=> toggleTab(1)} >View More <i className="uil uil-arrow-right services_button-icon"></i></span>
      <div className={toggleState === 1 ? "services_modal active-modal" : "services_modal" }>
         <div className="services_modal-content">
          <i onClick={()=>toggleTab(0)} className="uil uil-times services_modal-close"></i>

          <h3 className="services_modal-title">Front-End Developer</h3>
          <p className="services_modal-description">I work on various projects involving HTML, CSS, and JavaScript, and have experience in transitioning those projects to React.</p>

          <ul className="services_modal-services grid">
            <li className="services_modal-service">
              <i className="uil uil-cricle services_modal-icon"></i>
              <p className="services_modal-info">Experience in creating user interfaces</p>
            </li>
            <li className="services_modal-service">
              <i className="uil uil-cricle services_modal-icon"></i>
              <p className="services_modal-info">Web page development</p>
            </li>
            <li className="services_modal-service">
              <i className="uil uil-cricle services_modal-icon"></i>
              <p className="services_modal-info">Responsive Design Implementation</p>
            </li>
            <li className="services_modal-service">
              <i className="uil uil-cricle services_modal-icon"></i>
              <p className="services_modal-info">Experience in using version control systems</p>
            </li>
            <li className="services_modal-service">
              <i className="uil uil-cricle services_modal-icon"></i>
              <p className="services_modal-info"> Implementing design on mobile websites</p>
            </li>


          </ul>
         </div>
      </div>
    </div>

  

    <div className="services_content">
      <div>
        <i className="uil uil-arrow services_icon"></i>
        <h3 className="services_title">Backend <br/> Development </h3>
      </div>

      <span onClick={()=> toggleTab(2)} className="services_button">View More <i className="uil uil-arrow-right services_button-icon"></i></span>
      <div className={toggleState === 2 ? "services_modal active-modal" : "services_modal"}>
         <div className="services_modal-content">
          <i onClick={() => toggleTab(0)} className="uil uil-times services_modal-close"></i>

          <h3 className="services_modal-title">Backend Development</h3>
          <p className="services_modal-description">I possess hands-on experience in back-end development, proficient in designing and implementing robust server-side architectures, developing scalable APIs, and ensuring the seamless integration of databases</p>

          <ul className="services_modal-services grid">
            <li className="services_modal-service">
              <i className="uil uil-cricle services_modal-icon"></i>
              <p className="services_modal-info">Strong understand about concept of OOP</p>
            </li>
            <li className="services_modal-service">
              <i className="uil uil-cricle services_modal-icon"></i>
              <p className="services_modal-info">Have experience in C, Java and Python  </p>
            </li>
            <li className="services_modal-service">
              <i className="uil uil-cricle services_modal-icon"></i>
              <p className="services_modal-info">Experience with working frameworks(Express JS)</p>
            </li>
            <li className="services_modal-service">
              <i className="uil uil-cricle services_modal-icon"></i>
              <p className="services_modal-info">Have experience in  API’s such as Google Firebase</p>
            </li>
            <li className="services_modal-service">
              <i className="uil uil-cricle services_modal-icon"></i>
              <p className="services_modal-info">Have experience with Visual Basic C# and .net environment</p>
            </li>


          </ul>
         </div>
      </div>
    </div>


    <div className="services_content">
      <div>
        <i className="uil uil-edit services_icon"></i>
        <h3 className="services_title">Database <br/> Management</h3>
      </div>

      <span onClick={()=>toggleTab(3)} className="services_button">View More <i className="uil uil-arrow-right services_button-icon"></i></span>
      <div className={toggleState === 3 ? "services_modal active-modal" : "services_modal"}>
         <div className="services_modal-content">
          <i onClick={()=> toggleTab(0)} className="uil uil-times services_modal-close"></i>

          <h3 className="services_modal-title">Database Management</h3>
          <p className="services_modal-description">Experienced in utilizing SQL to efficiently query, manipulate, and analyze data for meaningful insights and decision-making </p>

          <ul className="services_modal-services grid">
            <li className="services_modal-service">
              <i className="uil uil-cricle services_modal-icon"></i>
              <p className="services_modal-info">Skiled in design and executing queries for data retrieval, modification and deletion</p>
            </li>
            <li className="services_modal-service">
              <i className="uil uil-cricle services_modal-icon"></i>
              <p className="services_modal-info">Adept at designing, developing, and managing relational databases</p>
            </li>
            <li className="services_modal-service">
              <i className="uil uil-cricle services_modal-icon"></i>
              <p className="services_modal-info">Passionate about data modeling and normalization techniques</p>
            </li>
            <li className="services_modal-service">
              <i className="uil uil-cricle services_modal-icon"></i>
              <p className="services_modal-info">Experienced in non-query languages  such as Mongo DB</p>
            </li>
            <li className="services_modal-service">
              <i className="uil uil-cricle services_modal-icon"></i>
              <p className="services_modal-info">Developed and maintained detailed database schema diagrams and documentation, ensuring clarity and consistency for developers and stakeholders</p>
            </li>


          </ul>
         </div>
      </div>
    </div>


   </div>

   </section>
  )
}

export default Services