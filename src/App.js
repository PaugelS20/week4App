import React, {useState} from "react";
import { createBrowserRouter, createRoutesFromElements, Navigate, Route, RouterProvider} from "react-router-dom";
import { HomePage, CounterButtonPage, PeopleListPage, NotFoundPage, ProtectedPage } from './pages';
// import { CongratulationsMessage } from "./CongratulationsMessage";
// import { CounterButton } from "./CounterButton";
// import { Greeting } from "./Greeting";
// import { PeopleList } from "./PeopleList";
import './App.css';
import RootLayout from "./pages/RootLayout";


const router = createBrowserRouter (
  createRoutesFromElements (
    <Route path="/" element={<RootLayout/>} errorElement={<NotFoundPage/>}>
      <Route index path="/HomePage" element={<HomePage/>}/>
      <Route path="/CounterButtonPage" element={<CounterButtonPage/>}/>
      <Route path="/PeopleListPage" element={<PeopleListPage/>}/>
      <Route path="/Protected" element={<Navigate to="/Homepage"/>}/>
      <Route path="" element={<NotFoundPage/>}/>
    </Route>
  )
)

function App() {
  const [numberOfClicks, setNumberOfClicks] = useState(0);
  const [hideMessage, setHideMessage] = useState(false);

  // const increment = () => setNumberOfClicks(numberOfClicks + 1);
  return ( 
    <div className="App">
      <RouterProvider router={router}/>
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