
const animals = ["Dog", "Cat", "Rat"];

const Example = () => {
  const helloAnimals = animals.map((animal) => {
    return <li>Hello, { animal }</li>
  });

  return (
    <>
      <h3>配列の操作</h3>
      <ul>
        { animals.map((animal) => <li>Hello, { animal }</li> )}
      </ul>
    </>
  );
};

export default Example;
