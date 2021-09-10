const initialState = {
    users : [],
    user : {}
}


const userReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'GET_USERS' : {
            return state
        }
        case 'ADD_USER' : {

            return state
        }  
        case 'GET_USER_BYID' : {
            const currentUser = action.payload

            return {
                ...state,
                user : currentUser
            }
        }
    
        default:
            return state
    }
}

export default userReducer;