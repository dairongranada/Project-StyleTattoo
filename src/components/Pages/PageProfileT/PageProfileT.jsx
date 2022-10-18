import './PageProfileT.scss'

import React , {useState} from 'react'
import { Link } from 'react-router-dom'
import imgP from '../../../images/Tatuadores/tatuador1.png'
import img1 from '../../../images/Tattos/portafolio1.jpg'
import img2 from '../../../images/Tattos/portafolio2.jpg'
import img3 from '../../../images/Tattos/portafolio10.jpg'
import img4 from '../../../images/Tattos/portafolio4.jpg'
import img5 from '../../../images/Tattos/portafolio5.jpg'
import img6 from '../../../images/Tattos/portafolio6.jpg'



export const PageProfileT = () => {
    
    //  C O N T A D O R    D E    M E   G U S T A

    const [contador, setContador] = useState(0)

    const count = () => {setContador(1)}

    // A R R A Y S   A P I  T A T U A D O R

    const tatuador = [
        {
            tatu: imgP,
            id: 1
        },
        ]

    // A R R A Y S   A P I   P O R T A F O L I O

    const imagenes = [
        {
            img: img1,
            id: 1
        },
        {
            img: img2,
            id: 2
        },
        {
            img: img3,
            id:3
        },
        {
            img: img4,
            id: 4
        },
        {
            img: img5,
            id: 5
        },
        {
            img: img6,
            id:6
        }
    ]


    const [tempimg, setTempimg] = useState('')

    const [temperfil, setTemperfil] = useState('')

    const getImg = (img , tatu) => {
        const modaL = document.getElementById('modalImg')
        modaL.style.visibility = "visible"
        setTempimg(img)
        setTemperfil(tatu)
    }

    const ocultarModal =() => {
        const modaL = document.getElementById('modalImg')
        const perfil = document.getElementById('modalperfil')
        modaL.style.visibility = "hidden" 
        perfil.style.visibility = "hidden"
    }

    const ocultarImageUp= () => {
        const modaL = document.getElementById('contmodalUp')
        const editprofile = document.getElementById('editprofile')
        modaL.style.visibility = "hidden"
        editprofile.style.visibility = "hidden"
    }
    const confirmUp = () => {
        const modaL = document.getElementById('contmodalUp')
        const editprofile = document.getElementById('editprofile')
        modaL.style.visibility = "hidden"
        editprofile.style.visibility = "hidden"

    }

    const openimgperfil = () => {
        const modal = document.getElementById('modalperfil')
        modal.style.visibility = "visible"
    }

    const imageUp =() => {
        const modaL = document.getElementById('contmodalUp')
        modaL.style.visibility ="visible"

    }
    const EditProfileImg = () => {
        const modal = document.getElementById('editprofile')
        modal.style.visibility ="visible"
    }


  return (
    <div className='BigContent'>

        <div className='contPather'>


            <div className='contPe'>   
                    <div className='ProfileArtistic'>
                        {tatuador.map((person, index) => {  
                            return(
                            <div  onClick={() => openimgperfil()}  className='contImg'><img key={index} className='Profile' src={person.tatu} alt=""/></div>
                            )
                        })}
                        <div className='infArtist'>
                        <div className='editSeparator'>
                                <div className='editProfile'><a  onClick={() => EditProfileImg()}  href="#"></a></div>
                                <div><label className='labelNameArtist'>Nombre</label><p>Samuel lopez Muñoz</p></div>
                                <div><label className='labelNameArtist'>Correo</label><p>CorreoPrueba@StyleTatto.com</p></div>
                                <div className='favoriteSymbols'
                                    ><span onClick={count} className="material-symbols-outlined">favorite <p>{contador}</p></span>
                                    <Link to="/perfilTatuPersonal"><span class="material-symbols-outlined">settings</span></Link>
                                </div>
                            </div>
                        </div>
                    </div>    
                    <div className='contInfo'>
                        <div className='infoDescription'>
                            <p>Lorem ipsum dolor sit amet consectetur 
                                adipisicing elit. Dolores tempore 
                                aperiam dolor sit holi shit.
                            </p>
                        </div>
                        <div className='contButtons'>
                        <a href='/citas'><button className='buttons_global_StyleTatto'>Agendar cita</button></a>
                        </div>
                    </div>
            </div>
            <div className ='ContTrabajos'>
                <div className='contPortafolio'>
                    <div className='contPortafolio2'>
                        <div className='Portafolio'>
                            <h2 className='PortafoliosTittle'>P R O Y E C T O S </h2>
                            
                        </div>
                        <div className='Trabajos'>
                            <div className='Tattos'>
                                <div className='Tatto'>
                                    {imagenes.map((imagen, index) => {
                                        return(
                                            <div className='contImageT'>
                                                <img onClick={() => getImg(imagen.img)} key={index} className='ContTatto' src={imagen.img} alt="" />
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           

        </div>
      

        {/* modal de foto de perfil del tatuador */}
        {tatuador.map((tatuador, index2) => {       

            return(
                <div id='modalperfil' className='modalImg'>
                    <div className='contModal'>
                        <img onClick={() => getImg(tatuador.tatu)}  key={index2} className='imge' id='img' src={tatuador.tatu} alt="" />
                        <svg id='close' onClick={() => ocultarModal()} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                        </svg>
                    </div>
                </div>
            )

            }   
        )   
        }
    </div>
  )
}