import { PeopleList } from "../PeopleList";

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
  
export const PeopleListPage = () => (
    <>
        <h1>The People List Page</h1>
        <PeopleList people={people}/>
    </>
)