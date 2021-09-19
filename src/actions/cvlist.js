
export const addNewCV = (data) => {
    return {
        type : 'ADD_CV',
        payload : data,
    }
}

export const getCV= (cv) => {
    return {
        type : 'GET_CV',
        payload : cv,
    }
}


export const getCVID= (data) => {
    return {
        type : 'GET_CV_BYID',
        payload : data,
    }
}

export const defaultCVList= (data) => {
    return {
        type : 'GET_DEFAULT_CV',
        payload : data,
    }
}