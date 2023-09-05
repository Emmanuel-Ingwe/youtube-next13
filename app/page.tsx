function Item({ name, isPacked }) {
	if (isPacked) {
	  return <li className="item">{name} ✔</li>;
	}
	return <li className="item">{name}</li>;
  }

  const people = [
	'Creola Katherine Johnson: mathematician',
	'Mario José Molina-Pasquel Henríquez: chemist',
	'Mohammad Abdus Salam: physicist',
	'Percy Lavon Julian: chemist',
	'Subrahmanyan Chandrasekhar: astrophysicist'
  ];
  
   function List() {
	const listItems = people.map(person =>
	  <li>{person}</li>
	);
	return <ul>{listItems}</ul>;
  }
  
  export default function PackingList() {
	return (
	  <section>
		<h1>Sally Ride's Packing List</h1>
		<ul>
		  <Item 
			isPacked={true} 
			name="Space suit" 
		  />
		  <Item 
			isPacked={true} 
			name="Helmet with a golden sidde" 
		  />
		  <Item 
			isPacked={false} 
			name="Photo of Tam" 
		  />
		</ul>
	  </section>
	);
  }