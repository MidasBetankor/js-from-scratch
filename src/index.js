import React from 'react'
import { render } from 'react-dom'
import Menu from './modules/Menu'
import data from './data/recipes'
import AddColorForm from './modules/AddColorForm'

window.React = React

render(
    <AddColorForm />,
    document.getElementById("react-container")
)
