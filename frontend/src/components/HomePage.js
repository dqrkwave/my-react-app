import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/homePage.css';

function HomePage() {
    return (
        <div className="home-page">
            <h1>Threats to Humanity</h1>
            <p>Explore the different existential threats that humanity faces,the ones that can wipe us out, a topic long debated about since ages, 
                :</p>
            <ul>
                <li><Link to="/threat/nuclear-war">Nuclear War</Link></li>
                <li><Link to="/threat/climate-change">Climate Change</Link></li>
                <li><Link to="/threat/global-pandemics">Global Pandemics</Link></li>
                <li><Link to="/threat/agi">Artificial General Intelligence</Link></li>
                <li><Link to="/threat/ecological-collapse">Ecological Collapse</Link></li>
                <li><Link to="/threat/asteroid-impact">Asteroid Impact</Link></li>
                <li><Link to="/threat/supervolcanic-eruption">Supervolcanic Eruption</Link></li>
                
                <li><Link to="/forum">Open Forum</Link></li>
            </ul>
        </div>
    );
}

export default HomePage;
