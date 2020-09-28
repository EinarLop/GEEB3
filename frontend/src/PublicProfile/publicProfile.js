import React from 'react'
import './publicProfile.scss'
import Header from './components/Header.js';

export default function publicProfile() {
    return (
        <div>
            <Header/>

            <div class="grid-wrapper">
                <div class="profile-sidebar">
                    <img className= "profile-pic" src="https://www.w3schools.com/howto/img_avatar2.png" alt="Avatar"/>
                    <div className="profile-name">Profile name</div>
                    <div className="profile-desc">
                        <p>Profesora de tiempo completo en el Tec de Monterrey
                        Campus Ciudad de México. Más de 20 años de experiencia 
                        desarrollando software. Me encantan los gatos.
                        </p>
                    </div>
                    <div className="profile-stats">Major: ITC | Semester: 5 | Leading: 1 project | Contributing: 2 projects</div>
                </div>


                <div class="profile-content"><h3>Profile content</h3>            
                    <button class="edit-btn">Edit Info</button>
                </div>

            </div>
        </div>
        
    )
}
