import './App.css';
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
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
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <a className="navbar-brand" href="/"><img src="./logo192.png" alt="" /></a>
            <Link className="nav-link" to='/counter'>Counter Page</Link>
            <Link className="nav-link" to='/people-list'>People List Page</Link>
          </ul>
        </nav>
          <Routes>
                <Route exact path="/" element={ <HomePage/> }/>
                <Route exact path="/counter" element={ <CounterButtonPage/> }/>
                <Route exact path="/people-list" element={ <PeopleListPage/> }/>
                <Route path="/protected" element={ <ProtectedPage/> }/>
                <Route path="/controlled" element={ <ControlledFormPage/> }/>
                {/* <Route path="/uncontrolled" element={ <UncontrolledFormPage/> }/> */}
                <Route path="*" element={ <NotFoundPage/> }/>
          </Routes>
        </BrowserRouter>
      </div>
  );
}
export default App;
