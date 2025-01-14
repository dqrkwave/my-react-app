import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/homePage.css';

function HomePage() {
    return (
        <div className="home-page">
            <section className="hero">
                <h1>Global Risks: What Threatens Our Future?</h1>
                <p>Humanity faces unprecedented challenges. From catastrophic climate change to the rise of artificial intelligence, these existential threats could determine the fate of our species. Explore them here.</p>
            </section>

            <ul>
                <li><Link to="/threat/nuclear-war">Nuclear War</Link></li>
                <li><Link to="/threat/climate-change">Climate Change</Link></li>
                <li><Link to="/threat/global-pandemics">Global Pandemics</Link></li>
                <li><Link to="/threat/agi">Artificial General Intelligence</Link></li>
                <li><Link to="/threat/ecological-collapse">Ecological Collapse</Link></li>
                <li><Link to="/threat/asteroid-impact">Asteroid Impact</Link></li>
                <li><Link to="/threat/supervolcanic-eruption">Supervolcanic Eruption</Link></li>
                <li><Link to="/forum">Community Forum</Link></li>
            </ul>

            <Link to="/learn-more" className="cta-button">Discover More</Link>
        </div>
    );
}

export default HomePage;
