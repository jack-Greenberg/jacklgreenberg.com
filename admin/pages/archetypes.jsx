import React from 'react';
const axios = require('axios');

import client from '../api';

export class Archetypes extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            archetypes: [],
        }
    }

    componentDidMount() {
        axios.get('http://localhost:1314/archetypes')
        .then(res => {
            console.log(res);
            this.setState({
                archetypes: res.data,
            })
        })
        .catch(err => {
            console.error(err);
        })
    }

    render() {
        var listItems = this.state.archetypes.map(item => {
            return <ArchetypeItem name={item.name} />;
        })
        return (
            <main className="AdminPage">
                { listItems }
            </main>
        )
    }
}

class ArchetypeItem extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <>
                <h2>{this.props.name}</h2>
            </>
        )
    }
}
