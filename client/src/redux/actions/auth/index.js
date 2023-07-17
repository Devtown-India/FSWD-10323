import axios from '../../../utils/axios'

export const loginUser = (user) => {
 return async (dispatch) => {
    try {
        const response = await axios.post('/auth/login', user)
        const {data:responseData} = response
        const {token} = responseData.data
        axios.defaults.headers.common['Authorization'] = `${token}`
        dispatch({
            type: 'LOGIN_USER',
            payload: responseData.data
        })
    } catch (error) {
        console.log(error)
    }
 }
}