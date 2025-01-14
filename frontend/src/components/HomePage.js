import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/homePage.css';

function HomePage() {
    return (
        <div className="home-page">
            <div className="hero">
                <h1>Threats to Humanity</h1>
                <p>Explore the various existential threats that humanity faces, from nuclear war to climate change, and the potential impacts on our future.</p>
            </div>
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
            <div className="cta-container">
                <Link to="/learn-more" className="cta-button">Learn More</Link>
            </div>
            <div className="image-container">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYySHYvVpkVjzkbUznFoGwbEz1CHZoXes19w&s" alt="Threats to Humanity" />
            </div>
        </div>
    );
}

export default HomePage;

