import { Component } from "react";

class CardGroup extends Component {
  render() {
    const { animals } = this.props;

    return (
      <div className="card-group">
        {animals.map((animal) => {
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

export default CardGroup;
