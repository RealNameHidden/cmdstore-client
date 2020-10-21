  
import axios from 'axios'

const url = "https://command-store-api.herokuapp.com"

const config = {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
    }
  };

export const fetchAllData = async ()=>{
    try{
        const response = await axios.get(`${url}/get_all`,config);
        return response.data.map((data)=>({
            id: data.id,
            name: data.name,
            command: data.command
        })
        );
    }
    catch(error){
        console.log(error.message)
    }
}

export const addCommand = async (data)=>{
    console.log(data)
    try{
        await axios.post(`${url}/add_command`,data,config);
    }
    catch(error){
        console.log(error.message)
    }
}
export const removeCommand = async (id)=>{
    console.log(id)
    try{
        await axios.delete(`${url}/remove/${id}`,config);
    }
    catch(error){
        console.log(error.message)
    }
}
