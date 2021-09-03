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
const userServices = {
    getUserInfo,
    addUserInfo
}

export default userServices;