import React from "react";
// import logo from './logo.svg';
import { Greeting } from "./Greeting";
import { PeopleList } from "./PeopleList";
import './App.css';

const people = [{
  name: 'Matthew',
  age: 40,
  hairColor: 'brown',
}, {
  name: 'Mallory',
  age: 17,
  hairColor: 'red',
}, {
  name: 'Brian',
  age: 55,
  hairColor: 'Blonde'
}];


function App() {
  let adjective = 'Ipsum';
  let url = "https://reactjs.org"

  return (    
    <div className="App">
      <header className="App-header">
      
      </header>
    </div>
  );
}
export default App;


//   <Greeting name="Sam" numberOfMessages={5} /> {/*person={{ name: "Sam", numberOfMessages: 5}} object in react*/}
{/* <PeopleList people={people}/>
<button onClick={()=> alert('hello')}>Click Me!</button>
<p>
  lorem {adjective}!
</p>
<a
  className="App-link"
  href={url}
  target="_blank"
  rel="noopener noreferrer"
>
  Learn React
</a> */}