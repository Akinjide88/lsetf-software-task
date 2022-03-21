import React from 'react'
import Facebook from "../Images/Facebook.png"
import Instagram from "../Images/Instagram.png"
import Twitter from "../Images/twitter.png"
import Youtube from "../Images/youtube2.png"

function Footer() {
  return (
    <div>
      <div>
        <img src={Facebook} />
        <img src={Instagram} />
        <img src={Twitter} />
        <img src={Youtube} />
      </div>
      <div>
        <p>need Help?</p>
        <p>Content guild</p>
        <p>privacy</p>
        <p>Terms of use</p>
        <p>Advert</p>
        <p>Jobs</p>
      </div>
      <div>C 2022</div>
    </div>
  )
}

export default Footer