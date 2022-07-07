import React, { useEffect, useState } from "react";
import SearchBar from "./components/search-bar/search-bar.component";
import CardGroup from "./components/card-group/card-group.component";
import "./App.css";

const App = () => {
  const [searchField, setSearchField] = useState("");
  const [animals, setAnimals] = useState([]);
  const [filteredAnimals, setfilteredAnimals] = useState(animals);

  useEffect(() => {
    fetch("https://f21b4e44-00af-416a-a8bf-ccb499e75957.mock.pstmn.io")
      .then((response) => response.json())
      .then((animals) => setAnimals(animals));
  }, []);

  useEffect(() => {
    const newFilteredAnimals = animals.filter((animal) => {
      return animal.name.common.toLocaleLowerCase().includes(searchField);
    });

    setfilteredAnimals(newFilteredAnimals);
  }, [animals, searchField]);

  const onFieldChange = (e) => {
    const searchFieldText = e.target.value.toLocaleLowerCase();
    setSearchField(searchFieldText);
  };

  return (
    <div className="App">
      <SearchBar placeholder="search here" onChangeHandler={onFieldChange} />
      <CardGroup animals={filteredAnimals} />
    </div>
  );
};

export default App;
