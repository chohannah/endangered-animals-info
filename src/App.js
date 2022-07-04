import { Component } from "react";
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
    console.log("rendered!!");

    const { animals, searchField } = this.state;
    const { onFieldChange } = this;

    const filteredAnimals = animals.filter((animal) => {
      return animal.name.toLocaleLowerCase().includes(searchField);
    });

    return (
      <div className="App">
        <input
          className="search-bar"
          type="search"
          placeholder="search here"
          onChange={onFieldChange}
        />

        <CardGroup animals={filteredAnimals} />
      </div>
    );
  }
}

export default App;
