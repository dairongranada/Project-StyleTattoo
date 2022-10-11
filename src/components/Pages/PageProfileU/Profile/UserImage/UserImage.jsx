import '../UserImage/UserImage.scss'
import {PageProfileU} from '../../PageProfileU.jsx'
import { React,useEffect,useState } from 'react'
import Cookies from 'universal-cookie';
import  imgProfiles  from '../../../../../images/Icons/profile.jpeg'




/* F I R E B A S E */


export const UserImage = () => {

  return (
    <div className='BodyProfileUser'>
      <div className='Content_profleUser'>
        <PageProfileU/>
        <div className='contPublicP'>
            <div className='contTittle'>
              <h3>Perfil Publico</h3>
              <p>Agrege informacion sobre usted</p>
              <hr/>
            </div>

            <div id='datesBasics' className='datesBasics'>
              <div className='contN'>
                <label htmlFor="text">Nombre</label>
                <input name='name' className='boxInf' type="text"/>
              </div>
              <div className='contN'>
                <label htmlFor="text">Apellido</label>
                <input name='apellido'  className='boxInf' type="text"/>
              </div>
              <div className='contN'>
                <label htmlFor="email">Correo</label>
                <input name='email' className='boxInf' type="text" />
              </div>
            </div>


            <div className='contButtonSave'>
              <button className='buttons_global_StyleTatto'>Guardar</button>
            </div>

        </div>
      </div>
    </div>
  )
}