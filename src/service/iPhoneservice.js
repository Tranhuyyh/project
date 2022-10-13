import http, * as  iPhoneservice from '../http/http';

const urlApi = ' http://localhost:3000/iPhone';
export const getAll =  async()=>{
    try{
        const res = await http.get(urlApi)
        return res.data;
    }
    catch (error){
        console.log(error)
    }

}

export const find =  async(id) =>{
    try{
        const res = await http.get(`${urlApi}/${id}`)
        return res.data;
    }
    catch (error){
        console.log(error)
    }

} 

export const search =  async(data) =>{
    try{
        const res = await http.post(`${urlApi}`,data)
        return res.data;
    }
    catch (error){
        console.log(error)
    }

} 