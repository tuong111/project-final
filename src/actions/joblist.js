
export const addNewJob = (data) => {
    return {
        type : 'ADD_JOB',
        payload : data,
    }
}

export const getJob= (job) => {
    return {
        type : 'GET_JOB',
        payload : job,
    }
}


export const getJobID= (data) => {
    return {
        type : 'GET_JOB_BYID',
        payload : data,
    }
}

export const defaultJobList= (data) => {
    return {
        type : 'GET_DEFAULT_JOB',
        payload : data,
    }
}