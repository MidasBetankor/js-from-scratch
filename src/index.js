import React from 'react'
import { render } from 'react-dom'
import Menu from './modules/Menu'
import data from './data/recipes'

console.log(data)

window.React = React

render(
    <Menu recipes={data} />,
    document.getElementById("react-container")
)
