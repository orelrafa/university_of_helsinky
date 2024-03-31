const Total = (props) => {
  console.log("Inside Total ", props.total.parts[0]);
  return (
    <>
      <p>
        Number of exercises{" "}
        <span>
          {props.total.parts[0].exercises +
            props.total.parts[1].exercises +
            props.total.parts[2].exercises}
        </span>
      </p>
    </>
  );
};

export default Total;
