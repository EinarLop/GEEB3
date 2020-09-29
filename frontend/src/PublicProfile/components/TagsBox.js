import React, {useState, useEffect} from 'react';
import Tag from './Tag';

function TagsBox(props) {
    useEffect(() => {
        
    })

    const [tags, setTags] = useState([
        {
            name: 'Digital Marketing',
            type: 'M'
        },
        {
            name: 'Python',
            type: 'L'
        },
        {
            name: 'R programming',
            type: 'W'
        },
        {
            name: 'Adobe Photoshop',
            type: 'M'
        },
        {
            name: 'SCRUM',
            type: 'L'
        }
    ]); /* initialize with sample tags */

    const fetchTags = async (type) => {
        /*Aquí corremos el código equivalente a componentDidMount */
        /* Fetch the tags of this user from the database, 
        query according to props.type and user id */
    }

    const style = {
        display: 'block',
        color: '#fff'
    }

    return (
        <div style={style}>
            <h4>
                {props.title}
            </h4>
            <div className = "tags-box">
                {tags.map(tag => (
                    <Tag name={tag.name} /> /*Pasar como props un color aleatorio? */
                ))}
            </div>

        </div>
    )
}


export default TagsBox;