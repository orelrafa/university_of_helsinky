import Part from './Part'
const Content = (props) => {
    return (
      <>
        <Part part={props.data[0].part1} exercises={props.data[0].exercises1}></Part>
        <Part part={props.data[1].part2} exercises={props.data[1].exercises2}></Part>
        <Part part={props.data[2].part3} exercises={props.data[2].exercises3}></Part>
      </>
    )
  }
  
  export default Content