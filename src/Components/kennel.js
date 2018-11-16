import React, { Component } from "react"
import EmployeeList from "./employee/EmployeeList"
import LocationList from "./location/LocationList"
import AnimalList from "./animal/AnimalList"


class Kennel extends Component {
    /*
        Although you will eventually be pulling your objects
        from your json-server API, for this chapter, we're
        faking it and just creating those arrays in the component
        itself
    */
    employeesFromAPI = [
        { id: 1, name: "Jessica Younker" },
        { id: 2, name: "Jordan Nelson" },
        { id: 3, name: "Zoe LeBlanc" },
        { id: 4, name: "Blaise Roberts" }
    ]

    // This will eventually get pulled from the API
    locationsFromAPI = [
        { id: 1, name: "Nashville North", address: "500 Circle Way" },
        { id: 2, name: "Nashville South", address: "10101 Binary Court" }
    ]
    // list of owners
    ownersFromAPI = [
        { id: 1, name: "Ryan Tanay" },
        { id: 2, name: "Emma Beaton" },
        { id: 3, name: "Dani Adkins" },
        { id: 4, name: "Adam Oswalt" },
        { id: 5, name: "Fletcher Bangs"},
        { id: 6, name: "Angela Lee" }
    ]
    // list of Animals
    animalAPI =[
        { id:1, name: "Luna", type: "dog", owner_id: this.ownersFromAPI.name},
        { id:2, name: "milow", type: "cast", owner_id: this.ownersFromAPI.name}
    ]

    state = {
        employees: this.employeesFromAPI,
        locations: this.locationsFromAPI,
        animals: this.animalAPI,
        owners: this.ownersFromAPI
    }

    render() {
        return (
            <article className="kennel">
                <EmployeeList employees={this.state.employees} />
                <LocationList locations={this.state.locations} />
                <AnimalList animals={this.state.animals} />
            </article>
        )
    }
}

export default Kennel
