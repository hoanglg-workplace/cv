import React from 'react'
import {BsLinkedin, BsGithub} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        {/* href = linkedIn */}
        <a href="https://www.linkedin.com/in/gia-ho%C3%A0ng-l%C3%BD-4ba730252/" target={'_blank'}><BsLinkedin /></a>
        {/* href = github */}
        <a href="https://github.com/hoanglg-workplace" target={'_blank'}><BsGithub /></a>
        {/* href = others */}
        {/* <a href="" target={'_blank'}></a> */}
    </div>
  )
}

export default HeaderSocials