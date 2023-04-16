'use strict';
// Funcion que difiere la carga del cóigoJS
window.addEventListener('load',()=>{
    const btnEnviar=document.getElementById('btnEnviar');
    const formulario=document.getElementById('formulario');
    formulario.addEventListener('submit',function(){
        const nombre=document.getElementById('nombre').value;
        const nombreSinEspacios=nombre.trim();
        const apellido=document.getElementById('apellido').value;
        const apellidoSinEspacios=apellido.trim();
        const edad=Number(document.getElementById('edad').value);
        formulario.reset();
        document.getElementById('spanNombre').innerHTML=`Nombre: ${nombreSinEspacios.trim()}`;
        document.getElementById('spanApellido').innerHTML=`Apellido: ${apellidoSinEspacios.trim()}`;
        document.getElementById('spanEdad').innerHTML=`Edad: ${edad}`;
        document.getElementById('resultados').classList.add('resultados-mostrar');
    })



})
