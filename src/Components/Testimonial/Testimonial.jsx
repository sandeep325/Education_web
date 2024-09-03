import React, { useRef } from 'react';
import "./Testimonial.css";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import user_1 from "../../assets/user-1.png";
import user_2 from "../../assets/user-2.png";
import user_3 from "../../assets/user-3.png";
import user_4 from "../../assets/user-4.png";

const Testimonial = () => {
    const slider = useRef();
    let tx = 0;
    const slideForword = () => {
        if (tx > -50) {
            tx -= 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }
    const sildeBackword = () => {
        if (tx < 0) {
            tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }

    return (
        <div className='testimonial'>
            <img src={next_icon} alt='' className='next-btn' onClick={slideForword} />
            <img src={back_icon} alt='' className='back-btn' onClick={sildeBackword} />
            <div className='slider'>
                <ul ref={slider}>
                    <li>
                        <div className='slide'>
                            <div className='user-info'>
                                <img src={user_1} alt='' />
                                <div>
                                    <h3>William Jackes</h3>
                                    <span>Edusicy,USA</span>
                                </div>
                            </div>
                            <p>some Description here ramndom some Description here ramndomsome
                                Description here ramndomsome Description here ramndom. some Description here ramndomsome Description here.
                                ramndomsome Description here ramndomsome Description here ramndom</p>
                        </div>
                    </li>


                    <li>
                        <div className='slide'>
                            <div className='user-info'>
                                <img src={user_2} alt='' />
                                <div>
                                    <h3>William Jackes</h3>
                                    <span>Edusicy,USA</span>
                                </div>
                            </div>
                            <p>some Description here ramndom some Description here ramndomsome
                                Description here ramndomsome Description here ramndom. some Description here ramndomsome Description here.
                                ramndomsome Description here ramndomsome Description here ramndom</p>
                        </div>
                    </li>



                    <li>
                        <div className='slide'>
                            <div className='user-info'>
                                <img src={user_3} alt='' />
                                <div>
                                    <h3>William Jackes</h3>
                                    <span>Edusicy,USA</span>
                                </div>
                            </div>
                            <p>some Description here ramndom some Description here ramndomsome
                                Description here ramndomsome Description here ramndom. some Description here ramndomsome Description here.
                                ramndomsome Description here ramndomsome Description here ramndom</p>
                        </div>
                    </li>



                    <li>
                        <div className='slide'>
                            <div className='user-info'>
                                <img src={user_4} alt='' />
                                <div>
                                    <h3>William Jackes</h3>
                                    <span>Edusicy,USA</span>
                                </div>
                            </div>
                            <p>some Description here ramndom some Description here ramndomsome
                                Description here ramndomsome Description here ramndom. some Description here ramndomsome Description here.
                                ramndomsome Description here ramndomsome Description here ramndom</p>
                        </div>
                    </li>

                </ul>
            </div>
        </div>
    )
}

export default Testimonial;
