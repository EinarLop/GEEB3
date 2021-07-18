import React from 'react'
import './publicProfile.scss'
import TagsBox from './components/TagsBox.js';

function PublicProfile() {
    return (
        <div>

            <div className="grid-wrapper">
                <div className="profile-sidebar">
                    <img className="profile-pic" src="https://www.w3schools.com/howto/img_avatar2.png" alt="Avatar" />
                    <div className="profile-name">Profile name</div>
                    <div className="profile-desc">
                        <p>Profesora de tiempo completo en el Tec de Monterrey
                            Campus Ciudad de México. Más de 20 años de experiencia
                            desarrollando software. Me encantan los gatos.
                        </p>
                    </div>
                    <div className="profile-stats">Major: ITC | Semester: 5 | Leading: 1 project | Contributing: 2 projects</div>
                </div>

                <div className="profile-content">
                    <TagsBox title={'Mastered'} type={'M'} />
                    <TagsBox title={'Learning'} type={'L'} />
                    <TagsBox title={'Want to learn'} type={'W'} />
                    <button className="edit-btn">Edit Info</button>
                </div>

            </div>
        </div>

    )
}

export default PublicProfile
