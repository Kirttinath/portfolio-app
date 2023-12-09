import React from 'react'

const items = [
    "Homepage",
    "Services",
    "Portfolio",
    "Contact",
    "About",
]

const Links = () => {
  return (
    <div className='links'>{items.map(item => (
      <a href={`#${item}`} key={item}>{item}</a>
    ))}</div>
  )
}

export default Links
