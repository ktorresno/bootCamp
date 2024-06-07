const Total = (props) => {
    const initialVal = 0;
    const total = props.courses.parts.reduce(
        (acc, currItem) => acc + currItem.exercises, 
        initialVal
    );
    return <p>{props.courses.totalMessage} {total}</p>
}

export default Total;