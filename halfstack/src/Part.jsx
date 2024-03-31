const Part = (props) => {
  console.log("Inside Part", props.part.name, props.part.exercises);
  return (
    <>
      <p>
        {props.part.name} {props.part.exercises}
      </p>
    </>
  );
};

export default Part;
