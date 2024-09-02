import React from 'react'
import "./Contact.css";
import msg_icon from "../../assets/msg-icon.png";
import mail_icon from "../../assets/mail-icon.png";
import phone_icon from "../../assets/phone-icon.png";
import location_icon from "../../assets/location-icon.png";
import white_arrow from "../../assets/white-arrow.png";
const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "accesskey-from-https://web3forms.com/");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully.");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className='contact'>
      <div className='contact-col'>
        <h3>Send us a message<img src={msg_icon} alt=""/></h3>
        <p>Fell free to reach out us. Fell free to reach out us. Fell free to reach out us. Fell free to reach out us. Fell free to reach out us.
        Fell free to reach out us. Fell free to reach out us. Fell free to reach out us. Fell free to reach out us. Fell free to reach out us.
        Fell free to reach out us. Fell free to reach out us. Fell free to reach out us.Fell free to reach out us. Fell free to reach out us.
         Fell free to reach out us. Fell free to reach out us.Fell free to reach out us.</p>
         <ul>
            <li><img src= {mail_icon} alt=''/>sandeep@gmail.com</li>
            <li><img src={phone_icon} alt=''/>+91 9991237000</li>
            <li><img src={location_icon} alt=''/>North delhi ,Delhi,India</li>
         </ul>
      </div>
      {/* contact form here  */}
      <div className='contact-col'>
        <form onSubmit={onSubmit}>
          <label>Your name</label>
          <input type="text" name="name" required={true} placeholder='Enter your name...'/>
{/* 
          <label>Your email</label>
          <input type="text" name="email" required={true} placeholder='example@gmail.com'/> */}

          <label>Your phone</label>
          <input type="tel" name="phone" required={true} placeholder='+91'/>

          <label>Write your message</label>
         <textarea name="message" id="" col="30" rows="10"></textarea>
                      <button type ="submit" className='btn dark-btn'>Send<img src={white_arrow} alt=""/></button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact
