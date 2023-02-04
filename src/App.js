import React from "react";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import { HomePage, CounterButtonPage, 
        PeopleListPage, NotFoundPage, ProtectedPage, RootLayout } from './pages';
import './App.css';


const router = createBrowserRouter (
  createRoutesFromElements (
    <Route path="/" element={<RootLayout/>} errorElement={<NotFoundPage/>}>
      <Route index path="/HomePage" element={<HomePage/>}/>
      <Route path="/CounterButtonPage" element={<CounterButtonPage/>}/>
      <Route path="/PeopleListPage" element={<PeopleListPage/>}/>
      <Route path="/Protected" element={<ProtectedPage/>}/>
      <Route path="" element={<NotFoundPage/>}/>
    </Route>
  )
)

const App = () => {
  // const [numberOfClicks, setNumberOfClicks] = useState(0);
  // const [hideMessage, setHideMessage] = useState(false);

  // const increment = () => setNumberOfClicks(numberOfClicks + 1);
  return ( 
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}
export default App;


