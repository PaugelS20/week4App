import { Greeting } from "../Greeting";

export const HomePage = () => {
    return ( 
        <>
        <h1>The Home Page</h1>
        <Greeting name="Sam" numberOfMessages={10}/>
        </>
    )
}
