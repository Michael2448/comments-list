const reducerFunc = (state = [], action) => {

    switch (action.type) {
        case 'ADD_COMMENT': 
            const list1 = [...state,
                {id: action.id, text: action.text, author: action.author, date: action.date}];
            localStorage.setItem('tea', JSON.stringify(list1));
            return list1;

        case 'REMOVE_COMMENT':
            const list2 = state.filter(item => item.id !== action.id);
            localStorage.setItem('tea', JSON.stringify(list2));
            return list2;

        default: 
            return state;
    }
}
export default reducerFunc;