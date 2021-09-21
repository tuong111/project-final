import axios from "axios";

const responseUrl = "https://tuong-json-sever.herokuapp.com/api"

const getJoblist = async () => {
    return new Promise((resolve, reject) => {
        axios.get(`${responseUrl}/joblist`).then(
            res => {
                const {data} = res
                resolve(data)
            }
        )
        .catch(error => {
            reject(error)
        })
    })
}
const addJobList = async (data) => {
    const res = await axios.post(`${responseUrl}/joblist`,data)
    return res
}

const getJobByID = async (listId) => {
    return new Promise((resolve, reject) => {
        axios.get(`${responseUrl}/joblist/${listId}`).then(
            res => {
                const {data} = res
                resolve(data)
            }
        )
        .catch(error => {
            reject(error)
        })
    })
}
const editJobByID = async (id , data) => {
    const res = await axios.patch(`${responseUrl}/joblist/${id}`, data)
    return res
}
const jobServices = {
    getJoblist,
    addJobList,
    getJobByID,
    editJobByID
}

export default jobServices;