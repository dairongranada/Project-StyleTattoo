import { React } from 'react'
import { UptInfoT } from '../../UptInfoT'
import { ChevronsLeft }  from '../../../../UI/ChevronsLeft/ChevronsLeft.jsx'



/* F I R E B A S E */


export const TattoPassword = () => {

  return (
    <div className='BodyProfileUser'>
      <section className="seccion-perfil-usuario">
        <UptInfoT />

        <div className="perfil-usuario-body">
          <div className="perfil-usuario-footer">

            <div className="BackgroundIcon">
              <div className="BackgroundIcon">
                  <div><ChevronsLeft LinkExotico ="/userTatto/edit-profile"  classExotico= "ChevronsLeft" /></div>
                  <div className='BoxtTittleEditFiles'>
                    <h3 className='TittleEditsFiles'>Edita Tu Contraseña</h3>
                  </div>
                  <div><i class='bx bxs-user-detail' ></i></div>
                </div>
            </div>

          </div>

          <div className='contentBoxFiles'>
  
            <div className='ContentBoxtext'>
              <label className='label_global_style'>Contraseña Antigua</label>
              <input className='TheTextBox' type="text" placeholder='Escribe tu contraseña' /> 
            </div>

            <div className='ContentBoxtext'>
              <label className='label_global_style'>Nueva Contraseña</label>
              <input className='TheTextBox' type="email" placeholder='Cambia tu contraseña' /> 
            </div>

            <div className='ContentBoxButtonConfirm'>
              <button className='buttons_global_StyleTatto'>Guardar</button>
            </div>
            
          </div>




        </div>
      </section>
    </div>
  )
}