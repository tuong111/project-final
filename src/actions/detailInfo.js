
export const addNewDetailInfo = (data) => {
    return {
        type : 'ADD_DETAILINFO',
        payload : data,
    }
}

export const getDetailInfo= (hoso) => {
    return {
        type : 'GET_DETAILINFO',
        payload : hoso,
    }
}


export const getDetailByID= (data) => {
    return {
        type : 'GET_DETAILINFO_BYID',
        payload : data,
    }
}
export const defaultDetail= (data) => {
    return {
        type : 'GET_DEFAULT_DETAIL',
        payload : data,
    }
}