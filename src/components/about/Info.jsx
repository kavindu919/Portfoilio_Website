import React from 'react'

const Info = () => {
  return (
    <div className="about_info grid">
      <div className="about_box">
        <i class = "bx bx-award about_icon"></i>
        <h3 className="about_title">Undergraduate</h3>
        <span className="about_subtitle">Faculty of Science UOK</span>
      </div>
      <div className="about_box">
      <i class = "bx bxl-javascript about_icon"></i>
        <h3 className="about_title">Interests</h3>
        <span className="about_subtitle">ERP, AI and Fullstack Development</span>
      </div>
      <div className="about_box">
      <i class = "bx bxs-book-open about_icon"></i>
        <h3 className="about_title">Follow</h3>
        <span className="about_subtitle">Computer Science, Pure Maths and Chemistry</span>
      </div>
    </div>
  )
}

export default Info