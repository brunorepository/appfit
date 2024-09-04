import axios from 'axios'

const axiosInstance = axios.create({
	baseURL: 'https://hfit-shared-web-services.vercel.app',
})

export default axiosInstance
