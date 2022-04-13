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

export{
    obtenerChiste,
    obtenerUsers
}