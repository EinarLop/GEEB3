import React from 'react'
import '../publicProfile.scss';

export default function Header() {
    return (
        <div class="header-container">
            <div class="left-side-header">
                <h2 class="logo">Intecreate</h2>
            </div>
            <div class="right-side-header">
                <a>Dashboard</a>
                <a>My Projects</a>
                <button class="header-button">Start a Project</button>
                <button class="header-button">Log Out</button>
            </div>

        </div>
    )
}
