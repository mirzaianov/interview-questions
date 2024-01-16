import { useState } from 'react';

const cards = [
  {
    name: 'Ladarius',
    breed: 'Russian Spaniel',
    url: 'https://energetic-cartel.name',
    description: 'Et ea harum et ullam exercitationem ut et voluptas.',
    age: 3,
  },
  {
    name: 'Jarrod',
    breed: 'Istrian Shorthaired Hound',
    url: 'http://roasted-descendant.info',
    description: 'Quo hic et repellat eos eaque aut ut.',
    age: 1,
  },
  {
    name: 'Aron',
    breed: 'Šarplaninac',
    url: 'https://unlined-heirloom.com',
    description: 'Ipsa unde doloremque est debitis et.',
    age: 6,
  },
  {
    name: 'Aileen',
    breed: 'Small Münsterländer',
    url: 'http://authorized-junk.net',
    description: 'Rerum voluptatum hic sit libero expedita iste minima.',
    age: 4,
  },
  {
    name: 'Maribel',
    breed: 'Pungsan Dog',
    url: 'http://tinted-corral.name',
    description:
      'Ullam dolorem asperiores hic vel tempore est natus corporis aut.',
    age: 3,
  },
  {
    name: 'Carleton',
    breed: 'Chongqing dog',
    url: 'http://beautiful-gravel.com',
    description: 'Harum sapiente quae vel ut quaerat ut consequatur sit.',
    age: 1,
  },
  {
    name: 'Mitchel',
    breed: 'Petit Basset Griffon Vendéen',
    url: 'https://lumpy-neck.name',
    description: 'Quos illo id porro est possimus dicta aliquam vero nulla.',
    age: 7,
  },
  {
    name: 'Ephraim',
    breed: 'Gordon Setter',
    url: 'https://aged-rose.name',
    description: 'Soluta officiis libero et voluptates ullam consequatur.',
    age: 9,
  },
  {
    name: 'Brenna',
    breed: 'Shiba Inu',
    url: 'https://measly-settlement.com',
    description: 'Reiciendis enim aut odit.',
    age: 11,
  },
  {
    name: 'Bill',
    breed: 'Mahratta Greyhound',
    url: 'https://thorough-dough.org',
    description: 'Et voluptatem possimus.',
    age: 4,
  },
];

const CardsBlock = () => {
  console.log('CardsBlock');
  const [cardsList, setCarsList] = useState(cards);

  return (
    <div className="CardsBlock component">
      <h3>9. Cards Block: </h3>
      <CardsView cardsList={cardsList} />
    </div>
  );
};

const CardsView = ({ cardsList }) => {
  console.log('CardsView');
  return (
    <div className="CardsView">
      {cardsList.map((item, index) => (
        <Card
          key={index}
          name={item.name}
          breed={item.breed}
          url={item.url}
          description={item.description}
          age={item.age}
        />
      ))}
    </div>
  );
};

const Card = ({ name, breed, url, description, age }) => {
  console.log('Card');
  return (
    <div className="Card">
      <h4 className="heading">{name}</h4>
      <h5 className="subheading">{breed}</h5>
      <a
        className="link"
        href={url}
      >
        Link
      </a>
      <span className="descr">{description}</span>
      <span className="age">{age}</span>
    </div>
  );
};

export default CardsBlock;
