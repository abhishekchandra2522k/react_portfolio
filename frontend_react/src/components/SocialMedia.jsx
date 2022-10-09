import React from 'react'
import { BsTwitter, BsLinkedin, BsGithub } from 'react-icons/bs'

const SocialMedia = () => {
  return (
    <div className='app__social'>
      <div>
        <a
          href='https://twitter.com/abhisheks_aura'
          target='_blank'
          rel='noreferrer'
        >
          <BsTwitter />
        </a>
      </div>
      <div>
        <a
          href='https://github.com/abhishekchandra2522k'
          target='_blank'
          rel='noreferrer'
        >
          <BsGithub />
        </a>
      </div>
      <div>
        <a
          href='https://www.linkedin.com/in/abhishek-chandra1/'
          target='_blank'
          rel='noreferrer'
        >
          <BsLinkedin />
        </a>
      </div>
    </div>
  )
}

export default SocialMedia
