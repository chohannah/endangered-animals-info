import { Component } from "react";
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

    const filteredAnimals = this.state.animals.filter((animal) => {
      return animal.name.toLocaleLowerCase().includes(this.state.searchField);
    });

    return (
      <div className="App">
        <input
          className="search-bar"
          type="search"
          placeholder="search here"
          onChange={this.onFieldChange}
        />
        {filteredAnimals.map((animal) => {
          return (
            <article key={animal.id}>
              <h2>{animal.name}</h2>
            </article>
          );
        })}
      </div>
    );
  }
}

export default App;
