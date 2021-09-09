
export const addNewHoSo = (data) => {
    return {
        type : 'ADD_HOSO',
        payload : data,
    }
}

export const getHoSo= (hoso) => {
    return {
        type : 'GET_HOSO',
        payload : hoso,
    }
}


export const getHoSoByID= (data) => {
    return {
        type : 'GET_HOSO_BYID',
        payload : data,
    }
}