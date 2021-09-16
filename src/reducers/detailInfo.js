const initialState = {
    detailInfo : {}
}

const DetailInfoReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'ADD_DETAILINFO' : {
            return state

        
        }
        case 'GET_DETAILINFO' : {
            return state
        
        }  
        case 'GET_DETAILINFO_BYID' : {
            const detailInfo = action.payload
            return {
                ...state,
                detailInfo : detailInfo
            }
        
        }
    
        default:
            return state
    }
}

export default DetailInfoReducer;