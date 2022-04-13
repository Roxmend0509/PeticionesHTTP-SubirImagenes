import regeneratorRuntime from "regenerator-runtime";
const jokeUrl="https://api.chucknorris.io/jokes/random";
const urlUsers="https://reqres.in/api/users?page=2";

const obtenerChiste = async() =>{
    try{

    const resp = await fetch(jokeUrl);
    if(!resp.ok) throw 'No se pudo realizar petición'

    const { icon_url,id,value } = await resp.json()

    return { 
        icon_url,
        id,
        value 
    };

    }catch(err){
        throw err;
    }
}

const obtenerUsers = async() =>{
    try{

    const resp = await fetch(urlUsers);
    if(!resp.ok) throw 'No se pudo realizar petición'

    const {data:users} = await resp.json()

    return users;

    }catch(err){
        throw err;
    }
}

const cloudPreset='wqs88uaa';
const cloudUrl='https://api.cloudinary.com/v1_1/dexrqqybt/upload';

const subirImage = async(file) =>{
    const formData = new FormData();
    formData.append('upload_preset',cloudPreset);
    formData.append('file',file);

    try{
        const resp = await fetch(cloudUrl,{
            method: 'POST',
            body:formData
        });

        if(resp.ok){
            const cloudResp = await resp.json();
            return cloudResp.secure_url;
        }else{
            throw await resp.json()
        }

    } catch(err){
        throw err;
    }
}

export{
    obtenerChiste,
    obtenerUsers,
    subirImage
}