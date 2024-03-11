const listaAlumnos=[];


const loadAlumnos= async()=>{
   
    try{
        listaAlumnos.length=0;
        const respuesta=await fetch('http://localhost:3000/alumnos');

        if(!respuesta.ok){
           throw new Error('Error al cargar alumno. Estado: ',respuesta.status);
        }
        const alumnos=await respuesta.json();
        listaAlumnos.push(...alumnos);

    }catch(error){
        console.error("Error al cargar alumnos",error.message);
    }
}



const submitAlumno=()=>{
    console.log("aqui estoy")
    const nombreAlumInput=document.getElementById("nombreAlum")
    const apellidoAlumInput=document.getElementById("apellidoAlum")
    const tipoIDInput=document.getElementById("tipoid")
    const docAlumInput=document.getElementById("numdocumento")
    const ciudadInput=document.getElementById("ciudad")
    const direccionInput=document.getElementById("direccion")
    const telefonoInput=document.getElementById("telefono")
    const fechaInput=document.getElementById("fechaNacim")
    const generoInput=document.getElementById("genero")
    const programAlumInput=document.getElementById("idprogram")

    const nombreAlum=nombreAlumInput.value;
    const apellidoAlum=apellidoAlumInput.value;
    const tipoID=tipoIDInput.value;
    const docAlum=docAlumInput.value;
    const ciudad=ciudadInput.value;
    const direccion=direccionInput.value;
    const telefono=telefonoInput.value;
    const fecha=fechaInput.value;
    const genero=generoInput.value;
    const programAlum = parseInt(programAlumInput.value);

    const nuevoAlumno={
        id:listaAlumnos.length+1,
        nombre: nombreAlum,
        apellido: apellidoAlum,
        tipo_documento: tipoID,
        numero_documento: docAlum,
        ciudad_residencia: ciudad,
        direccion: direccion,
        telefono: telefono,
        fecha_nacimiento: fecha,
        sexo: genero,
        programa_id: programAlum
    }

  
    guardarAlumno(nuevoAlumno);

    nombreAlumInput=value='';
    apellidoAlumInput=value='';
    tipoIDInput=value='';
    docAlumInput=value='';
    ciudadInput=value='';
    direccionInput=value='';
    telefonoInput=value='';
    fechaInput=value='';
    generoInput=value='';
    programAlumInput=value='';


    alert('Alumno creado con éxito!');


}


const guardarAlumno= async(nuevoAlumno)=>{
    try{

        const respuesta=await fetch('http://localhost:3000/alumnos',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify(nuevoAlumno),
        });

        if(!respuesta.ok){
           throw new Error('Error al crear el Alumno. Estado: ',respuesta.status);
        }
        const AlumnoCreado=await respuesta.json();
       
        
        console.log('Alumno creado:', AlumnoCreado);

    }catch(error){
        console.error("Error al cargar alumnos",error.message);
    }
}

console.log(listaAlumnos);

const cargarProgramasAlum=()=>{
    const dep_idInput=document.getElementById("idprogram");
    let datos = '';
    for ( const prog of listaProgramas){
        datos+=`<option value="${prog.id}">${prog.nombre}</option>`
    }
    console.log(datos)

    dep_idInput.innerHTML=datos;


}