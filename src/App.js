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
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => {
            return { animals: users };
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
      return animal.name.toLocaleLowerCase().includes(searchField);
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
