import React, { Component } from 'react'


class LocationList extends Component {
    render() {
        return (
            <section className="locations">
            {
                this.props.locations.map(location =>
                    <div key={location.id}>
                    <p>{location.name}</p>
                    </div>
                )
            }
            </section>
        )
    }
}

export default LocationList