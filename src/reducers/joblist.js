const initialState = {
    jobList : []
}

const jobListReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'ADD_JOB' : {
            return state
        }
        case 'GET_JOB' : {
            const cvList = action.payload
            return {
                ...state,
                jobList : cvList
            }
        }  
        case 'GET_JOB_BYID' : {
            return state
        }
        case 'GET_DEFAULT_JOB' :{
            return {
                jobList : []
            }
        }
        default:
            return state
    }
}

export default jobListReducer;