import React from 'react';
import { withRouter } from 'react-router-dom';

class Home extends React.Component {
    constructor(props){
        super(props);

    }

    render(){
        return(
            <h1>Home</h1>
        )
    }
}

export default withRouter(Home);