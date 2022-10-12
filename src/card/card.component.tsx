import { Animal } from "../types/animal";

type CardProps = {
  animal: Animal;
};

const Card = ({ animal }: CardProps) => {
  const {
    image,
    conservation_status,
    name: { common, scientific },
  } = animal;
  const urlAnimalName = common.toLocaleLowerCase().replaceAll(" ", "-");

  return (
    <article className="card">
      <a
        href={`https://www.worldwildlife.org/species/${urlAnimalName}`}
        // alt={`Click to learn more about ${common}`}
        target="_blank"
        rel="noreferrer"
      >
        <img src={image} alt={`${common}`} />
        <h2>{common}</h2>
        <p>{scientific}</p>
        <strong>{conservation_status}</strong>
      </a>
    </article>
  );
};

export default Card;
