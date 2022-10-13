import { Animal } from "../../types/animal";

import Card from "../../card/card.component";

type CardGroupProps = {
  animals: Animal[];
};

const CardGroup = ({ animals }: CardGroupProps) => {
  return (
    <main className="card-group">
      {animals.map((animal) => {
        return <Card key={animal.id} animal={animal} />;
      })}
    </main>
  );
};

export default CardGroup;
