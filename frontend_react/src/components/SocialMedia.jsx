import React from 'react'
import { BsTwitter, BsInstagram, BsGithub } from 'react-icons/bs'

const SocialMedia = () => {
  return (
    <div className='app__social'>
      <div>
        <a
          href='https://twitter.com/abhidevchandra'
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
          href='https://instagram.com/_abhishekchandra'
          target='_blank'
          rel='noreferrer'
        >
          <BsInstagram />
        </a>
      </div>
    </div>
  )
}

export default SocialMedia
