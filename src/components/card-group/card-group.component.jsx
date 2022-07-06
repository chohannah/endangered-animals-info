import { Component } from "react";
import Card from "../../card/card.component";

class CardGroup extends Component {
  render() {
    const { animals } = this.props;

    return (
      <main className="card-group">
        {animals.map((animal) => {
          return <Card key={animal.id} animal={animal} />;
        })}
      </main>
    );
  }
}

export default CardGroup;
