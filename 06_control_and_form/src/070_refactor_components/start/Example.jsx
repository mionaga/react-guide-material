import { useState } from "react";
import List from './components/List';
import Input from "./components/Input";

const Example = () => {
  const [filterVal, setFilterVal] = useState("");

  const animals = ["Dog", "Cat", "Rat"];
  const filteredAnimals = animals.filter((animal) => {
    const isMatch = animal.indexOf(filterVal) !== -1;
    return isMatch;
  })

  return (
    <>
      <Input filterState = {[filterVal, setFilterVal]} />
      <List animals={filteredAnimals} />
    </>
  );
};

export default Example;
