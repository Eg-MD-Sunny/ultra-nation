import React from 'react';
import './Country.css';

const Country = (props) => {
    // console.log(props);
    const {name, population, region, flag} = props.countryItem;

    const countryStyle = {
        border: '1px solid rgba(0, 0, 0, 0.2)',
        margin: '10px',
        padding: '10px',
        borderRadius: '7px',
        float: 'left',
    }
    const flagStyle = {
        width: '300px',
        height: '200px'
    }

    const handleAdded = props.handleAdded;
    return (
        <div style={countryStyle}>
            <div>
                <img style={flagStyle} src={flag} alt=""></img>
                <h4>{name}</h4>
                <p>Population: {population}</p>
                <p>Region: {region}</p>
                <button className="main-button" onClick={() => handleAdded(props.countryItem)}>Add Country</button>
            </div>
        </div>
    );
};

export default Country;