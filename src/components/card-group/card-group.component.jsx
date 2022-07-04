import { Component } from "react";

class CardGroup extends Component {
  render() {
    const { animals } = this.props;

    return (
      <div className="card-group">
        {animals.map((animal) => {
          return (
            <article key={animal.id}>
              <a
                href={`https://www.worldwildlife.org/species/${animal.species}`}
                alt={`Click to learn more about ${animal.name.common}`}
              >
                <img src={animal.image} alt={`${animal.name.common}`} />
                <h2>{animal.name.common}</h2>
                <p>{animal.name.scientific}</p>
                <strong>{animal.conservation_status}</strong>
              </a>
            </article>
          );
        })}
      </div>
    );
  }
}

export default CardGroup;
