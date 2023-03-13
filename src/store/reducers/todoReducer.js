const initState = {
    todoList: [
        {
            id: 1,
            content: 'Join meetup event'
        }, {
            id: 2,
            content: 'Learn Javascript'
        }, {
            id: 3,
            content: 'Lunch Break'
        }
    ]
}

const todoReducer = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                ...state,
                todoList: [
                    ...state.todoList,
                    action.payload
                ]
            }
        case 'REMOVE_TODO':
            return {
                ...state,
                todoList: action.payload
            }
        case 'UPDATE_TODO':
            return {
                ...state,
                todoList: action.payload
            }
        default:
            return state
    }
}

export default todoReducer;