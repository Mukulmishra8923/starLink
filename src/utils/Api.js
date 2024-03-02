import axios from "axios";

const BASE_URL ='https://api.spacexdata.com/v4';


export const fetchDataFromApi = async(url , params) => { 
    try{
        const apiUrl = BASE_URL + url;
        const {data} = await axios.get(apiUrl ,{
            params
        })
        return data;
    }catch(err){
        console.log("error aa gya h");
        return err;

    }
}

