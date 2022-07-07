import Card from "../../card/card.component";

const CardGroup = ({ animals }) => {
  return (
    <main className="card-group">
      {animals.map((animal) => {
        return <Card key={animal.id} animal={animal} />;
      })}
    </main>
  );
};

export default CardGroup;
