import axios from "axios";
import {useState } from 'react'


const URL = "http://localhost:8000/";
// const URL = "https://despliegue-back.onrender.com/api"


let token = localStorage.getItem("token")
console.log(token);

/*
███╗░░░███╗███████╗████████╗░█████╗░██████╗░░█████╗░    ██████╗░██╗░░░██╗████████╗
████╗░████║██╔════╝╚══██╔══╝██╔══██╗██╔══██╗██╔══██╗    ██╔══██╗██║░░░██║╚══██╔══╝
██╔████╔██║█████╗░░░░░██║░░░██║░░██║██║░░██║██║░░██║    ██████╔╝██║░░░██║░░░██║░░░
██║╚██╔╝██║██╔══╝░░░░░██║░░░██║░░██║██║░░██║██║░░██║    ██╔═══╝░██║░░░██║░░░██║░░░
██║░╚═╝░██║███████╗░░░██║░░░╚█████╔╝██████╔╝╚█████╔╝    ██║░░░░░╚██████╔╝░░░██║░░░
╚═╝░░░░░╚═╝╚══════╝░░░╚═╝░░░░╚════╝░╚═════╝░░╚════╝░    ╚═╝░░░░░░╚═════╝░░░░╚═╝░░░*/



// CAMBIAR CONTRASEÑA USUARIO
export const CambiarContraseña = async ( valores ) => {

    try {
        const resp = await axios({
            url: URL+"auth/api/change-password/",
            method: "PUT",
            headers: {
                "Authorization" :"Token "+token,
                "Content-Type":"application/json"
            },
            data: valores

        }).catch( function( error ) {

            if (error.response) {
                return { status : error.response.status};
            } 
        });

        return resp;

    } catch (error) {
        console.log( error );
    }
}




/* 
███╗░░░███╗███████╗████████╗░█████╗░██████╗░░█████╗░        ░██████╗░███████╗████████╗
████╗░████║██╔════╝╚══██╔══╝██╔══██╗██╔══██╗██╔══██╗        ██╔════╝░██╔════╝╚══██╔══╝
██╔████╔██║█████╗░░░░░██║░░░██║░░██║██║░░██║██║░░██║        ██║░░██╗░█████╗░░░░░██║░░░
██║╚██╔╝██║██╔══╝░░░░░██║░░░██║░░██║██║░░██║██║░░██║        ██║░░╚██╗██╔══╝░░░░░██║░░░
██║░╚═╝░██║███████╗░░░██║░░░╚█████╔╝██████╔╝╚█████╔╝        ╚██████╔╝███████╗░░░██║░░░
╚═╝░░░░░╚═╝╚══════╝░░░╚═╝░░░░╚════╝░╚═════╝░░╚════╝░        ░╚═════╝░╚══════╝░░░╚═╝░░░*/


export const getusers = async ( tokenID ) => {

    try {
        const resp = await axios({
            url: URL+"auth/api/getUsers/",
            method: "GET",
            headers: {
                "Authorization" :"Token "+ tokenID,
                "Content-Type":"application/json"
            }
        })
        return resp;

    } catch (error) {
        console.log( error );
    }
}



// export const getusersf = async ( id ) => {
//     try {
//         const respuesta = await axios.get(URL+"auth/api/getUsers/");
        
//         return respuesta;
//     } catch (error) {
//         console.log( error );
//     }
// }