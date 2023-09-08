import { useState } from 'react';
// import { useChatRoom } from './useChatRoom.js';

function ChatRoom({ roomId }) {
  const [serverUrl, setServerUrl] = useState('https://localhost:1234');

  useChatRoom({
    roomId: roomId,
    serverUrl: serverUrl
  });

  return (
    <>
      <label>
        Server URL:{' '}
        <input
          value={serverUrl}
          onChange={e => setServerUrl(e.target.value)}
        />
      </label>
      <h1>Welcome to the {roomId} room!</h1>
    </>
  );
}

export default function App() {
  const [roomId, setRoomId] = useState('general');
  const [show, setShow] = useState(false);
  return (
    <>
      <label>
        Choose the chat room:{' '}
        <select
          value={roomId}
          onChange={e => setRoomId(e.target.value)}
        >
          <option value="general">general</option>
          <option value="travel">travel</option>
          <option value="music">music</option>
        </select>
      </label>
      <button onClick={() => setShow(!show)}>
        {show ? 'Close chat' : 'Open chat'}
      </button>
      {show && <hr />}
      {show && <ChatRoom roomId={roomId} />}
    </>
  );
}

function Item({ name, isPacked }) {
	if (isPacked) {
	  return <li className="item">{name} ✔</li>;
	}
	return <li className="item">{name}</li>;
  }

  <Item name={"33"} isPacked={4}></Item>

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
	// return <ul>{listItems}</ul>
	// <p id="para1">Me too!</p>;
  }
  
  export default function PackingList() {
	return (
	  <section>
		<h1 id="" className="">Sally Ride's Packing List</h1>
		<p id="para1">Me too!</p>

		<a href=""></a>
		<h1></h1>
		<p></p>

		<a href="facebook.com"></a>

		<img src="" id="" alt="" />

		<form action="">
			<input type="text" />
			<label htmlFor=""></label>
		</form>

		<a href=""></a> <a href=""></a>

		<ul>
			<li>food</li>
			<li>clothe</li>
			<li>clothe</li>
			<li>clothe</li>
		</ul>

		<ul>
			<li></li>
		</ul>

		<a href=""></a>

		<a href=""></a>

		<table>
			<tr>
				<th></th>
				<th></th>
			</tr>
			<tr>
				<td></td>
			</tr>
		</table>




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