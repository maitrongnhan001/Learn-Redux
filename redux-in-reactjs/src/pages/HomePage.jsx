import React from 'react';
import { useSelector } from 'react-redux';
import HobbyElement from "../components/home/hobbyList/index";
import { useDispatch } from 'react-redux';
import { addNewHobby, setActiveHobby } from '../actions/hobby';

const Homepage = () => {
    const hobbyList = useSelector(state => state.hobby.list);
    const activeId = useSelector(state => state.hobby.activeId);
    const dispath = useDispatch();

    const handleAddHobbyClick = () => {
        const randomId = Math.trunc(Math.random() * 10000);

        const newHobby = {
            id: Math.trunc(Math.random()*100),
            title: `this is my hobby ${randomId}`
        }

        const action = addNewHobby(newHobby);
        dispath(action);
    }

    const handleHobbyClick = (hobby) => {
        const action = setActiveHobby(hobby);

        dispath(action);
    }

    return (
        <div>
            <h1>Redux hook - home page</h1>
            <button onClick={handleAddHobbyClick}>Random hobby</button>

            <HobbyElement 
            hobbyList = {hobbyList}
            activeId = {activeId}
            onHobbyClick = {handleHobbyClick}
            ></HobbyElement>
        </div>
    );
}

export default Homepage;
