const listaDocentes=[];


const loadDocentes= async()=>{
   
    try{
        listaDocentes.length=0;
        const respuesta=await fetch('http://localhost:3000/profesores');

        if(!respuesta.ok){
           throw new Error('Error al cargar docente. Estado: ',respuesta.status);
        }
        const Docentes=await respuesta.json();
        listaDocentes.push(...Docentes);

    }catch(error){
        console.error("Error al cargar Docentes",error.message);
    }
    console.log(listaDocentes)
}



const submitDocente=()=>{
    const nombreDocenteInput=document.getElementById("nombreDocente")
    const apellidoDocenteInput=document.getElementById("apellidoDocente")
    const tipoid_docInput=document.getElementById("tipoid_doc")
    const doc_docenteInput=document.getElementById("doc_docente")
    const dep_idInput=document.getElementById("dep_id")

    const nombreDocente=nombreDocenteInput.value;
    const apellidoDocente=apellidoDocenteInput.value;
    const tipoid_doc=tipoid_docInput.value;
    const doc_docente=doc_docenteInput.value;
    const dep_id= parseInt(dep_idInput.value);

    const nuevodocente={
        id:listaDocentes.length+1,
        nombre: nombreDocente,
        apellido: apellidoDocente,
        tipo_documento: tipoid_doc,
        numero_documento: doc_docente,
        departamento_id: dep_id
    }

    guardarDocente(nuevodocente);

    nombreDocenteInput=value='';
    apellidoDocenteInput=value='';
    tipoid_docInput=value='';
    doc_docenteInput=value='';
    dep_idInput=value='';


    alert('Docente creado con éxito!');


}


const guardarDocente= async(nuevodocente)=>{
    try{

        const respuesta=await fetch('http://localhost:3000/profesores',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify(nuevodocente),
        });

        if(!respuesta.ok){
           throw new Error('Error al crear el docente. Estado: ',respuesta.status);
        }
        const docenteCreado=await respuesta.json();
       
        
        console.log('docente creado:', docenteCreado);

    }catch(error){
        console.error("Error al cargar Docentes",error.message);
    }
}

console.log(listaDocentes);

const cargarDepartamentos=()=>{
    const dep_idInput=document.getElementById("dep_id");
    let datos = '';
    for ( const depto of listaDepartamentos){
        datos+=`<option value="${depto.id}">${depto.nombre}</option>`


    
    }
    console.log(datos)

    dep_idInput.innerHTML=datos;


}