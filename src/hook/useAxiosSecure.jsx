

import axios from "axios";

export const axiosSecure=axios.create(
    {
        baseURL:'https://todo-list-server-five.vercel.app/'
    }
)
const useAxiosSecure = () => {
  return axiosSecure
};

export default useAxiosSecure;
