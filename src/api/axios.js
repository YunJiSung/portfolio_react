import axios from "axios";

const instance = axios.create({
    baseURL:"https://api.themoviedb.org/3",
    params:{
        api_key:"411a4542de8350a31fbd318eb41652b8",
        language:"ko-KR",
    },
});

export default instance;