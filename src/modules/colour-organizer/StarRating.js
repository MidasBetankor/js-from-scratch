import React from 'react'
import Star from './Star'
//import '../../styles/StarRating.css'

const StarRating = ({starsSelected=0, totalStars=5, onRate=f=>f}) =>
  <div className="star-rating">
    {[...Array(totalStars)].map((star, i) =>
        <Star key={i} selected={i<starsSelected} 
        onClick={() => onRate(i+1)} />
    )}
    <p>{starsSelected} of {totalStars} stars</p>
  </div>

export default StarRating
