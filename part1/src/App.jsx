import Content from "./Content";
import Header from "./Header";
import Total from "./Total";

/* const Description = () => {
  return <p>Esta es la app del curso fullstack bootcamp</p>
} */
const App = () => {
  console.log(' hello from component');

  const courseInfo = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ],
    totalMessage: 'Number of exercises'
  };

  return (
      <div>
        <Header course={courseInfo.name} />
        <Content parts={courseInfo.parts} />
        <Total courses={courseInfo} />
      </div>
  )
}

export default App;
