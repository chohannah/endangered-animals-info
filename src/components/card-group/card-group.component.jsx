import { Component } from "react";

class CardGroup extends Component {
  render() {
    const { animals } = this.props;

    return (
      <div className="card-group">
        {animals.map((animal) => {
          const {
            id,
            image,
            conservation_status,
            name: { common, scientific },
          } = animal;
          const urlAnimalName = common.toLocaleLowerCase().replaceAll(" ", "-");

          return (
            <article key={id}>
              <a
                href={`https://www.worldwildlife.org/species/${urlAnimalName}`}
                alt={`Click to learn more about ${common}`}
              >
                <img src={image} alt={`${common}`} />
                <h2>{common}</h2>
                <p>{scientific}</p>
                <strong>{conservation_status}</strong>
              </a>
            </article>
          );
        })}
      </div>
    );
  }
}

export default CardGroup;
