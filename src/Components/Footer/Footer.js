import React from 'react'
import Facebook from "../Images/Facebook.png"
import Instagram from "../Images/Instagram.png"
import Twitter from "../Images/twitter.png"
import Youtube from "../Images/youtube2.png"
import {Footerhold, Image, Pic, Content, Copy} from "./FooterElement.js"

function Footer() {
  return (
    <Footerhold>
      <Pic>
        <Image src={Facebook} />
        <Image src={Instagram} />
        <Image src={Twitter} />
        <Image src={Youtube} />
      </Pic>
      <Content>
        <p>need Help?</p>
        <p>Content guild</p>
        <p>privacy</p>
        <p>Terms of use</p>
        <p>Advert</p>
        <p>Jobs</p>
      </Content>
      <Copy>Ajay@Copyright 2022</Copy>
    </Footerhold>
  )
}

export default Footer;