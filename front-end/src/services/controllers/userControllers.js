import axios from "axios";

import * as constant from "../constant";

export const creatUser = (data) =>{
    try{
        
        return axios.post(constant.creat_user_url, data).then((res)=>{
            return res
        });
    }catch(error){
        return error;
    }
};