import React from 'react';
import './AppHub.css';

const AppHub = () => {
    const apps = [
        { name: "Account", icon: "👤" },
        { name: "Zoeken", icon: "🔍" },
        { name: "Maps", icon: "🗺️" },
        { name: "YouTube", icon: "📺" },
        { name: "Play", icon: "▶️" },
        { name: "Gmail", icon: "✉️" },
        { name: "Drive", icon: "📂" },
        { name: "Agenda", icon: "📅" },
        { name: "Vertalen", icon: "🌐" },
        { name: "Foto's", icon: "📸" },
        { name: "Nieuws", icon: "📰" },
        { name: "Meet", icon: "📹" },
    ];

    return (
        <div className="app-hub">
            {apps.map((app, index) => (
                <div key={index} className="app-tile" onClick={() => window.open(`https://www.google.com/${app.name.toLowerCase()}`, '_blank')}>
                    <span className="app-icon">{app.icon}</span>
                    <span className="app-name">{app.name}</span>
                </div>
            ))}
        </div>
    );
};

export default AppHub;
