import Header from "./Header";
import Content from "./Content";
import Total from "./Total";
const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      { name: "Fundamentals of React", exercises: 10 },
      { name: "Using props to pass data", exercises: 7 },
      { name: "State of a component", exercises: 14 },
    ],
  };
  //
  //
  return (
    <>
      <Header course={course}></Header>
      <Content data={course}></Content>
      <Total total={course}></Total>
    </>
  );
};

export default App;
