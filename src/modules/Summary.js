const Summary = ({ingredients=0, steps=0, title="[untitled]"}) => {
    return (
        <div className="summary">
            <h1>{title}</h1>
            <p>{ingredients} Ingredients | {steps} Steps</p>
        </div>
    )
}

Summary.propTypes = {
    ingredients: PropTypes.number.isRequired,
    steps: PropTypes.number.isRequired,
    displayName: "Summary",
    title: PropTypes.string
}

