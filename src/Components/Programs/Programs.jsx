import React from 'react';
import "./Programs.css";
import program1 from "../../assets/program-1.png";
import program2 from "../../assets/program-2.png";
import program3 from "../../assets/program-3.png";
import programIcon1 from "../../assets/program-icon-1.png";
import programIcon2 from "../../assets/program-icon-2.png";
import programIcon3 from "../../assets/program-icon-3.png";
const Programs = () => {
  return (
    <div className='programs'>
      <div className='program'>
        <img src={program1} alt="Program 1" />
        <div className='caption'>
          <img src={programIcon1} alt='ICON' />
          <p>Graduation Degree</p>
        </div>
      </div>
      <div className='program'>
        <img src={program2} alt="Program 2" />
        <div className='caption'>
          <img src={programIcon2} alt='ICON' />
          <p>Master Degree</p>
        </div>
      </div>
      <div className='program'>
        <img src={program3} alt="Program 3" />
        <div className='caption'>
          <img src={programIcon3} alt='ICON' />
          <p>Post Graduation</p>
        </div>
      </div>

    </div>
  )
}

export default Programs
