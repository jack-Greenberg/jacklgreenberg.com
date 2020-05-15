import React from 'react';
const axios = require('axios');

import { Link } from 'react-router-dom';

import * as Icon from 'react-feather';

export class Sidebar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            archetypes: null,
            ready: false,
        }
    }

    componentDidMount() {
        axios.get('http://localhost:1314/archetypes')
        .then(res => {
            console.log(res);
            this.setState({
                archetypes: res.data,
                ready: true,
            })
        })
        .catch(err => {
            console.error(err);
        })
    }

    render() {
        if (this.state.ready) {
            var archetypes = this.state.archetypes.map(item => {
                return <li><Link to={"/archetypes/" + item.name.toLowerCase()}>{item.name}</Link></li>;
            })

            return (
                <>
                    <input id="AdminSidebar-trigger" type="checkbox" className="AdminSidebar-trigger__checkbox" />
                    <label htmlFor="AdminSidebar-trigger" className="AdminSidebar-trigger__button">
                        <span className="AdminSidebar-trigger__button--menu"><Icon.Menu /></span>
                        <span className="AdminSidebar-trigger__button--x"><Icon.X /></span>
                    </label>
                    <aside className="AdminSidebar">
                        <nav className="AdminSidebar__nav">
                            <ul>
                                <li><Link to="/archetypes">Archetypes</Link></li>
                                <ul>
                                    { archetypes }
                                </ul>
                            </ul>
                        </nav>
                    </aside>
                </>
            )
        } else {
            return null;
        }
    }
}
