const initialState = {
    list: [],
    activeId: null
};

const hobbyReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_HOBBY': {
            let newList = [...state.list];
            newList.push(action.payload);
            console.log(newList);
            return {
                ...state,
                list: newList
            };
        }

        case 'SET_ACTIVE_HOPPY': {
            console.log({...state, activeId: action.payload.id});
            return {
                ...state,
                activeId: action.payload.id
            }
        }

        default:
            return state;
    }
}

export default hobbyReducer;