import React, { Component } from 'react'

export default class EmployeeList extends Component {
    render () {
        return (
            <section className="employees">
            {
                this.props.employees.map(employees =>
                    <div key={employees.id} className="employees">
                        <div className="boom">
                            <h5 className="hotBoi">
                                {employees.name}
                                <a href="#"
                                    onClick={() => this.props.deleteEmployee(employees.id)}
                                    > Fire </a>
                            </h5>
                        </div>
                    </div>
                )
            }
            </section>
        )
    }
}
