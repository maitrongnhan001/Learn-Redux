import React from 'react';
import { useSelector } from 'react-redux';
import hobbyList from "../components/home/hobbyList";

const Homepage = () => {
    const hobbyList = useSelector(state => state.hobby.list);

    return (
        <div>
            <h1>Redux hook - home page</h1>

            <hobbyList hobbyList = {hobbyList}></hobbyList>
        </div>
    );
}

export default Homepage;
