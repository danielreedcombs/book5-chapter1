import { Route } from 'react-router-dom'
import React, { Component } from "react"
import AnimalList from './animal/AnimalList'
import LocationList from './location/LocationList'
import EmployeeList from './employee/EmployeeList'
import OwnerList from './owners/OwnerList'
import animalManager from "../modules/animalManager"
import OwnerManager from "../modules/ownerManager"
import locationManager from "../modules/locationManager"
import employeeManager from "../modules/employeeManager"
export default class ApplicationViews extends Component {
    state = {
        animals:[],
        employees:[],
        owners:[],
        locations:[]
    }

deleteAnimal = id => {
    return fetch(`http://localhost:8088/animals/${id}`, {
        method: "DELETE"
    })
    .then(e => e.json())
    .then(() => fetch(`http://localhost:8088/animals`))
    .then(e => e.json())
    .then(animals => this.setState({
        animals: animals
    })
  )
}

deleteEmployee = id => {
    return fetch(`http://localhost:8088/employees/${id}`, {
        method: "DELETE"
    })
    .then(e => e.json())
    .then(() => fetch(`http://localhost:8088/employees`))
    .then(e => e.json())
    .then(employees => this.setState({
        employees: employees
    })
  )
}
deleteOwners = id => {
    return fetch(`http://localhost:8088/owners/${id}`, {
        method: "DELETE"
    })
    .then(e => e.json())
    .then(() => fetch(`http://localhost:8088/owners`))
    .then(e => e.json())
    .then(owners => this.setState({
        owners: owners
    })
  )
}


componentDidMount(){
const newState ={}
animalManager.getAll().then(allAnimals => {
    this.setState({
        animals: allAnimals
    })
})
    employeeManager.getAll().then(allEmployees => {
        this.setState({
            employees: allEmployees
    })
})
    locationManager.getAll().then(allLocations => {
        this.setState({
            locations:allLocations
    })
})
    OwnerManager.getAll().then(allOwners => {
        this.setState({
            owners:allOwners
    })
})
}

    render(){
        return (
            <React.Fragment>
                <Route exact path="/locations" render={(props) => {
                    return <LocationList locations={this.state.locations} />
                }} />
                <Route exact path="/animals" render={(props) => {
                return <AnimalList deleteAnimal={this.deleteAnimal} animals={this.state.animals} />
                }} />
                <Route exact path="/employees" render={(props) => {
                    return <EmployeeList deleteEmployee={this.deleteEmployee} employees={this.state.employees} />
                }} />
                <Route exact path="/owners" render={(props) => {
                    return <OwnerList deleteOwners={this.deleteOwners} owners={this.state.owners} />
                }} />
            </React.Fragment>
        )
            }
}