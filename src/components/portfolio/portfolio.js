import React from 'react'
import './portfolio.css'
import img1 from '../../assets/1.jpg'
import img2 from '../../assets/2.jpg'
import img3 from '../../assets/3.jpg'
import img4 from '../../assets/4.jpg'
import img5 from '../../assets/5.jpg'
import img6 from '../../assets/6.jpg'

const data = [
  {
    id:1,
    image: img1,
    title: 'Gambar Untuk Template CV',
    github: 'https://github.com',
    demo: 'https://dribble.com'
  },
  {
    id:2,
    image: img2,
    title: 'Gambar Untuk Template CV',
    github: 'https://github.com',
    demo: 'https://dribble.com'
  },
  {
    id:3,
    image: img3,
    title: 'Gambar Untuk Template CV',
    github: 'https://github.com',
    demo: 'https://dribble.com'
  },
  {
    id:4,
    image: img4,
    title: 'Gambar Untuk Template CV',
    github: 'https://github.com',
    demo: 'https://dribble.com'
  },
  {
    id:5,
    image: img5,
    title: 'Gambar Untuk Template CV',
    github: 'https://github.com',
    demo: 'https://dribble.com'
  },
  {
    id:6,
    image: img6,
    title: 'Gambar Untuk Template CV',
    github: 'https://github.com',
    demo: 'https://dribble.com'
  },
]

const portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
      { data.map(({id, image, title, github, demo}) => {
        return (
          <article key={id} className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={image} alt="{title}"/>
          </div>
          <h3>{title}</h3>
          <div className="portfolio__item-cta">
            <a href={github} className='btn' target='_blank'>Github</a>
            <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        )
        })}
      </div>
    </section>
  )
}

export default portfolio