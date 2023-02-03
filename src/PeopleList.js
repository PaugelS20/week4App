import React from "react";
import { PeopleListItem } from "./PeopleListItem";

export const PeopleList = ({ people }) => (
    <div className="container d-flex flex-column align-items-center">
        {people.map(person => <PeopleListItem person={person} key={person.name} />)}
    </div>
);