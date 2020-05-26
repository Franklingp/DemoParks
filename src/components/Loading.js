import React from 'react';
import { connect } from 'react-redux';
import "./styles/Loading.css";

const Loading = (props) => {

    return(
        <React.Fragment>
            { 
            props.parks.length < 1 && 
            <div className="content-loading">
                <div className="loader">Loading...</div>
                <h1>Loading...</h1> 
            </div>    
            }
            { props.parks.length > 1 && props.children }
        </React.Fragment>
    )
}

const mapStateToProps = (state) => ({
    parks: state.parks
})

export default connect(mapStateToProps)(Loading);