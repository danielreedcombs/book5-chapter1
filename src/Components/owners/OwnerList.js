import React, {Component} from 'react'
export default class OwnerList extends Component {
    render () {
        return (
            <section className="Owners">
            {
                this.props.owners.map(owner =>
                    <div key={owner.id}>
                        <div key={owner.id} className="owners">
                            <h5 className="owners">
                                {owner.name}
                                <a href="#"
                                    onClick={() => this.props.deleteOwners(owner.id)}
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


