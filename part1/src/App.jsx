const Hello = (props) => {
  console.log(props);
  return (
    <>
      <p>
        Hello world {props.name}, you are {props.age} years old
      </p>
    </>
  );
};

const App = () => {
  const friends = [{name: 'Peter', age: 4},{name: 'Maya', age: 10}]
  return (
    <div>
      <Hello name={friends[0].name} age={friends[0].age}></Hello>
      <Hello name={friends[1].name} age={friends[1].age}></Hello>
    </div>
  );
};

export default App;
