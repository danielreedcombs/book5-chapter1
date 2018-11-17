import React, { Component } from 'react'


class LocationList extends Component {
    render() {
        return (
            <section className="location">
            {
                this.props.locations.map(location =>
                    <div key={location.id}>
                    <h1>Location {location.id}</h1>
                        {location.name}
                    </div>
                )
            }
            </section>
        )
    }
}

export default LocationList