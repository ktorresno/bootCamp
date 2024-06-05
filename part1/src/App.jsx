//import Mensaje from './Mensaje'
import Content from "./Content";
import Header from "./Header";
import Total from "./Total";

/* const Description = () => {
  return <p>Esta es la app del curso fullstack bootcamp</p>
} */
const App = () => {
  console.log(' hello from component');
  const course = 'Half Stack application development';
  const part1 = 'Fundamentals of React';
  const exercises1 = 10;
  const part2 = 'Using props to pass data';
  const exercises2 = 7;
  const part3 = 'state of a component';
  const exercises3 = 14;
  const totalMessage = 'Number of exercises';
  return (
      <div>
        <Header course={course} />
       <Content 
          part1={part1} exercises1={exercises1}
          part2={part2} exercises2={exercises2}
          part3={part3} exercises3={exercises3}
       />
        <Total
          msg={totalMessage}
          exercises1={exercises1}
          exercises2={exercises2}
          exercises3={exercises3}
        />
        {/* <Mensaje color='yellow' msg = 'Estamos trabajando' />
        <Mensaje color='red' msg = 'en un curso' />
        <Mensaje color='blue' msg = 'de React' />
        <Description /> */}
      </div>
  )
}

export default App;
