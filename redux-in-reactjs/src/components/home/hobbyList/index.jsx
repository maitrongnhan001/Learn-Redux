import React from 'react';
import './style.css';

const Index = (props) => {
    const {hobbyList, activeId, onHobbyClick} = props;

    const handleClick = (hobby) => {
        if (onHobbyClick) {
            onHobbyClick(hobby);
        }
    }

    return (
        <div>
            <ul>
                {props.hobbyList.map(element => {
                    return (
                        <li 
                            key={element.id}
                            onClick={() => handleClick(element)}
                            className={element.id === activeId ? 'active' : '' }
                        >
                            {element.title}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default Index;
