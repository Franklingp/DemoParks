import React from 'react';
import { withRouter } from 'react-router-dom';
import Map from '../components/Map';
import CardPark from '../components/CardPark';
import { getParks } from '../services/fetch';
import "./styles/Home.css";

class Home extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            parks: []
        }
    }

    async componentDidMount(){
        const parks = await getParks();
        this.setState({
            parks
        });
    }

    render(){
        console.log(this.state.parks);
        return(
            <section className="container">
                <section className="list-card">
                    {
                        this.state.parks.length !== 0 &&
                        this.state.parks.map(park => (
                            <CardPark key={park.id} {...park}/>
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