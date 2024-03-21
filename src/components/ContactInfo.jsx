import React from 'react'
import { StyledContact, StyledP } from '../styledComponents/Contact'

function ContactInfo() {
  return (
    <StyledContact>
            <div>
                <iframe title='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3911.9627251103075!2d77.67813547489104!3d11.337433288847503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba96fc09a63dfcd%3A0x4fc398d9e84c2c3f!2sCLOTRICKS%20FASHION%20APPAREL!5e0!3m2!1sen!2sin!4v1711000625793!5m2!1sen!2sin" width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div>
                <h1>CONTACT INFO</h1>
                <StyledP>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto itaque omnis rem, beatae iusto sequi sint? Aspernatur aliquid ratione in, nostrum saepe, nisi veritatis quia exercitationem neque incidunt eaque at.</StyledP>
                <StyledP><i className="fa-solid fa-location-dot"></i> Nasiyanur Rd, Maruthi Nagar, Vettukattuvalasu, Erode, Tamil Nadu 638012</StyledP>
                <StyledP><i className="fa-regular fa-clock"></i> Monday - Friday 10 am - 10 pm <br />Sunday 11 am - 9pm</StyledP>
                <StyledP><i className="fa-solid fa-mobile"></i> +91 94888 12233</StyledP>
            </div>
        </StyledContact>
  )
}

export default ContactInfo