import { Component } from "react";
import SearchBar from "./components/search-bar/search-bar.component";
import CardGroup from "./components/card-group/card-group.component";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = { animals: [], searchField: "" };
  }

  componentDidMount() {
    fetch("https://f21b4e44-00af-416a-a8bf-ccb499e75957.mock.pstmn.io")
      .then((response) => response.json())
      .then((animals) =>
        this.setState(
          () => {
            return { animals };
          },
          () => {
            console.log(this.state);
          }
        )
      )
      .catch((err) => console.error(err));
  }

  onFieldChange = (e) => {
    const searchField = e.target.value.toLocaleLowerCase();

    this.setState(() => {
      return { searchField };
    });
  };

  render() {
    const { animals, searchField } = this.state;
    const { onFieldChange } = this;

    const filteredAnimals = animals.filter((animal) => {
      return animal.name.common.toLocaleLowerCase().includes(searchField);
    });

    return (
      <div className="App">
        <SearchBar placeholder="search here" onChangeHandler={onFieldChange} />
        <CardGroup animals={filteredAnimals} />
      </div>
    );
  }
}

export default App;
