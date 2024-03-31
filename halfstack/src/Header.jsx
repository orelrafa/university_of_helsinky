const Header = (props) => {
  console.log("Inside Header", props.course.name);
  return (
    <>
      <h1>{props.course.name}</h1>
    </>
  );
};

export default Header;
