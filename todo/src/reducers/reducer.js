import { ADD_TASK } from '../actions'

const initialState = {
    tasks: [
        {
            task: 'hmmmm',
            complete: false,
            id: 309842
        },
        {
            task: 'do the things', 
            complete: false,
            id: 492083
        }
    ]
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TASK:
        console.log('inside reducer')
        return {
            ...state,
            tasks: [
              ...state.tasks,
              { task: action.payload, completed: false, id: Date.now() }
            ]
          };
        default:
            return state;
    }

}

export default reducer;