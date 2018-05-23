import React from 'react'
import Colour from './Colour'

const ColourList = ({colours=[], onRate=f=>f, onRemove=f=>f}) =>
  <div>
    {(colours.length === 0)
      ? <p>No Colours are listed</p>
      : colours.map((colour) =>
          <Colour
            key={colour.id} {...colour}
            onRate={(rating) => onRate(colour.id, rating)}
            onRemove={() => onRemove(colour.id)} />)
    }
  </div>

export default ColourList
