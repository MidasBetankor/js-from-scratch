import React from 'react'
import StarRating from './StarRating'

const Colour = ({title, colour, rating=0, onRemove=f=>f, onRate=f=>f}) =>
  <section className="colour">
    <h1>{title}</h1>
    <button onClick={onRemove}>X</button>
    <div className="colour" style={{backgroundColor: colour}}></div>
    <div>
      <StarRating starsSelected={rating} onRate={onRate} />
    </div>
  </section>

export default Colour

