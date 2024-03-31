import Header from './Header'
import Content from './Content'
import Total from './Total'
const App = () => {
  const course='Half Stack application development'
  const data = [{part1 : 'Fundamentals of React', exercises1: 10},
                {part2: 'Using props to pass data', exercises2: 7},
                {part3: 'State of a component', exercises3: 14}];

  return (
    <div>
      <Header course={course}></Header>
      <Content data={data}></Content>
      <Total total={data[0].exercises1+data[1].exercises2+data[2].exercises3}></Total>
    </div>
  )
}

export default App