import { NavLink, Outlet } from "react-router-dom"


export default function RootLayout() {
  return (
    <div className='root-layout'>
      <header>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
          <div class="container-fluid">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" 
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <a className="navbar-brand" href="HomePage">Homepage</a>
            <li className="nav-item">
              <NavLink to="HomePage" className={"nav-link"}>Home</NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="CounterButtonPage" className={"nav-link"}>Counter Button</NavLink>
            </li>

            <li className="navitem">
              <NavLink to="PeopleListPage" className={"nav-link"}>People List</NavLink>
            </li>
      </ul>
    </div>
          
          </div>
        </nav>
      </header>

        <main>
            <Outlet/>
        </main>
    </div>
  )
}
