import axios from "axios";

const login = async credentials => {
    const { data } = await axios.post("http://localhost:3001/user/login", credentials)
    return data
}

export default { login } 