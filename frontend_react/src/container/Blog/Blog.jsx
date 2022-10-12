import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { AiFillEye } from 'react-icons/ai'
import { AppWraps, MotionWrap } from '../../wrapper'
import { urlFor, client } from '../../client'
import './Blog.scss'
import { Link } from 'react-router-dom'

const Blog = () => {
  const [activeFilter, setActiveFilter] = useState('All')

  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 })

  const [blogs, setBlogs] = useState([])
  const [filterWork, setFilterWork] = useState([])

  useEffect(() => {
    const query = '*[_type == "blogs"]'

    client.fetch(query).then((data) => {
      setBlogs(data)
      setFilterWork(data)
    })
  }, [])

  const handleWorkFilter = (item) => {
    setActiveFilter(item)
    setAnimateCard([{ y: 100, opacity: 0 }])

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }])

      if (item === 'All') {
        setFilterWork(blogs)
      } else {
        setFilterWork(blogs.filter((blog) => blog.tags.includes(item)))
      }
    }, 500)
  }

  return (
    <>
      <ul className='app__navbar-links b-text'>
        <li className='app__flex p-text'>
          <div />
          <a href='/'>
            <Link to='/'>My Profile</Link>
          </a>
        </li>
      </ul>

      <h2 className='head-text head-text-blog'>My Blog</h2>

      <div className='app__work-filter'>
        {['C/C++', 'Java', 'Web Development', 'SQL', 'OS', 'All'].map(
          (item, index) => (
            <div
              key={index}
              onClick={() => handleWorkFilter(item)}
              className={`app__work-filter-item app__flex p-text ${
                activeFilter === item ? 'item-active' : ''
              }`}
            >
              {item}
            </div>
          )
        )}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className='app__work-portfolio'
      >
        {filterWork.map((blog, index) => (
          <div className='app__work-item app__flex' key={index}>
            <div className='app__work-img app__flex'>
              <img src={urlFor(blog.imgUrl)} alt={blog.name} />

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{
                  duration: 0.25,
                  ease: 'easeInOut',
                  staggerChildren: 0.5,
                }}
                className='app__work-hover app__flex'
              >
                <a href={blog.projectLink} target='_blank' rel='noreferrer'>
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className='app__flex'
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
              </motion.div>
            </div>

            <div className='app__work-content app__flex'>
              <h4 className='bold-text'>{blog.title}</h4>
              <p className='p-text' style={{ marginTop: 10 }}>
                {blog.description}
              </p>

              <div className='app__work-tag app'>
                <p className='p-text'>{blog.tags[0]}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  )
}

export default AppWraps(
  MotionWrap(Blog, 'app__works'),
  'blog',
  'app__primarybg2'
)
