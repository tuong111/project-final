
export const addNewUser = (data) => {
    return {
        type : 'ADD_USER',
        payload : data,
    }
}

export const getUser= (data) => {
    return {
        type : 'GET_USER',
        payload : data,
    }
}


export const getUserID= (id) => {
    return {
        type : 'GET_USER_BYID',
        payload : id,
    }
}

export const defaultUser= (data) => {
    return {
        type : 'GET_DEFAULT_USER',
        payload : data,
    }
}