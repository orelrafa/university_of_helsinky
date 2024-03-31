import Part from "./Part";
const Content = (props) => {
  console.log("Inside Content", props.data.parts[0]);
  console.log("Inside Content", props.data.parts[1]);
  console.log("Inside Content", props.data.parts[2]);
  return (
    <>
      <Part part={props.data.parts[0]}></Part>
      <Part part={props.data.parts[1]}></Part>
      <Part part={props.data.parts[2]}></Part>
    </>
  );
};

export default Content;
