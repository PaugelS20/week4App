import './App.css';
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { NavBar } from './NavBar';
import { FormsNavBar } from './FormsNavBar';
import { 
  HomePage, 
  CounterButtonPage, 
  PeopleListPage, 
  NotFoundPage, 
  ProtectedPage,
  ControlledFormPage,
  UncontrolledFormPage } from './pages';


const App = () => {
  return ( 
      <div class="container-fluid">
        <BrowserRouter>
          <NavBar/>
          <Routes>
                <Route exact path="/" element={ <HomePage/> }/>
                <Route exact path="/counter" element={ <CounterButtonPage/> }/>
                <Route exact path="/people-list" element={ <PeopleListPage/> }/>
                <Route path="/protected" element={ <ProtectedPage/> }/>
                <Route path="/forms" element={ <FormsNavBar />} />
                    <Route path="/forms/controlled" element={ <ControlledFormPage/> }/>
                    <Route path="/forms/uncontrolled" element={ <UncontrolledFormPage/> }/>
                <Route path="*" element={ <NotFoundPage/> }/>
          </Routes>
        </BrowserRouter>
      </div>
  );
}
export default App;
