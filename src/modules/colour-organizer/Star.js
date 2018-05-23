import React from 'react'

const Star = ({ selected = false, onSelect=f=>f }) =>
  <div className={selected ? "star selected" : "star"}
    onClick={() => onSelect(5)} >
  </div>

export default Star
