import axios from "axios";

const responseUrl = "https://tuong-json-sever.herokuapp.com/api"

const getHoSoAll = async () => {
    return new Promise((resolve, reject) => {
        axios.get(`${responseUrl}/hoso`).then(
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
const addHoSo = async (data) => {
    const res = await axios.post(`${responseUrl}/hoso`,data)
    return res
}

const getHoSoByID = async (userID) => {
    return new Promise((resolve, reject) => {
        axios.get(`${responseUrl}/hoso/${userID}`).then(
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
const editHoSoByID = async (id , data) => {
    const res = await axios.patch(`${responseUrl}/hoso/${id}`, data)
    return res
}
const hoSoServices = {
    getHoSoAll,
    addHoSo,
    getHoSoByID,
    editHoSoByID
}

export default hoSoServices;