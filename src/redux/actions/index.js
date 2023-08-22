import { v4 as uuidv4 } from 'uuid';


export const addTodos = (data) => {
    return {
        type: 'ADD_TODO',
        payload: {
            id: uuidv4(),
            data: data
        }
    }
}

export const deleteTodos = (id) => {
    // console.log(id)
    return {
        type: 'DELETE_TODO',
        id,
    }
}

export const removeAllTodos = () => {
    return {
        type: 'REMOVE_ALL_TODO',
    }
}