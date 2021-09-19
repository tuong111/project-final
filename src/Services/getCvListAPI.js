import axios from "axios";

const responseUrl = "https://tuong-json-sever.herokuapp.com/api"

const getCVlist = async () => {
    return new Promise((resolve, reject) => {
        axios.get(`${responseUrl}/cvlist`).then(
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
const addCVList = async (data) => {
    const res = await axios.post(`${responseUrl}/cvlist`,data)
    return res
}

const getCVByID = async (userID) => {
    return new Promise((resolve, reject) => {
        axios.get(`${responseUrl}/cvlist/${userID}`).then(
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
const editCVByID = async (id , data) => {
    const res = await axios.patch(`${responseUrl}/cvlist/${id}`, data)
    return res
}
const CVServices = {
    getCVlist,
    addCVList,
    getCVByID,
    editCVByID
}

export default CVServices;