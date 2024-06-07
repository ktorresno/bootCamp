const Total = (props) => {
    const total = props.courses.parts[0].exercises + props.courses.parts[1].exercises + props.courses.parts[2].exercises;
    return <p>{props.courses.totalMessage} {total}</p>
}

export default Total;