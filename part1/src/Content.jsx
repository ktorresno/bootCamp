import Part from "./Part";
const Content = (props) => {
    return (
        <div>
            <Part name={props.part1} quantity={props.exercises1}/>
            <Part name={props.part2} quantity={props.exercises2}/>
            <Part name={props.part3} quantity={props.exercises3}/>
        </div>
    )
}

export default Content;