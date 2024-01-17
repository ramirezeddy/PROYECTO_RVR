// import { Formulario_loginApp } from './Formulario_loginApp'
import React, { useEffect } from 'react';
import reactLogo from '../assets/react.svg';



export  function Formulario_login(){
    const inicio_sesion_on=true;
    return (
    <>


    <div className="container contenedor_inicio_sesion w-75 bg-primary mt-5 rounded shadow">
    <div className="row align-items-stretch">
        <div className="col bg d-none d-lg-block col-md-5 col-lg-5 col-xl-6 rounded">
         
        </div>
        <div className="col bg-white p-5 rounded-end">
            <div className="text-end">
             <img src={reactLogo} className= "logo react"alt="logo inicio de sesion"/>
             <img src="vite.svg" alt="logo inicio de sesion"/>
            </div>
            <h2 className='fw-bold text-center py-5'>BIENVENIDO</h2>
                {/* ------------LOGIN-------------- */}
                <form action="">
              
                <div className="mb-4">
                    <label htmlFor="email"  className='form-label'>Correo Electrónico</label>
                    <input type="email" className='form-control' name='email' />
                </div>
                <div className="mb-4">
                     <label htmlFor="password"  className='form-label'>Contraseña</label>
                    <input type="password" className='form-control' name='password' />
                </div>
                <div className="mb-4 form-check">
                    <input type="checkbox" name='connected' className='form-check-input' />
                    <label htmlFor="connected" className='form-check-label'>Mantenerme conectado</label>
                </div>
                <div className="d-grid">
                    <button type='submit'className='btn btn-primary'>Iniciar sessión </button>
                </div>
                <div className="my-3">
                    <span>No tienes cuenta? <a href="#" target="_blank"> Recuperar Contraseña</a></span>
          
                </div>
                </form>

                <div className='text-end fs-6 color text-secondary'>
                <span className=''>V.1.0.0</span>
                </div>
        </div>
     
    </div>
    </div>

   
    </>
 
    );


}