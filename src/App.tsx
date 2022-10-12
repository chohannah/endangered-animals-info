import { useEffect, useState, ChangeEvent } from "react";

import { getData } from "./utils/data.utils";

import SearchBar from "./components/search-bar/search-bar.component";
import CardGroup from "./components/card-group/card-group.component";
import { Animal } from "./types/animal";

const App = () => {
  const [searchField, setSearchField] = useState("");
  const [animals, setAnimals] = useState<Animal[]>([]);
  const [filteredAnimals, setfilteredAnimals] = useState(animals);

  useEffect(() => {
    const fetchUsers = async () => {
      const users = await getData<Animal[]>(
        "https://f21b4e44-00af-416a-a8bf-ccb499e75957.mock.pstmn.io"
      );
      setAnimals(users);
    };

    fetchUsers();
  }, []);

  useEffect(() => {
    const newFilteredAnimals = animals.filter((animal) => {
      return animal.name.common.toLocaleLowerCase().includes(searchField);
    });

    setfilteredAnimals(newFilteredAnimals);
  }, [animals, searchField]);

  const onFieldChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const searchFieldText = e.target.value.toLocaleLowerCase();
    setSearchField(searchFieldText);
  };

  return (
    <div className="App">
      <SearchBar
        className="search-bar"
        placeholder="search here"
        onChangeHandler={onFieldChange}
      />
      <CardGroup animals={filteredAnimals} />
    </div>
  );
};

export default App;
