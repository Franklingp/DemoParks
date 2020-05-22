import React from 'react';
import { withRouter } from 'react-router-dom';
import Map from '../components/Map';
import CardPark from '../components/CardPark';
import { getParks } from '../services/fetch';

class Home extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            parks: []
        }
    }

    componentDidMount(){
        getParks();
    }

    render(){
        return(
            <section className="container">
                <section className="list-card">
                    {
                        this.state.parks.map(park => (
                            <CardPark {...park}/>
                        ))
                    }
                </section>
                <section className="map-home">
                    <Map />
                </section>
            </section>
        )
    }
}

export default withRouter(Home);