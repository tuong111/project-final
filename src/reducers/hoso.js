const initialState = {
    hoso : [],
    hosoID : {}
}

const hosoReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'GET_HOSO' : {
            return state

        
        }
        case 'ADD_HOSO' : {
            return state
        
        }  
        case 'GET_HOSO_BYID' : {
            return state
        
        }
    
        default:
            return state
    }
}

export default hosoReducer;