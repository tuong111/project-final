import axios from "axios";

const responseUrl = "https://tuong-json-sever.herokuapp.com/api"


const addDetailInfo = async (data) => {
    const res = await axios.post(`${responseUrl}/detail`,data)
    return res
}

const getDetailInfoByID = async (id) => {
    return new Promise((resolve, reject) => {
        axios.get(`${responseUrl}/detail/${id}`).then(
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
const editDetailInfo = async (id , data) => {
    const res = await axios.patch(`${responseUrl}/detail/${id}`, data)
    return res
}
const DetailInfoUser = {
    addDetailInfo,
    getDetailInfoByID,
    editDetailInfo
}

export default DetailInfoUser;