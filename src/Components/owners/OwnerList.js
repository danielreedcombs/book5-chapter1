import React, {Component} from 'react'

class OwnerList extends Component {
    render() {
        return (
            <section className="Owner">
            {
                this.props.owners.map(owner =>
                    <div key={owner.id}>
                    <h1> Owners {owner.id}</h1>
                        {owner.name}
                    </div>
                )
            }
            </section>
        )
    }
}

export default OwnerList
