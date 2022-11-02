import './PageProfileT.scss'
import { React, useState,useEffect } from 'react'
import { getusers }  from '../../../Helpers/ApiConsumer/PostUsers';




export const UptInfoT = () => {

    const [imgProfileU, setImgProfileU] = useState("https://i.postimg.cc/T2N5CnwK/perfil-Usuario-Anonim.png")


    const [user, setUser] = useState(JSON.parse(localStorage.getItem("usuario")));
    const [tokenID, setTokenID] = useState(localStorage.getItem("token"));
    const [userData, setUserData] = useState({});
  

  
  
    useEffect(()=>{
      if ( !!user ) {
          getusers( tokenID )
          .then( data => setUserData( data.data ));
      }else {
        console.log("No se ha autenticado");
      }
    
  }, [])
   console.log(userData.first_name)  

//   console.log(userData);


    return (
        <div className='perfil-usuario-content'>
            <div className="perfil-usuario-header">
                <div className="perfil-usuario-portada">
                    <div className="perfil-usuario-avatar">
                        <img src={imgProfileU} alt="img-avatar"/>
                        <div className='boton-avatar' type="button" id="addfile">
                            <span className="material-symbols-outlined">photo_camera</span>
                            <input id="changeImg" type="file" required />
                        </div>
                    </div>
                </div>
            </div>
            <div className="perfil-usuario-body">
                <div className="perfil-usuario-bio">
                    <i className='bx bxl-mailchimp'></i>
                    <h3 className="titulo">{ userData.first_name +" "+ userData.last_name }</h3>
                    <p className="texto">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className="redes-sociales">
                    <a href="/" className="boton-redes facebook fab fa-facebook-f"><i className='bx bx-home-alt'></i></a>
                    <li className="boton-redes twitter fab fa-twitter"><i className='bx bxl-mailchimp'></i> </li>
                    <a href='/tatto/view/profile' className="boton-redes instagram fab fa-instagram"><i className='bx bxs-paint'></i></a>
                </div>
            </div>
        </div>

    )
}
