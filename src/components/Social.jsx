import React from 'react'
import { StyledSocial } from '../styledComponents/Contact'

function Social() {
  return (
    <StyledSocial>
        <a href=""><i className="fa-brands fa-facebook-f"></i> Find us on Facebook</a>
        <a href=""><i className="fa-brands fa-twitter"></i> Follow us on Twitter</a>
        <a href=""><i className="fa-brands fa-instagram"></i> Follow us on Instagram</a>
    </StyledSocial>
  )
}

export default Social