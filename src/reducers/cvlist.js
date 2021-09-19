const initialState = {
    cvList : {}
}

const cvListReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'ADD_CV' : {
            return state
        }
        case 'GET_CV' : {
            return state
        }  
        case 'GET_CV_BYID' : {
            const cvList = action.payload
            return {
                ...state,
                cvList : cvList
            }
        }
        case 'GET_DEFAULT_CV' :{
            return {
                cvList : {}
            }
        }
        default:
            return state
    }
}

export default cvListReducer;