const initialState = {
    hoso : {}
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
            const hosoUV = action.payload
            return {
                ...state,
                hoso : hosoUV
            }
        
        }
    
        default:
            return state
    }
}

export default hosoReducer;