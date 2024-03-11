const listaSalones=[];


const loadSalones= async()=>{
   
    try{
        listaSalones.length=0;
        const respuesta=await fetch('http://localhost:3000/salones');

        if(!respuesta.ok){
           throw new Error('Error al cargar salon. Estado: ',respuesta.status);
        }
        const Salones=await respuesta.json();
        listaSalones.push(...Salones);

    }catch(error){
        console.error("Error al cargar Salones",error.message);
    }
}


const cargarSalonesTabla=()=>{
    const salonesInput=document.getElementById("tablaSalones");
    let datos = '';
    for ( const salon of listaSalones){
        datos+=`<tr>

        <td>${salon.id}</td>
        <td>${salon.capacidad_alumnos}</td>
        <td>${salon.edificio}</td>
        <td>${salon.piso}</td>
        <td>${salon.numero_identificacion}</td>


        </tr>`
    }
    console.log(datos)

    salonesInput.innerHTML=datos;


}