import React from 'react'
import { download } from '../hook/download'
const Portfolio = () => {

  return (
    <div class="main-container">
      <div className="container">
        <pre  onClick={download}>Home</pre>
        <a>About</a>
        <a>Contact</a>
        <a>Project</a>
      </div>
    </div>
  )
}

export default Portfolio

