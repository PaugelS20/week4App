import { NavLink, Outlet } from "react-router-dom"


export default function RootLayout() {
  return (
    <div className='root-layout'>
        <header>
            <nav>
                <h1>Jobarouter</h1>
                <NavLink to="HomePage" className={"nav-link"}>Home</NavLink>
                <NavLink to="CounterButtonPage">Counter Button</NavLink>
                <NavLink to="PeopleListPage">People List</NavLink>
            </nav>
        </header>

        <main>
            <Outlet/>
        </main>

    </div>
  )
}
