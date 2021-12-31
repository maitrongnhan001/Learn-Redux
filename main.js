const { createStore } = window.Redux;

//state
const initialState = JSON.parse(localStorage.getItem('hobby_list') || '[]');

//reducer
const hobbyReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_HOBBY' : {
            const newList = [...state];
            newList.push(action.payload);
            return newList;
        }
        default :
        return state;
    }
}

//store
const store = createStore(hobbyReducer);

//-------------------------------------------
const rederHobbpyList = (hobbyList) => {
    if (!Array.isArray(hobbyList) || hobbyList.length === 0) return;

    const ulElement = document.querySelector('#hoppyListId');
    if (!ulElement) return;

    //reset list hobby
    ulElement.innerHTML = '';

    for (const hobby of hobbyList) {
        const liElement = document.createElement('li');
        liElement.textContent = hobby;

        ulElement.appendChild(liElement);
    }
}

//render initial date
const initialHobby = store.getState();
console.log(store);

rederHobbpyList(initialHobby);


//handle form
const hobbyFormElement = document.querySelector('#hobbyFormId');
if (hobbyFormElement) {
    const handleFormSubmit = (e) => {
        e.preventDefault();
        const hobbyTextElement = hobbyFormElement.querySelector('#hobbyTextId');

        if (!hobbyTextElement) return;
        const action = {
            type: 'ADD_HOBBY',
            payload: hobbyTextElement.value
        }

        store.dispatch(action);
        hobbyFormElement.reset();
    };

    hobbyFormElement.addEventListener('submit', handleFormSubmit);

    //update UI
    store.subscribe(() => {
        const newHobbyList = store.getState();

        rederHobbpyList(newHobbyList);
        localStorage.setItem('hobby_list', JSON.stringify(newHobbyList));
    });
}