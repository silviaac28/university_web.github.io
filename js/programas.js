const listaProgramas=[];


const loadProgramas= async()=>{
   
    try{
        listaProgramas.length=0;
        const respuesta=await fetch('http://localhost:3000/programas');

        if(!respuesta.ok){
           throw new Error('Error al cargar programa. Estado: ',respuesta.status);
        }
        const Programas=await respuesta.json();
        listaProgramas.push(...Programas);

    }catch(error){
        console.error("Error al cargar Programas",error.message);
    }
}


const cargarProgramasTabla=()=>{
    const programaInput=document.getElementById("tablaProgramas");
    let datos = '';
    for ( const program of listaProgramas){
        datos+=`<tr>

        <td>${program.id}</td>
        <td>${program.nombre}</td>
        <td>${program.nivel}</td>


        </tr>`
    }
    console.log(datos)

    programaInput.innerHTML=datos;


}