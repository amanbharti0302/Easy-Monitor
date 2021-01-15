import React from 'react'
import './aboutus.css';
import aboutusimg from './../../assets/images/aboutus.jfif'

function Aboutus() {
  return (
    <div className="container2">
      <img className="image-container2" src={aboutusimg} />
      <div className="vl"></div>

      <div className="text-container">
        <h3>About Us</h3>
        <p>Cats like boxes because they are cryptic animals; they like to hide,S
        tephen Zawistowski, science adviser for the American Society for the Prevention of Cruelty to
          Animals, told Business Insider. "And a box gives them a place of safety and security</p>
        <p>While inside a box, cats feel that they cannot be snuck up on from behind or the side — anyt
        hing that wants to approach them must come directly into their field of vision. In effect, such hiding space
        s allow them to watch the w
            orld around them without being seen.</p>

      </div>

    </div>

  )
}

export default Aboutus
