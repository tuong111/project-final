import axios from "axios";

const responseUrl = "https://tuong-json-sever.herokuapp.com/api"

const getUserInfo = async () => {
    return new Promise((resolve, reject) => {
        axios.get(`${responseUrl}/users`).then(
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
const addUserInfo = async (data) => {
    const res = await axios.post(`${responseUrl}/users`,data)
    return res
}

const getUserByID = async (id) => {
    return new Promise((resolve, reject) => {
        axios.get(`${responseUrl}/users/${id}`).then(
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
const editUserByID = async (id , data) => {
    const res = await axios.patch(`${responseUrl}/users/${id}`, data)
    return res
}
const userServices = {
    getUserInfo,
    addUserInfo,
    getUserByID,
    editUserByID
}

export default userServices;